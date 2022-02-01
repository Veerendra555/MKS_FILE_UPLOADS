import { Component, OnInit } from '@angular/core';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import Axios from 'axios';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  public role:any=''
  public id= !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))._id
  constructor() { 

  }

  ngOnInit() {
    this.getRoleDetails();
  }

  getRoleDetails() {
    Axios.get(AppUrls._baseUrl + actionUrl._getRoleById+this.id,{
    })
      .then(response => { 
        console.log(response);
        if (response.data.code == 200 && response.data.type == "success") {
          this.role = response.data.data;
        }
        else{
          this.role = 'Client';
        }
        // else if(this.baseService.checkToken(response.data.message , response.data.status))
        // {
          
        // }
         })
      .catch(function (error) {
        console.log(error)
      })
  }

}
