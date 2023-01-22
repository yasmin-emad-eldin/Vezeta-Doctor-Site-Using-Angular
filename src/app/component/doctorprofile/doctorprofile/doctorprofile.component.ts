import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
doctorProfile:any
y: any
x: any
last: any
doctor = ["Dermatology", "Dentistry", "psychiatry", "Pediatrics and New Born", "Neurology", "Orthopedics", "Gynaecology and Infertility", "Ear, Nose and Throat", "Cardiology and Vascular Disease", "Allergy and Immunology", "Audiology"]
constructor(private userauth:LoginService,private router:Router , private http:HttpClient) { }

  ngOnInit() {

this.x=localStorage.getItem('AdminId5')
this.y=localStorage.getItem('AdminToken5')
console.log(this.x)
console.log(this.y)
let headers = new HttpHeaders()
   .set('doctor-token',this.y)
   this. last = this.doctor[this.doctor.length-1];
   console.log(this.last)
this.userauth.adminProfile1().subscribe(res=>{
  console.log(res.body)
  this.doctorProfile=res.body
  console.log(res.body. doctorClinics[0].clinicAppointment[0].time1)
  console.log(res.body. doctorClinics[1].clinicAppointment[0].secday1)

})

//     this. y=localStorage.getItem("AdminToken5")
// console.log(res.headers.get(''))

//   let headers = new HttpHeaders()
//    .set('Admin-Token',this.y)
//     let m=localStorage.getItem("AdminId5")
// console.log(m)
// console.log(this.y)
//     this.http.get(`https://vezeeta-data-api.herokuapp.com/doctor-profile/${m}`,{'headers':headers}).subscribe(res => {
//       alert('Uploaded Successfully.')
//       console.log(res);

//       ;
//     })
  }
  click(){
  this.doctor.push('hello')
  this. last = this.doctor[this.doctor.length-1];

  }
}
  //   this.userauth.adminProfile().subscribe(res=>{
  //     console.log(res)
  //     console.log(res.message)
  //     console.log(res.body._id)
  //   this.doctorProfile=res.body
  // this.doctorProfile=this.doctorProfile._id
  //    })
 
      // this.userauth.SingleDoctor().subscribe(res=>{
      //   console.log(res.body)

//         console.log(res.body._id)
//         console.log(res.body.doctorName)
//         console.log(res.body.doctorName.englishName)

        
        // this.doctorProfile=res.body
// console.log(this.doctorProfile.doctorName.englishName)
// console.log(this.doctorProfile.profileImagePath)
// console.log(this.doctorProfile.profileStatus)
// console.log(this.doctorProfile.doctorEmail)
// console.log(this.doctorProfile.doctorGender)
// console.log(this.doctorProfile.doctorSpecialization.specialization_english)
// console.log(this.doctorProfile.doctorLocation)
// console.log(this.doctorProfile.fees)
// console.log(this.doctorProfile.profileImagePath)
// console.log(this.doctorProfile.clinicImagesPath[0].image)

      //  })
  


// deletedoctors(id:number){
//   const body = { profileStatus: 'rejected' };
//   if(confirm("do you want delete the doctor ")){

//      this.userauth.deletePendingDoctor(id,body).subscribe(data => {
// alert(`delete doctor`)

// this.router.navigate(['/dashboard1']);

// })
      
//       }else{
//         alert("you cancel delete")
//       }
//   }
//   editedoctors(id:number){
//     const body = { profileStatus: 'accepted' };
//     if(confirm("do you want accept the doctor ?")){

//        this.userauth.deletePendingDoctor(id,body).subscribe(data => {
// alert(`accepted doctor`)
// this.router.navigate(['/dashboard1']);

// })
//         }else{
//           alert("you cancel accepted")
//         }
//     }

