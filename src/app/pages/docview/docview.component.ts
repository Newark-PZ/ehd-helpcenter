import { Component,  ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { DocPage } from '../../shared/interfaces/other.interface';
import * as fromStore from '../../store/store.reducers';
import * as PageActions from '../../store/page/page.actions';
import { LinkService } from '../../shared/services/link.service';
import { Link } from 'src/app/shared/interfaces/link.class';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-doc-view',
  styleUrls: ['./docview.component.scss'],
  template: `
  <ng-container *ngIf="docContent | async">
  <mat-toolbar class="title">
    <mat-icon style="margin-right: .5rem" [innerHtml]='(docContent | async).icon'></mat-icon>
    <h2 [translate]="'DOCVIEW.' + this.currentLink.id"></h2>
  </mat-toolbar>
  <div *ngIf="(docContent | async).type === 'img'">
    <img *ngFor="let pic of (docContent | async).doc" (click)="goToUrl()" [src]='pic' class="pic">
  </div>
  <div *ngIf="(docContent | async).type === 'iframe'">
    <iframe [ngClass]="currentLink.id === 'reopening' ? '' : 'multipg'" *ngFor="let doc of (docContent | async).doc"
      #frame class='data-dashboard'  [scrolling]="'no'" onmousewheel=''
      [src]='doc'>
    </iframe>\
  </div>
  </ng-container>`
})
export class DocViewComponent {
  currentUrl: Array<SafeResourceUrl> = [];
  currentImg: Array<SafeUrl> = [];
  window: Window;
  link: string;
  currentLink: Link;
  currentType: 'img' | 'iframe';
  currentLanguage$: Observable<string>;
  id$: Observable<string>;
  @ViewChild('frame') frame: ElementRef;
  docContent: Observable<DocPage>;
  constructor(
    public sanitizer: DomSanitizer,
    private store: Store<fromStore.StoreState>,
    private route: ActivatedRoute,
    readonly linker: LinkService
    ) {
      this.docContent = this.store.select(state => state.page.currentDoc);
      this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.link = params.get('id');
        this.store
        .select(state => state.i18n.currentLanguage)
        .subscribe(currentLang => {
          if (currentLang) {
            this.currentLink = this.linker.getDocPage(this.link, currentLang, 'docs');
            this.currentType = this.doctyper();
            this.store.dispatch(new PageActions.SetPageDocContent({
              title: this.currentLink.title,
              icon: this.currentLink.icon,
              type: this.currentType,
              doc: this.currentDoc(this.currentLink.id, currentLang)
            }));
          }
        });
      });
    }
  doctyper(): 'img' | 'iframe' {
      switch (this.currentLink.id) {
        case 'web-housing-seminar': return 'iframe';
        default: return 'img';
      }
  }
  currentDoc(id: string, lang: string): Array<SafeResourceUrl | string> {
    if (id === 'reopening') {
        return this.currentUrl = [this.sanitizer
        .bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1zKtxhy1Con-PO_s9rkR8lBc4nREKvabh/preview')];
    } else if (id === 'rent-increase-freeze-order') {
        return this.currentUrl = [this.sanitizer
        .bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1oH4xOvsE53rc-GPau2CC65KrxWJiML7i/preview')];
    } else if (id === 'web-housing-seminar') {
        return this.currentImg = [this.sanitizer
        .bypassSecurityTrustUrl(`assets/docs/KnowYourRights_${lang === 'fr' ? 'en' : lang}_FaceBook.png`)];
    } else if (id === 'maskup') {
        return this.currentImg = [
          this.sanitizer.bypassSecurityTrustUrl(`assets/img/pagePhotos/MASKUP_${lang === 'fr' ? 'en' : lang}_Page_1.png`),
          this.sanitizer.bypassSecurityTrustUrl(`assets/img/pagePhotos/MASKUP_${lang === 'fr' ? 'en' : lang}_Page_2.png`)
        ];
    } else if (id === 'home-based-business') {
      return this.currentImg = [this.sanitizer
        .bypassSecurityTrustUrl('assets/img/pagePhotos/Home-Based Business Flyer.jpg')
      ];
    } else if (id === 'reopen-requirements') {
        return this.currentUrl = [this.sanitizer
          .bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1O04JFHVrzLeEdhysxRLUWpvohYTA0HNm/preview')];
    }
  }
  goToUrl() {
    if (this.link === 'home-based-business') {
      return location.href = 'http://bit.ly/2VB64Tm';
    } else {
      return location.href = 'https://facebook.com/cityofnewark';
    }
  }
}
