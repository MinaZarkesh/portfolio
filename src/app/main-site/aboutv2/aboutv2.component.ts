import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-aboutv2',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './aboutv2.component.html',
  styleUrl: './aboutv2.component.scss',
})
export class Aboutv2Component {
  constructor(private translate: TranslateService) {}

  aboutv2 = [
    {
      headline: this.translate.instant('aboutv2.HEADLINE1'),
      text: this.translate.instant('aboutv2.TEXT1'),
    },
    {
      headline: this.translate.instant('aboutv2.HEADLINE2'),
      text: this.translate.instant('aboutv2.TEXT2'),
    },
    {
      headline: this.translate.instant('aboutv2.HEADLINE3'),
      text: this.translate.instant('aboutv2.TEXT3'),
    }
  ];
}
