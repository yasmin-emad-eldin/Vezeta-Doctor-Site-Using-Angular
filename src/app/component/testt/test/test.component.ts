import { Component} from '@angular/core';

import{render} from 'creditcardpayments/creditcardpayments'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {
  constructor(){
    render(
      {
      id:"#myPaypalButtons",
      currency:"USD",
      value:"100.00",
      onApprove: (details) => {
        // if(details){
          alert('success')

        // }
        // else{
        //   alert('fail')

        // }
      }
    }
    );
  }

// ngOnInit(): void {
  
// }
}
