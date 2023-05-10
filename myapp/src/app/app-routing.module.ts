import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QrcodeDriverComponent } from './qrcode-driver/qrcode-driver.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ScreenComponent } from './screen/screen.component';

const routes: Routes = [

  {
    path:'',  component:HomeComponentComponent
  },

  {
    path:'screen',canActivate:[AuthenticationGuard],component:ScreenComponent
  },

  {
    path:'qrcode-driver',canActivate:[AuthenticationGuard],component:QrcodeDriverComponent
  },

  {
    path:'qrcode',canActivate:[AuthenticationGuard],component:QrcodeComponent
  },

  {
    path:'about', component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
