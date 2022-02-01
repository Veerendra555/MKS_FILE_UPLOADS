import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import { UploadService } from "src/app/services/upload.service";
import Axios from 'axios';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.scss']
})
export class ViewServiceComponent implements OnInit {
  dropdownSettingCat: IDropdownSettings = {};
  selectedItems = [];
  model: NgbDateStruct;
  clientList:any=[]
  flag:boolean=true;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  id:any;
  store:any={}
  warningStatus:boolean=false;
  clientid:any='';
  public userData = !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
  imageUrl=AppUrls._baseUrl;
  serviceData: any;
  closeResult = '';
  selectedObj:any = {};
  constructor(private router: Router,private uploadService:UploadService, public snackBar:MatSnackBar,config: NgbModalConfig, private modalService: NgbModal) { 
    if(this.userData.role != 'Admin')
    {
      this.getServiceDetails(this.userData._id);
      this.id = this.userData._id;
    }
    else{
      this.getClientList();
    }
   
  }

  showDropdwon()
  {
   return this.userData.role == 'Admin' ?  true : false;
  }
  //////Get Data
  
  getServiceDetails(id) {
    Axios.get(AppUrls._baseUrl + actionUrl._getServiceByClientId+id,{
    })
      .then(response => { 
        console.log(response);
        if (response.data.code == 200 && response.data.type == "success" && response.data.data.length) {
          this.serviceData = response.data.data;
          console.log(this.serviceData);
          console.log(response.data);
          if(this.flag)
          {
          this.dtTrigger.next();
          this.flag=false;
          }
        }
        else{
          this.serviceData = [];
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }

   bytesToMegaBytes(bytes) { 
    return (bytes / (1024*1024)).toFixed(3); 
  }
  

  getClientList() {
    Axios.get(AppUrls._baseUrl + actionUrl._getMember,{
      params:{
        role:"Client"
      }
     })
      .then(response => { 
        if (response.data.code == 200 && response.data.type == "success") {
          this.clientList = response.data.data;
          console.log(this.clientList);
          this.selectedItems=this.clientList[0];
          this.selectedItems = [
             { _id: this.selectedItems=this.clientList[0]['_id'], firstName: this.selectedItems=this.clientList[0]['firstName'] },
              this.id=this.clientList[0]['_id']
            ];
          //  this.subCatId=this.selectedItems[0]['subCatId'];
          // this.getManPowerData();
           this.getServiceDetails(this.id);
          this.dropdownSettingCat = {
            singleSelection: true,
            idField: '_id',
            textField: 'firstName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 5,
            allowSearchFilter: true,
            closeDropDownOnSelection:true
          }
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

  changeserviceStatus(data)
  {
    Axios.put(AppUrls._baseUrl + actionUrl._updateMemberStatus,{
        _id:data._id,
        isActive:!data.isActive
    })
      .then(response => { 
        if (response.data.code == 200 && response.data.type == "success") {
          this.openSnackBar(response.data.message,'5000','close');
           this.getServiceDetails(this.userData._id);
          // window.location.reload();
        }
        else
        {
          this.openSnackBar(response.data.message,'5000','close');
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }

/////////////////Edit Data
editData(id)
{
  this.router.navigate(['/edit-file'],{queryParams: {id : id}})
}
  ////////////////Delete Categoire
  deleteService(data)
  {
    if(confirm("Do You Delete This Record Permanently"))
    {
    // this.uploadService.deleteImage(data.imageURL.split('.com/')[1]);
    Axios.delete(AppUrls._baseUrl + actionUrl._deleteService+data._id,{
    })
      .then(response => { 
        console.log("Deleted Testing..")
        console.log(response)
        if (response.data.code == 200 && response.data.type == "success") {
          this.openSnackBar(response.data.message,'5000','close');
           this.getServiceDetails(this.id);
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

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      "lengthMenu": [[100, 200, -1], [100,200, "All"]]
    };
  }

  
  openSnackBar(msg, duration, action?) {
    this.snackBar.open(msg, action, {
      duration: duration,
    });
  }

  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  
  onChangeData(data)
  {
    console.log(data['_id']);
    this.id=data['_id'];
     this.getServiceDetails(this.id);
  }

}
