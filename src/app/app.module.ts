import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { GalleryComponent } from './comps/gallery/gallery.component';
import { ContactUsComponent } from './comps/contact-us/contact-us.component';
import { AboutTheStoreComponent } from './comps/about-the-store/about-the-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AllAplictionComponent } from './comps/all-apliction/all-apliction.component';
import { DetailsComponent } from './comps/details/details.component';
import { SaleComponent } from './comps/sale/sale.component';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './comps/registration/registration.component';
import { ShoppingCartComponent } from './comps/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { BranchesComponent } from './comps/branches/branches.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutTheStoreComponent,
    AllAplictionComponent,
    DetailsComponent,
    SaleComponent,
    LoginComponent,
    RegistrationComponent,
    ShoppingCartComponent,
    BranchesComponent,
    
    // HttpClientModule
    

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
