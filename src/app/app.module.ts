import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './components/footer/footer.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';



@NgModule({
  declarations: [
    SinscrireComponent,
    SeconnecterComponent,
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot( {timeOut: 4000,
      positionClass: 'toast-bottom-right',progressBar:true}), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

