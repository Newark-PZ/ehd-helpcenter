import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProgramPage } from '../../../shared/interfaces/other.interface';
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
  programPage$: Observable<ProgramPage>;
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
      this.link = params.get('id');
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
    });
  }
}
