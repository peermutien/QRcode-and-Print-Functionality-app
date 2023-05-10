import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScreenComponent } from './screen/screen.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QrcodeDriverComponent } from './qrcode-driver/qrcode-driver.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScreenComponent,
    HomeComponentComponent,
    QrcodeComponent,
    QrcodeDriverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
