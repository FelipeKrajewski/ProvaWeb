import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './views/cycle/create-product/create-product.component';
import { ListProductComponent } from './views/cycle/list-product/list-product.component';

const routes: Routes = [{
  path: '',
  component:ListProductComponent
},{
  path:'cycle/create',
  component:CreateProductComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
