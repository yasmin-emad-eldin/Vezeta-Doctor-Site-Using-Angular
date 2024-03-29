import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';  
import{render} from'creditcardpayments/creditCardPayments'
declare var paypal: any;  

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

//   constructor() { 
//     render( 
//        {id:"myPaypalButtons",
//        currency:"USD",
//        value:"100.00",
//        onApprove:(details)=>{
// alert("success!");

//        }
// } 
//     );
//   }
//   ngOnInit(): void {
    
//   }
  @ViewChild('paypal',{static:true}) paypalElement: ElementRef | any;  
  constructor() { }  
  planId: any;  
  subcripId: any;  
  basicAuth = 'Basic QWNWUTBIX05QTVlWMDIzSDhMM3Y2alhNcDRVdaUN2V0M4Mmo4a19hodjdkdS14M3F4dFJ6Y2pNTnRPcGN6OUpPdjU1TW9jTllsEV1p5WURWNm46RUZJRWtJd0dYdDFJSTdFRmlEdVQ3UWExV2ZXWDZnYmw3Z2w5ajgwZVlsVjI1ODdfUTRHSUxCSWxZfOGg1SzRRZTFhMZU1yVgFZGRThIWXAyRjA=Afx_D8tHN_6rg_HEsfqndavCxVp6rDGQLNlqi-NfCOwAlp81nTO2y7AytYftzR8B3c3TysznuJMzZePW+EKbc1dbnZ7yc3lhPOBm_RJ5W-pkfKEvYLoq_UzyJp-r1poz7GfV80uLV264wfelB2b_MbWPQWhDYUb3J';  //Pass your ClientId + scret key
  ngOnInit() {     
    const self = this;  
    this.planId = 'P-20D52460DL479523BLV56M5Y';  //Default Plan Id
    paypal.Buttons({  
      createSubscription: function (data:any, actions:any) {  
        return actions.subscription.create({  
          'plan_id': self.planId,  
        });  
      },  
      onApprove: function (data:any, actions:any) {  
        console.log(data);  
        alert('You have successfully created subscription ' + data.subscriptionID);  
        self.getSubcriptionDetails(data.subscriptionID);  
      },  
      onCancel: function (data:any) {  
        // Show a cancel page, or return to cart  
        console.log(data);  
      },  
      onError: function (err:any) {  
        // Show an error page here, when an error occurs  
        console.log(err);  
      }  
  
    }).render(this.paypalElement.nativeElement);  
  
  }  
  // ============Start Get Subcription Details Method============================  
  getSubcriptionDetails(subcriptionId: any) {  
    const xhttp = new XMLHttpRequest();  
    xhttp.onreadystatechange = function () {  
      if (this.readyState === 4 && this.status === 200) {  
        console.log(JSON.parse(this.responseText));  
        alert(JSON.stringify(this.responseText));  
      }  
    };  
    xhttp.open('GET', 'https://api.sandbox.paypal.com/v1/billing/subscriptions/' + subcriptionId, true);  
    xhttp.setRequestHeader('Authorization', this.basicAuth);  
  
    xhttp.send();  
  }  
  // ============END Get Subcription Details Method========================  

}  
// @ViewChild(‘paypal’, { static: true }) paypalElement: ElementRef //html ement Paypal Smart button
// product = {
// price: ‘1.00’,
// description: ‘Check Amount’
// }// this property can be make dynamically from your web api
// payeeEmail: string = <Merchant Account to credit the charge Amount>
// paidFor: boolean = false; //Payment Successful Message handling
// paypalConfig = {//Configuration for paypal Smart Button
// createOrder: (data, actions) => {
// return actions.order.create({
// purchase_units: [{
// description: 'Manager To Owner Payment',
// amount: {
// currency_code: 'USD',
// value: amt
// }, payee: {
// email_address: this.payeeEmail // to send amout to corresponding Merchant
// },
// invoice_id: <You can geneate on your Own Logic>,
// }]
// });
// },
// onApprove: async (data, actions) => {
// const order = await actions.order.capture();
// this.paidFor = true;
// console.log(order)
// },
// onError: err => {
// console.log(err)
// }
// }
// constructor() { }
// ngOnInit() {
// paypal.Buttons(this.paypalConfig).render(this.paypalElement.nativeElement)
// }