import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  plan: any;
  buttonWidth = 240;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.plan = {
        name: params['name'],
        price: params['price']
      };
    }); 
  }

  onLoadPaymentData(event: any) {
    console.log(event, '>>Data');
  }

}
