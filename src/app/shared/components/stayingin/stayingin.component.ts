import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Page } from '../../../shared/interfaces/other.interface';
import { take} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import * as PageActions from '../../../store/page/page.actions';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LinkService } from '../../services/link.service';
import { slideshowAnimation, showHidePanel } from '../../animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  animations: [slideshowAnimation, showHidePanel],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-stayingin',
  styleUrls: ['./stayingin.component.scss'],
  templateUrl: './stayingin.component.html'
})
export class StayinginComponent {
  @Input() link: string;
  resourceContent$: Observable<Page>;
  currentLanguage$: Observable<string>;
  id$: Observable<string>;
  slideshowIndex = 0;
  coverClicked = false;
  constructor(
    private store: Store<fromStore.StoreState>,
    private route: ActivatedRoute,
    private linker: LinkService,
    public sanitizer: DomSanitizer
    ) {
    this.resourceContent$ = this.store.select(state => state.page.currentResource);
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.link = params.get('id');
      this.store
      .select(state => state.i18n.currentLanguage)
      .pipe(take(1))
      .subscribe(currentLang => {
        if (currentLang) {
          this.linker.getPage(this.link, currentLang, 'stayingin')
          .subscribe(p => {
            this.store.dispatch(new PageActions.SetPageResourceContent(p));
          });
        }
      });
    });
    this.store
    .select(state => state.i18n.currentLanguage)
    .subscribe((lang: string) => {
      this.store
      .select(state => state.i18n.currentLanguage)
      .pipe(take(1))
      .subscribe(currentLang => {
        if (currentLang) {
          this.linker.getPage(this.link, currentLang, 'stayingin')
          .subscribe(p => {
            this.store.dispatch(new PageActions.SetPageResourceContent(p));
          });
        }
      });
    });
  }
  slideshow(imgsLength: number, change: number): void {
    this.slideshowIndex = this.slideshowIndex + change;
    if (this.slideshowIndex > imgsLength - 1) { this.slideshowIndex = 0; }
  }
  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
