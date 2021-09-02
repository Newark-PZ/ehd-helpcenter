import { Component, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { Page } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-data',
  styleUrls: ['./data.component.scss'],
  template: `
  <mat-toolbar class="title">
    <mat-icon style="margin-right: .5rem">{{ resourceContent.icon }}</mat-icon>
    <h2 [translate]="'DATA.title'"></h2>
  </mat-toolbar>
  <div class="tableauPlaceholder" style="width: 100%; height:100%;">
    <object class="tableauViz" title="Public Covid Dash &#47; COVID-19 Cases Overview" width="1200px" height="800px" style="display:none;">
      <param name="host_url" [value]="tableauError ? 'https://tableauvm.newarknj.gov/' : 'https://data.newarknj.gov/'" />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value="&#47;t&#47;CityofNewarkCovid19DataPortal" />
      <param name="name" value="PublicCovidDashPOC&#47;COVID-19CasesOverview" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="yes" />
      <param name="showAppBanner" value="false" />
      <param name="display_count" value="n" />
      <param name="origin" value="viz_share_link" />
      <param name="isGuestRedirectFromVizportal" value="y" />
    </object>
  </div>
`
})
/* eslint-disable max-len */
export class DataComponent implements AfterViewInit, OnDestroy {
  tableauError = false;
  scriptEl: HTMLScriptElement;
  resourceContent: Page = {
    title: 'Real time Information by Gender, Race, and Ward of COVID-19 impact',
    icon: 'assessment'
  };
  constructor(
    private renderer2: Renderer2
    ) {}
  ngAfterViewInit(): void {
    this.generateScriptEl('data');
    this.scriptEl.onerror = () => {
      this.tableauError = true;
      this.generateScriptEl('tableauvm');
    };
    this.scriptEl.onload = () => {
      this.tableauError = false;
    };
  }
  generateScriptEl(urlOpener: string): void {
    if (this.scriptEl) {
      this.scriptEl.remove();
      this.scriptEl = undefined;
    }
    this.scriptEl = this.renderer2.createElement('script');
    this.scriptEl.type = 'text/javascript';
    this.scriptEl.innerHTML = 'console.info("COVID-19 Data Dashboard Loading...");';
    this.scriptEl.src = `https://${urlOpener}.newarknj.gov/javascripts/api/viz_v1.js`;
    this.renderer2.appendChild(document.body, this.scriptEl);
  }
  ngOnDestroy(): void {
    this.scriptEl.remove();
  }
}
