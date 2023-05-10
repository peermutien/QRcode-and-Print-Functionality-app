import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {

  url:SafeUrl = ''
  onCodeChange(url: SafeUrl) {
    this.url = url;
    
  }




}
