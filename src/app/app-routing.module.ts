import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutTheStoreComponent } from './comps/about-the-store/about-the-store.component';
import { AppComponent } from './app.component';
import { AllAplictionComponent } from './comps/all-apliction/all-apliction.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { GalleryComponent } from './comps/gallery/gallery.component';
import { DetailsComponent } from './comps/details/details.component';
import { SaleComponent } from './comps/sale/sale.component';
import { LoginComponent } from './comps/login/login.component';
import { RegistrationComponent } from './comps/registration/registration.component';
import { ShoppingCartComponent } from './comps/shopping-cart/shopping-cart.component';
import { BranchesComponent } from './comps/branches/branches.component';



const routes: Routes = [
  { path: '', component:AllAplictionComponent,
  
children:[
 { path:'about',component:AboutTheStoreComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'gallery',component:GalleryComponent},
  { path: 'detail', component: DetailsComponent },
  {path:'sale',component:SaleComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'branches', component: BranchesComponent },
 
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }