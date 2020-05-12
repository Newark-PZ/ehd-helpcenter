import { Component,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doc-view',
  styleUrls: ['./docview.component.scss'],
  template: `
  <mat-toolbar class="title">
    <mat-icon style="margin-right: .5rem">{{ resourceContent.icon }}</mat-icon>
    <h2 [translate]="'DOCVIEW.title'"></h2>
  </mat-toolbar>
  <iframe #frame class='data-dashboard'
  [src]='sanitizer.bypassSecurityTrustResourceUrl(fullLink)'
  frameborder='0' [scrolling]="'no'" onmousewheel='' width='100%' style='background: transparent;'>
  </iframe>`
})
// tslint:disable: max-line-length
export class DocViewComponent implements AfterViewInit {
  dataLink = 'https://newarkcovid19.com/assets/docs/The Road Back.pdf';
  fullLink = `https://drive.google.com/file/d/1zKtxhy1Con-PO_s9rkR8lBc4nREKvabh/preview`;
  @ViewChild('frame') frame: ElementRef;
  resourceContent: ResourcePage = {
    title: 'The Road Back',
    icon: 'assessment'
  };
  constructor(public sanitizer: DomSanitizer) {}
  ngAfterViewInit(): void {
    const framer = this.frame.nativeElement as HTMLIFrameElement;
    framer.style.height = framer.firstElementChild.scrollHeight + 'px';
  }
}
