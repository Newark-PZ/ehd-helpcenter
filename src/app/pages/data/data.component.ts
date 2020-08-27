import { Component,  ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Page } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-data',
  styleUrls: ['./data.component.scss'],
  template: `
  <mat-toolbar class="title">
  <mat-icon style="margin-right: .5rem">{{ resourceContent.icon }}</mat-icon>
  <h2 [translate]="'DATA.title'"></h2>
</mat-toolbar>
  <iframe #frame class='data-dashboard'
  [src]='dataLink'
  frameborder='0' [scrolling]="'no'" onmousewheel='' width='100%' style='background: transparent;'>
  </iframe>`
})
// tslint:disable: max-line-length
export class DataComponent {
  dataLink = this.sanitizer
  .bypassSecurityTrustResourceUrl('https://newark-dashboardcovid.trial.opendatasoft.com/pages/covidnewark/');
  @ViewChild('frame') frame: ElementRef;
  resourceContent: Page = {
    title: 'Real time Information by Gender, Race, and Ward of COVID-19 impact',
    icon: 'assessment'
  };
  constructor(
    public sanitizer: DomSanitizer
    ) {}
}
