import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterlistComponent } from './registerlist/registerlist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomHttpInterceptor, LoggingInterceptor} from './http.interceptor'
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    RegisterlistComponent,
    UpdatelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService,{provide:HTTP_INTERCEPTORS,useClass:CustomHttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
