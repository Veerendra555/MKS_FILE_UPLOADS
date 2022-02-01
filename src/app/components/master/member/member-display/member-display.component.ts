import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import { UploadService } from "src/app/services/upload.service";
import Axios from 'axios';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-member-display',
  templateUrl: './member-display.component.html',
  styleUrls: ['./member-display.component.scss']
})
export class MemberDisplayComponent implements OnInit {
  model: NgbDateStruct;
  flag:boolean=true;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  store:any={}
  warningStatus:boolean=false;
  memberData: any;
  closeResult = '';
  selectedObj:any = {};
  constructor(private router: Router,private uploadService:UploadService, public snackBar:MatSnackBar,config: NgbModalConfig, private modalService: NgbModal) { 
    this.getMemberDetails();
  }
  //////Get Data
  
  getMemberDetails() {
    Axios.get(AppUrls._baseUrl + actionUrl._getMember,{
     params:{
       role:"Client"
     }
    })
      .then(response => { 
        console.log(response);
        if (response.data.code == 200 && response.data.type == "success") {
          this.memberData = response.data.data;
          console.log(this.memberData);
          console.log(response.data);
          if(this.flag)
          {
          this.dtTrigger.next();
            this.flag=false;
          }
        }
        else{
          this.memberData = [];
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }


  changeMemberStatus(data)
  {
    Axios.put(AppUrls._baseUrl + actionUrl._updateMemberStatus,{
        _id:data._id,
        isActive:!data.isActive
    })
      .then(response => { 
        if (response.data.code == 200 && response.data.type == "success") {
          this.openSnackBar(response.data.message,'5000','close');
           this.getMemberDetails();
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
  this.router.navigate(['/edit-client'],{queryParams: {id : id}})
}
  ////////////////Delete Categoire
  deleteMember(data)
  {
    if(confirm("Do You Delete This Record Permanently"))
    {
    // this.uploadService.deleteImage(data.imageURL.split('.com/')[1]);
    Axios.delete(AppUrls._baseUrl + actionUrl._deleteMember+data._id,{
    })
      .then(response => { 
        console.log("Deleted Testing..")
        console.log(response)
        if (response.data.code == 200 && response.data.type == "success") {
          this.openSnackBar(response.data.message,'5000','close');
           this.getMemberDetails();
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

}
