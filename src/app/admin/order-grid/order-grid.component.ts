import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {
  includeShipped = false;
  constructor(private repository: OrderRepository) {

  }

  ngOnInit() {
  }
  getOrders(): Order[] {
    return this.repository.getOrders()
        .filter(o => this.includeShipped || !o.shipped);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
