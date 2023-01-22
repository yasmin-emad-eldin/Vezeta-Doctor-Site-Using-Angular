import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
// import { ConfirmPassValidator } from './confirm-pass-validator';


@Component({
  selector: 'app-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  usrFormGroup: FormGroup;
  public loginForm!: FormGroup
  arrayOfDigits: any[] = []
  ////////////////////
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  f: any;
  g: any;
  h: any;
  /////////////////////
  doctorName: any
  doctorSpecialization: any
  clinicImagesPath: any

  doctorClinics: any
  doctorAppointments: any
  selectedFile1: any
  selectedFile2: any
  selectedFile4: any
  selectedFile5: any
  selectedFile3: any
  x: any
  y = []
  object:any
  ////////////////////////////
  doctorSpecializationOptionsEN = ["Dermatology", "Dentistry", "psychiatry", "Pediatrics and New Born", "Neurology", "Orthopedics", "Gynaecology and Infertility", "Ear, Nose and Throat", "Cardiology and Vascular Disease", "Allergy and Immunology", "Audiology"]
  doctorSpecializationOptionsAr = ["جلدية", "اسنان", "نفسي", "اطفال و حديث ولادة", "مخ واعصاب", "عظام", "نساء وتوليد", "انف واذن وحنجرة", "قلب واوعية دموية", "حساسية ومناعة", "سمعيات"]
  counteryAR = ["الوادي الجديد", "مطروح", " البحر الاحمر", "الجيزة", " جنوب سيناء", " شمال سيناء", "السويس", "البحيرة", "حلوان", "الشرقية", "الدقهلية", " كفر الشيخ", "الإسكندرية", "المنوفية", "المنيا", "الغربية", "الفيوم", "قنا", "أسيوط", "سوهاج", "الإسماعيلية", " بني سويف", "القليوبية", "أسوان", "دمياط", "القاهرة", "بورسعيد", "الأقصر", " السادس من أكتوبر"]
  counteryEN = [" New Valley", "Matruh", "Red Sea", "Giza", "South Sinai", "South Sinai", " Suez", "Beheira", "Helwan", "Sharqia", "Dakahlia", "Kafr el-Sheikh", "Alexandria", "Monufia", "Minya", "Gharbia", "Faiyum", "Qena", "Asyut", "Sohag"]
  /////////////////////////////////////
  constructor(private userauth: LoginService, private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.usrFormGroup = this.fb.group({

      doctorEmail: ['', [Validators.required]],
      arabicName: ['', [Validators.required]],
      englishName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doctorGender: ['', [Validators.required]],
      specialization_english: ['', [Validators.required]],
      specialization_arabic: ['', [Validators.required]],
      doctorLocation: ['', [Validators.required]],
      entity: ['', [Validators.required]],
      clinicWaitingTime: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      time1: ['', [Validators.required]],
      day1: ['', [Validators.required]],
      time2: ['', [Validators.required]],
      day2: ['', [Validators.required]],
      time3: ['', [Validators.required]],
      day3: ['', [Validators.required]],
      sectime1: ['', [Validators.required]],
      secday1: ['', [Validators.required]],
      sectime2: ['', [Validators.required]],
      secday2: ['', [Validators.required]],
      sectime3: ['', [Validators.required]],
      secday3: ['', [Validators.required]],
      placeEnglish: ['', [Validators.required]],
      placeArabic: ['', [Validators.required]],
      clinicEnglishName: ['', [Validators.required]],
      clinicArabicName: ['', [Validators.required]],
      secplaceEnglish: ['', [Validators.required]],
      secplaceArabic: ['', [Validators.required]],
      secclinicEnglishName: ['', [Validators.required]],
      secclinicArabicName: ['', [Validators.required]],
      profileImagePath: ['', [Validators.required]],
      certificateImagePath: ['', [Validators.required]],
      image1: ['', [Validators.required]],
      image2: ['', [Validators.required]],
      image3: ['', [Validators.required]],

    }

    )
  }
  ngOnInit(): void {
  }
  onFileChange1(event: any) {
    this.selectedFile1 = event.target.files[0]
    //  console.log(this.selectedFile1)

  }
  onFileChange2(event: any) {
    this.selectedFile2 = event.target.files[0]
    // console.log(this.selectedFile2)

  }
  onFileChange3(event: any) {
    this.selectedFile3 = event.target.files[0]
    //  console.log(this.selectedFile3)
    //   for (var i = 0; i < event.target.files.length; i++) { 
    //     this.selectedFile3.push(event.target.files[i]);
    // }
    // console.log(event.target.files)
    // for  (var i =  0; i <  event.target.files.length; i++)  {  
    //   this.selectedFile3.push(event.target.files[i]);
    // }
    // for (const key of event.target.files){
    //   console.log(key)
    //    this.selectedFile3.push(JSON.stringify(key) );

    // }
    console.log(this.selectedFile3)
  }
  onFileChange4(event: any) {
    this.selectedFile4 = event.target.files[0]
    console.log(this.selectedFile4)

  }
  onFileChange5(event: any) {
    this.selectedFile5 = event.target.files[0]
    console.log(this.selectedFile5)

  }
  userLogin() {
    this.doctorName = {
     arabicName:this.usrFormGroup.value.arabicName,
      englishName:this.usrFormGroup.value.englishName

    }
    this.doctorSpecialization = {
      specialization_english: this.usrFormGroup.value.specialization_english,
      specialization_arabic: this.usrFormGroup.value.specialization_arabic
    },

      this.doctorClinics = [
        {
          clinicAppointment: [
            {
              time1: this.usrFormGroup.value.time1,
              day1: this.usrFormGroup.value.day1
            },
            {
              time2: this.usrFormGroup.value.time2,
              day2: this.usrFormGroup.value.day2
            },
            {
              time3: this.usrFormGroup.value.time3,
              day3: this.usrFormGroup.value.day3,
            }
          ],
          place: [
            {
              placeEnglish: this.usrFormGroup.value.placeEnglish,
              placeArabic: this.usrFormGroup.value.placeArabic
            },
            {
              clinicEnglishName: this.usrFormGroup.value.clinicEnglishName,
              clinicArabicName: this.usrFormGroup.value.clinicArabicName
            }
          ]
        },
        {
          clinicAppointment: [
            {
              sectime1: this.usrFormGroup.value.sectime1,
              secday1: this.usrFormGroup.value.day1
            },
            {
              sectime2: this.usrFormGroup.value.sectime2,
              secday2: this.usrFormGroup.value.day2
            },
            {
              sectime3: this.usrFormGroup.value.sectime2,
              secday3: this.usrFormGroup.value.day3
            }
          ],
          place: [
            {
              placeEnglish: this.usrFormGroup.value.secplaceEnglish,
              placeArabic: this.usrFormGroup.value.secplaceArabic
            },
            {
              clinicEnglishName: this.usrFormGroup.value.secclinicEnglishName,
              clinicArabicName: this.usrFormGroup.value.secclinicArabicName
            }
          ]
        }
      ]

    // this.clinicImagesPath=[
    //   {
    //       "image": this.selectedFile3
    //   },
    //   {
    //       "image": this.selectedFile4
    //   },
    //   {
    //       "image":this.selectedFile5
    //   }
    // ],
    // this.clinicImagesPath=[this.selectedFile3,this.selectedFile4,this.selectedFile5]
    //   }]
    // console.log(this.clinicImagesPath)

    this.a = this.usrFormGroup.value.doctorEmail
    this.b = this.usrFormGroup.value.password
    this.c = this.usrFormGroup.value.doctorGender
    this.d = this.usrFormGroup.value.doctorLocation
    this.e = this.usrFormGroup.value.fees
    this.f = this.usrFormGroup.value.entity
    this.g = this.usrFormGroup.value.clinicWaitingTime
    ////////////////////////
    // console.log(this.doctorName)
    // console.log(this.a)
    // console.log(this.b)
    // console.log(this.c)
    // console.log(this.doctorSpecialization)
    // console.log(this.d)
    // console.log(this.e)
    // console.log(this.f)
    // console.log(this.g)
    // console.log(this.selectedFile2)
    // console.log(this.selectedFile1)
    // console.log(this.selectedFile3)
    // console.log(this.selectedFile4)
    // console.log(this.selectedFile5)


    ////////////////////

    const formData = new FormData();
    //   for  (var i =  0; i <  this.selectedFile3.length; i++)  {  
    //     formData.append("clinicImagesPath",  this.selectedFile3[i]);
    // } 
   formData.append('doctorName', JSON.stringify(this.doctorName));

    formData.append('doctorEmail', this.a);
    formData.append('password', this.b);
    formData.append('doctorGender', this.c);
    formData.append('doctorSpecialization', JSON.stringify( this.doctorSpecialization));
    formData.append('doctorLocation', this.d);
    formData.append('doctorClinics', JSON.stringify( this.doctorClinics));
    formData.append('certificateImagePath', this.selectedFile2);
    formData.append('profileImagePath', this.selectedFile1);
    formData.append('clinicImagesPath1', this.selectedFile3);
    formData.append('clinicImagesPath2', this.selectedFile4);
    formData.append('clinicImagesPath3', this.selectedFile5);

    formData.append('fees', this.e);
    formData.append('entity', this.f);
    formData.append('clinicWaitingTime', this.g);
    // formData.append('doctorAppointments',this.doctorAppointments);

    //  const formData = new FormData();

    // for ( var key in this.doctorName) {
    //   formData.append(key, this.object[key]);
    // }
    this.http.post('https://vezeeta-data-api.herokuapp.com/doctor-register',formData).subscribe(res => {
      alert('Wait vezeeta Techincal Support to accept your email.')

      console.log(res);

      this.router.navigate(['log-in']);

    })
    //   console.log(formData);





  }
}

  //   this.object={
  //     doctorName: {
  //         arabicName: this.usrFormGroup.value.arabicName,
  //         englishName: this.usrFormGroup.value.englishName
  //     },
  //     "doctorEmail":this.usrFormGroup.value.doctorEmail,
  //     "password":this.usrFormGroup.value.password,

  //     "doctorGender":this.usrFormGroup.value.doctorGender,
  //     "doctorSpecialization": {
  //         "specialization_english": this.usrFormGroup.value.specialization_english,
  //         "specialization_arabic": this.usrFormGroup.value.specialization_arabic
  //     },
  //     "doctorLocation": this.usrFormGroup.value.doctorLocation,
  //     "doctorClinics": [
  //         {
  //             "clinicAppointment": [
  //                 {
  //                     "time1": this.usrFormGroup.value.time1,
  //                     "day1": this.usrFormGroup.value.day1
  //                 },
  //                 {
  //                     "time2": this.usrFormGroup.value.time2,
  //                     "day2": this.usrFormGroup.value.day2
  //                 },
  //                 {
  //                     "time3":this.usrFormGroup.value.time3,
  //                     "day3":this.usrFormGroup.value.day2
  //                 }
  //             ],
  //             "place": [
  //                 {
  //                     "placeEnglish": this.usrFormGroup.value.placeEnglish,
  //                     "placeArabic": this.usrFormGroup.value.placeArabic
                  
  //                 },
  //                 {
  //                     "clinicEnglishName":  this.usrFormGroup.value.clinicEnglishName,
  //                     "clinicArabicName":  this.usrFormGroup.value.clinicArabicName
  //                 }
  //             ]
  //         },
  //         {
  //             "clinicAppointment": [
  //                 {
  //                     "sectime1": this.usrFormGroup.value.sectime1,
  //                     "secday1": this.usrFormGroup.value.secday1
  //                 },
  //                 {
  //                     "sectime2": this.usrFormGroup.value.sectime2,
  //                     "secday2": this.usrFormGroup.value.secday1
  //                 },
  //                 {
  //                     "sectime3": this.usrFormGroup.value.sectime3,
  //                     "secday3":this.usrFormGroup.value.secday3
  //                 }
  //             ],
  //             "place": [
  //                 {
  //                     "placeEnglish": this.usrFormGroup.value.secplaceEnglish,
  //                     "placeArabic":  this.usrFormGroup.value.secplaceArabic
  //                 },
  //                 {
  //                     "clinicEnglishName": this.usrFormGroup.value.secclinicEnglishName,
  //                     "clinicArabicName":this.usrFormGroup.value.secclinicArabicName
  //                 }
  //             ]
  //         }
  //     ],
  //     certificateImagePath: this.selectedFile2,
  //     profileImagePath:  this.selectedFile1,
  //     clinicImagesPath1:  this.selectedFile3,
  //     clinicImagesPath2:  this.selectedFile4,
  //     clinicImagesPath3:  this.selectedFile5,

  //     "fees": this.usrFormGroup.value.fees,
  
  //     "clinicWaitingTime": this.usrFormGroup.value.clinicWaitingTime,
  //     "entity":this.usrFormGroup.value.entity,
  // }


// this.e = this.usrFormGroup.value.fees
    // this.f = this.usrFormGroup.value.entity
    // this.g = this.usrFormGroup.value.clinicWaitingTime
