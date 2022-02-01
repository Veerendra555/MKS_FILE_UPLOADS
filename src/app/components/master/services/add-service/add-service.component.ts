import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import {Location} from '@angular/common';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ImageUrls } from 'src/environments/image-urls';
import { UploadService } from 'src/app/services/upload.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  model: NgbDateStruct;
  service:any={}
  serviceObj:any={}
  uploadfile:any;
  imageUrl=AppUrls._baseUrl;
  oldImagePath:any=''
  fullPage: boolean = true;
  public config: any = {
    uiColor: 'transparent',
    // Define the toolbar groups as it is a more accessible solution.
    toolbarGroups: [
      {'name': 'basicstyles', 'groups': ['basicstyles']},
      // {'name': 'links', 'groups': ['links']},
      {'name': 'paragraph', 'groups': ['list', 'blocks']},
      // {'name': 'document', 'groups': ['mode']},
      // {'name': 'insert', 'groups': ['insert']},
      {'name': 'styles', 'groups': ['styles']},
      {'name': 'about', 'groups': ['about']}
    ],
    // Remove the redundant buttons from toolbar groups defined above.
    removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
  };
  submitted: boolean;
  selectedFiles: any;
  id:any = null;
  employee = !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))._id;
  statusText: string;
  status:boolean = true;
  keyPath: string;
  constructor(  private  router: Router,
    private _location: Location,
    private arouter : ActivatedRoute,
    private uploadService : UploadService,
    public snackBar:MatSnackBar) {
      this.id = this.arouter.snapshot.queryParamMap.get('id');
      if(this.id != null)
      {
        this.status = false;
       this.getServiceById();
      }
      
     }

     selectFile(event) {
      if (event.target.files.length > 0) {
        if(this.id != null)
        {
         this.service.oldFilePath = this.serviceObj.serviceFileUrl;
        }
        const file = event.target.files[0];
        this.service.fileName = file.name
        this.service.fileSize = file.size
        this.uploadfile = file;
      }
    }
  

  formSubmit(form:NgForm)
  {
    const formData = new FormData();
    console.log(this.service);
    console.log(this.uploadfile);
    if(this.id)
    {
      delete this.service.__v;
      delete this.service.createdAt;
      delete this.service.updatedAt;
    }
    if(this.service.oldFilePath == '')
    {
      this.service.serviceFileUrl = this.serviceObj.serviceFileUrl;
    }
     formData.append('serviceFileUrl', this.uploadfile);
     console.log(formData);
      // return;
      if (this.id == null) {
        this.service.employee = this.employee;
        formData.append('data', JSON.stringify(this.service));
        Axios.post(AppUrls._baseUrl + actionUrl._addService,formData,{
      // headers: {
      //   'x-auth' : this.baseService.authToken

      // },
    })
      .then(response => {        
        console.log(response)
        if (response.data.code == 201 && response.data.type == "success") {
          this.openSnackBar(response.data.message,'5000','close');
           form.resetForm("");
        }
        else
        {
          this.openSnackBar(response.data.message,'5000','close');
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    else {
      formData.append('data', JSON.stringify(this.service));
      Axios.put(
        AppUrls._baseUrl + actionUrl._updateService,formData,
        // {
        //   headers:{
        //     'Authorization' : "Bearer "+ localStorage.getItem("CylinderManagmentToken") 
        //   }
        // }
      )
        .then(response => {
          console.log('resp: ', response);
          if (response.data.code == 200 && response.data.type == 'success' ) {
            this.openSnackBar(response.data.message,'5000','close');
            // this.member = {};
            // form.resetForm("");
            this.getServiceById();
          }
          else
          {
            this.openSnackBar(response.data.message,'5000','close');
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }

  }











  backClicked() {
    this._location.back();
  }


  getServiceById(){
    Axios.get(AppUrls._baseUrl + actionUrl._getServiceById+this.id,{
      // headers: {
      //   'x-auth' : this.baseService.authToken
      // },
    })
      .then(response => { 
        if (response.data.code == 200 && response.data.type == 'success') {
           var data = response.data.data;
           this.serviceObj = response.data.data;
           this.service.fileName = data.fileName;
           this.service.fileSize = data.fileSize;
           this.service.fileDescription = data.fileDescription;
           this.service._id = data._id;
           this.service.employee = data.employee._id;
           this.service.isActive = data.isActive;
          // this.oldImagePath = this.service.serviceImageUrl;
           this.service.oldFilePath = '';
          console.log(this.service);
          console.log(response.data);
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }

  ////////////////////Image Code
  // selectFile(event) {
  //   console.log("selectFile");
  //   this.selectedFiles = event.target.files[0];
  //   // this.upload(event.target.files[0]);
  //   this.upload();
  // } 

  upload() {  // (file)
    let file = this.selectedFiles;
    let type="services"
    console.log("UPLOAD", file);
    let self = this;
    self.statusText = "Uploaded.....";
    self.uploadService.uploadFileAny(file,type ,function (err ,key) {
      if (err) console.log(err);
      console.log('Seccouse ', err, key);
      self.keyPath=key;
    //   else {
    //      console.log(key);
    //     // axios.post(self.baseurl + 'admin/api/media/', { "name": self.name, "key": key ,"type":"img"}, {
        //   headers: { 'x-auth': self.token }
        // })
          // .then(response => {
          //   console.log(response);
          //   self.statusText = "Image Uploaded Succesfully";
          //   self.getAllMedia();
          // }).catch((error) => {
          //   // handle error
          //   console.log("0000", error);
          //   self.statusText = "Image Uploaded Error";
          // }).
          // finally(() => {
          //   // always executed
          //   // this.loading = true;
          //   self.selectedFiles = {};
          // });
      // };
    });
  }


  openSnackBar(msg, duration, action?) {
    this.snackBar.open(msg, action, {
      duration: duration,
    });
  }

  ngOnInit(): void {
  }


}
