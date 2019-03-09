import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository,
              public order: Order) {}

  ngOnInit() {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }


}
