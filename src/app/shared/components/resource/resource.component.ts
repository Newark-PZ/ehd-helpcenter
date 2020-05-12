import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ResourcePage } from '../../../shared/interfaces/other.interface';
import { take} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import * as PageActions from '../../../store/page/page.actions';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-resource',
  styleUrls: ['./resource.component.scss'],
  templateUrl: './resource.component.html'
})
export class ResourceComponent {
  @Input() link: string;
  resourceContent$: Observable<ResourcePage>;
  currentLanguage$: Observable<string>;
  id$: Observable<string>;
  constructor(
    private store: Store<fromStore.StoreState>,
    private route: ActivatedRoute,
    private linker: LinkService
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
          this.linker.getPage(this.link, currentLang, 'resources')
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
          this.linker.getPage(this.link, currentLang, 'resources')
          .subscribe(p => {
            this.store.dispatch(new PageActions.SetPageResourceContent(p));
          });
        }
      });
    });
  }
}
