import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
interface User{
  id?: number;
  name?:string;
};
@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.scss']
})

export class TsComponent implements OnInit  {
  x:User={}
  arr: (number | boolean[] | (string|(string|number)[])) []=[10,[true],[6,'a']];
  theName: string = "Elzero";
  @ViewChild("myNameElem") myNameElem: ElementRef | undefined;
  @ViewChild("myNameElem1") myNameElem1: ElementRef | undefined;

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.x.id)
    // this.x=document.getElementById(this.hi) as HTMLInputElement
    // console.log(this.hi.value)
  }
// showMyDetails(a:string , b? :string , c?:string) {
//     return `${a}${b}${c}`;
//     console.log(this.showMyDetails(this.theName));

//   }
  getValue() {
    console.log(this.myNameElem?.nativeElement.value);
    console.log((<HTMLInputElement>document.getElementById("yy2")).value);
    console.log((<HTMLImageElement>document.getElementById("img1")).src);

  }
  getValue1() {
    console.log(document.getElementById('yy')?.innerHTML);
    console.log(this.myNameElem1?.nativeElement.value);

  }
  // Replace ???? With The Available Variables As Argument To Get The Result
}
