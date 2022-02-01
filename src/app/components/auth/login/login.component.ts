import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  ,Validators} from '@angular/forms';
// import { LoginModel } from '../../../Models/login.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Axios from 'axios';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { actionUrl, AppUrls } from 'src/environments/app-urls';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public forgotForm: FormGroup;
  msg: string;
  forgotStatus:boolean = false;
  loginStatus:boolean = true;

  constructor(private formBuilder: FormBuilder,
    private _http: HttpService,
    private authService:AuthServiceService,
    private  router: Router,
    public snackBar:MatSnackBar
    ) {
    this.createLoginForm();
    this.createRegisterForm();
    this.createforgotPasswordForm();
  }
  submitted = false;
  // loginModelObj: LoginModel = new LoginModel();
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      role:['Client', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createforgotPasswordForm() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  createRegisterForm()
  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  
  get f() {
    return this.loginForm.controls;
  }

  get g() {
    return this.registerForm.controls;
  }

  get h() {
    return this.forgotForm.controls;
  }

  forgotPassword()
  {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
      // this.authService.signinUser(this.email.value, this.password.value);
          Axios.post(AppUrls._baseUrl + actionUrl._forgotPassword, {
             email:this.forgotForm.get("email").value,
        })    
          .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") 
            {
              this.openSnackBar(response.data.message,'5000','close');
              this.loginStatus = true;
              this.forgotStatus = false;
              this.submitted = false;
              this.loginForm.controls['role'].setValue('Client');
            } 
            else
            {
              console.log("Error block")
              this.openSnackBar(response.data.message,'5000','close');
              // this.msg=response.data.message;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
  }

  ngOnInit() {
   
  }

  adminLogin() {
    // this.router.navigate(['/dashboard']);
    console.log(this.loginForm);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
      // this.authService.signinUser(this.email.value, this.password.value);
          Axios.post(AppUrls._baseUrl + actionUrl._memberLoginUrl, {
             role:this.loginForm.get("role").value,
             email:this.loginForm.get("email").value,
             password:this.loginForm.get("password").value
        })    
          .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") 
            {
                console.log("success block")
                console.log(response.data.token)
                console.log(response.data.data)
              localStorage.setItem('gearUpToken', response.data.token);
              localStorage.setItem('userData', JSON.stringify(response.data.data));
              this.authService.update();
              if(response.data.data.role == 'Admin')
               this.router.navigate(['/dashboard']);
              else
               this.router.navigate(['/view-file'])
            //  this.submitted=false;
            //  this.loginForm.reset();
            } 
            else
            {
              console.log("Error block")
              this.openSnackBar(response.data.message,'5000','close');
              // this.msg=response.data.message;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
  
    }
  
    memberReg() {
      // this.router.navigate(['/dashboard']);
      console.log(this.registerForm);
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
        // this.authService.signinUser(this.email.value, this.password.value);
            Axios.post(AppUrls._baseUrl + actionUrl._addMember, {
               role:'Client',
               firstName:this.registerForm.get("firstName").value,
               lastName:this.registerForm.get("lastName").value,
               email:this.registerForm.get("email").value,
               userName:this.registerForm.get("userName").value,
               password:this.registerForm.get("password").value,
               confirmPassword:this.registerForm.get("confirmPassword").value,
               phone:this.registerForm.get("phone").value
          })    
            .then(response => {
              console.log(response);
              if (response.data.code == 201 && response.data.type == "success") 
              {
                this.openSnackBar(response.data.message,'5000','close');
                this.loginStatus = true;
                this.submitted = false;
                this.loginForm.controls['role'].setValue('Client');
              } 
              else
              {
                console.log("Error block")
                this.openSnackBar(response.data.message,'5000','close');
                // this.msg=response.data.message;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
    
      }

    onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }
  

  openSnackBar(msg, duration, action?) {
    this.snackBar.open(msg, action, {
      duration: duration,
    });
  }


}
