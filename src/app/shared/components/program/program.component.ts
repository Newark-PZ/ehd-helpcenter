import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Page, FaqPage } from '../../../shared/interfaces/other.interface';
import { take} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import * as PageActions from '../../../store/page/page.actions';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-program',
  styleUrls: ['./program.component.scss'],
  templateUrl: './program.component.html'
})

export class ProgramComponent {
  @Input() link: string;
  programPage$: Observable<Page>;
  currentLanguage$: Observable<string>;
  id$: Observable<string>;
  constructor(
    private store: Store<fromStore.StoreState>,
    private route: ActivatedRoute,
    private linker: LinkService
    ) {
    this.programPage$ = this.store.select(state => state.page.currentProgram);
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.link = params.get('id') || 'emergency-rent-grants';
      this.store
      .select(state => state.i18n.currentLanguage)
      .pipe(take(1))
      .subscribe(currentLang => {
        if (currentLang) {
          this.linker.getPage(this.link, currentLang, 'programs')
          .subscribe(p => {
            this.store.dispatch(new PageActions.SetPageProgramContent(p));
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
          this.linker.getPage(this.link, currentLang, 'programs')
          .subscribe(p => {
            this.store.dispatch(new PageActions.SetPageProgramContent(p));
          });
        }
      });
    });
  }
  faqPage = (): FaqPage => {
    let typeText: string;
    switch (this.link) {
      case 'emergency-rent-grants-faq': typeText = 'Grants_Rent_FAQ'; break;
      case 'small-business-grants-faq': typeText = 'Grants_Biz_FAQ'; break;
      default: typeText = 'RentControl'; break;
    }

    return { type: typeText, icon: 'people', title: '' };
  }
  checkFAQ(page: string): boolean {
    return ['rent-increase-freeze', 'emergency-rent-grants-faq', 'small-business-grants-faq'].includes(page);
  }
  checkTime(time: string): boolean {
    const timeLeft = new Date(time).valueOf() - new Date().valueOf();
    return timeLeft <= 0
  }
}
