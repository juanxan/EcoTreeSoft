import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './vistas/contact/contact.component';
import { AboutComponent } from './vistas/about/about.component';
import { ProductsComponent } from './vistas/products/products.component';
const routes: Routes = [
  {path:'',redirectTo:'index', pathMatch:'full'},
  {path:'',component:IndexComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
