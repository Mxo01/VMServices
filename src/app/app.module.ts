import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ServicesPageComponent } from './Components/services-page/services-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MxoPageComponent } from './Components/mxo-page/mxo-page.component';
import { InfoComponent } from './Components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesPageComponent,
    MxoPageComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
