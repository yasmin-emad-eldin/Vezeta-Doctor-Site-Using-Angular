import { Component, OnInit,VERSION  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admins';
import { Doctors } from 'src/app/models/doctors';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
x:any
  usrFormGroup: FormGroup;

  isuserLogged:boolean = false;
  isuserLogged1:boolean = false;
  isuserLogged2:boolean = false;

  public loginForm!: FormGroup
  user:any
  totalpages:any
  doctor:Doctors[]=[]
  pages: number = 1;
  userlogout:boolean=true;
  userlogout1:boolean=true;
  userlogout2:boolean=true;

  arrayOfDigits: any[]=[]
  x2:any
  x4:any
  constructor(private userauth: LoginService, private fb: FormBuilder, private router:Router,private http: HttpClient){
    this.usrFormGroup=this.fb.group({
 
      doctorEmail:['',[Validators.required]],

    password:['',[Validators.required]],
    }

)
  }
  get adminEmail(){
    return this.usrFormGroup.get('doctorEmail');
  }
  get password(){
    return this.usrFormGroup.get('password');
  }

 ngOnInit(): void {
   
 }
 userLogin1(){
  console.log(this.usrFormGroup.value)
  this.userauth.userLogin1(this.usrFormGroup.value).subscribe((res)=>{
// if(res.body.message ='success'){
  console.log(res.body);

  console.log(res.body.message);
console.log(res.headers);
console.log(res.headers.get('doctor-token'))
console.log(res.body.body._id)
this.x2=res.body.body._id
this.x4=res.headers.get('doctor-token')

localStorage.setItem("AdminId5",this.x2);
  localStorage.setItem("AdminToken5",this.x4);
  this.router.navigate(['Doctorprofile']);

// }
// else if(res.body.message ='your account is being worked on'){
//   alert('Wait vezeeta Techincal Support to accept your email.')
// }

})
 }
}