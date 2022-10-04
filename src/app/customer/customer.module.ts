import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { NewComponent } from './page/new/new.component';
import { ShopComponent } from './page/shop/shop.component';
import { ContactComponent } from './page/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
