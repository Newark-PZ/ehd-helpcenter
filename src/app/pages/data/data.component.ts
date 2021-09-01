import { Component, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
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
  <div class="tableauPlaceholder" style="width: 1280px; height: 594px;" *ngIf="!tableauError">
    <object class="tableauViz" title="Public Covid Dash &#47; COVID-19 Cases Overview" width="1280" height="594" style="display:none;">
      <param name="host_url" value="https://data.newarknj.gov/" />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value="&#47;t&#47;CityofNewarkCovid19DataPortal" />
      <param name="name" value="PublicCovidDashPOC&#47;COVID-19CasesOverview" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="yes" />
      <param name="showAppBanner" value="false" />
    </object>
  </div>
  <iframe *ngIf="tableauError" class='data-dashboard' [src]='dataLink'
    frameborder="0" [scrolling]="'no'" width="100%" style="background: transparent;">
  </iframe>`
})
// tslint:disable: max-line-length
export class DataComponent implements AfterViewInit, OnDestroy {
  tableauError = true;
  dataLink = this.sanitizer
    .bypassSecurityTrustResourceUrl('https://newark-dashboardcovid.trial.opendatasoft.com/pages/covidnewark/');
  scriptEl: HTMLScriptElement;
  resourceContent: Page = {
    title: 'Real time Information by Gender, Race, and Ward of COVID-19 impact',
    icon: 'assessment'
  };
  constructor(
    public sanitizer: DomSanitizer,
    private renderer2: Renderer2
    ) {}
  ngAfterViewInit(): void {
    this.scriptEl = this.renderer2.createElement('script');
    this.scriptEl.type = 'text/javascript';
    this.scriptEl.innerHTML = "console.info('COVID-19 Data Dashboard Loading...');";
    this.scriptEl.src = 'https://data.newarknj.gov/javascripts/api/viz_v1.js';
    this.renderer2.appendChild(document.body, this.scriptEl);
    this.scriptEl.onload = () => { this.tableauError = false; };
  }
  ngOnDestroy(): void {
    this.scriptEl.remove();
  }
}
