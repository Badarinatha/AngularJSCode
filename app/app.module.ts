import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { ProductListComponent } from './Products/product-list.component'
import { ProductFilterPipe } from './Products/product-filter.pipe'
import { StarComponent } from './shared/star.component'
import { WelcomeComponent } from './home/welcome.component'
import { ProductDetailComponent } from "./Products/product-detail.component";



@NgModule({
  imports: [ BrowserModule,
             FormsModule,
              HttpModule],
  declarations: [ AppComponent, 
                  ProductListComponent,
                  ProductFilterPipe,
                  StarComponent,
                  WelcomeComponent,
                  ProductDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
