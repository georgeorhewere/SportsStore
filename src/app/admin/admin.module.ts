import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { OrderGridComponent } from './order-grid/order-grid.component';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
      children: [
          { path: 'products/:mode/:id', component: ProductEditorComponent },
          { path: 'products/:mode', component: ProductEditorComponent },
          { path: 'products', component: ProductGridComponent },
          { path: 'orders', component: OrderGridComponent },
          { path: '**', redirectTo: 'products' }
      ]
  },
  { path: '**', redirectTo: 'auth' }
]);
@NgModule({
  imports: [
    CommonModule,
   FormsModule,
    routing
  ],
  declarations: [AuthComponent, AdminComponent, ProductGridComponent, ProductEditorComponent, OrderGridComponent],
    providers: [AuthGuard]
})
export class AdminModule {

}
