import { Component } from '@angular/core';
import { IConfig, NgxMaskDirective, provideNgxMask } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@Component({
  selector: 'app-phone-num',
  templateUrl: './phone-num.component.html',
  styleUrls: ['./phone-num.component.scss'],
  standalone: true,
  imports: [NgxMaskDirective],
  providers: [provideNgxMask()],
})
export class PhoneNumInputComponent {}
