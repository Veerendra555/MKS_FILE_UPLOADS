import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { actionUrl, AppUrls } from 'src/environments/app-urls';

import { ImageUrls } from 'src/environments/image-urls';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  model: NgbDateStruct;
  member:any={
    role:'Admin'
  }
  keyPath:any="";
  imageUrl=ImageUrls.default_imgUrl;
  id:any = null;
  status:boolean = true;
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
  statusText: string;
  constructor(  private  router: Router,
    private uploadService : UploadService,
    private arouter : ActivatedRoute,
    private _location: Location,
    public snackBar:MatSnackBar) { 
      this.id = this.arouter.snapshot.queryParamMap.get('id');
      if(this.id != null)
      {
        this.status = false;
       this.getMemberById();
      }
    }
  

  formSubmit(form:NgForm)
  {
    console.log(this.member);
        // this.categorie.imageURL=this.imageUrl+"categories/"+this.keyPath;
        if (this.id == null) {
        Axios.post(AppUrls._baseUrl + actionUrl._addMember,this.member,{
      // headers: {
      //   'x-auth' : this.baseService.authToken

      // },
    })
      .then(response => {        
        console.log(response)
        if (response.data.code == 201 && response.data.type == 'success' ) {
          this.openSnackBar(response.data.message,'5000','close');
          // this.member = {};
          // form.resetForm("");
        setTimeout(() => {
          this.router.navigate(['/view-admins'])
        },1000);
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
      delete this.member.password;
      delete this.member.isActive;
      delete this.member.__v;
      Axios.put(
        AppUrls._baseUrl + actionUrl._updateMember,this.member,
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
            this.getMemberById();
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

  getMemberById(){
    Axios.get(AppUrls._baseUrl + actionUrl._getMemberById+this.id,{
      // headers: {
      //   'x-auth' : this.baseService.authToken
      // },
    })
      .then(response => { 
        if (response.data.code == 200 && response.data.type == 'success') {
          this.member = response.data.data;
          console.log(this.member);
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
  selectFile(event) {
    console.log("selectFile");
    this.selectedFiles = event.target.files[0];
    // this.upload(event.target.files[0]);
    this.upload();
  } 

  upload() {  // (file)
    let file = this.selectedFiles;
    let type="categories"
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

  backClicked() {
    this._location.back();
  }

}
