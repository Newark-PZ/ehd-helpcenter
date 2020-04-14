import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FaqPage, TenantFaq, HomeownerFaq } from '../../interfaces/other.interface';
import * as fromStore from '../../../store/store.reducers';
import * as i18nActions from './../../../store/i18n/i18n.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-faq',
  styleUrls: ['./faq.component.scss'],
  templateUrl: './faq.component.html'
})

export class FaqComponent implements OnInit {
  document: Document;
  @Input() faqPage: FaqPage;
  @Input() faqText: Array<TenantFaq | HomeownerFaq>;
  faqCategories = [];
  currentLanguage$: Observable<string>;
  constructor(private store: Store<fromStore.StoreState>) {
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
  }
  ngOnInit(): void {
    this.store
      .select(state => state.i18n.currentLanguage)
      .subscribe((lang: string) => {
        this.store
        .select(state => state.i18n.currentLanguage)
        .pipe(take(1))
        .subscribe(currentLang => {
          if (currentLang) {
            this.getFaq(this.faqPage.type, lang);
            this.faqCategories = this.getCategories(this.faqPage.type, lang);
          }
        });
      });
  }

  getFaq(faq: string, language: string) {
    fetch(`assets/data/${faq}-${language}.json`)
      .then(response => response.json())
      .then((data) => this.faqText = data);
  }
  getCategories(faq: string, language: string): Array<string> {
    let categories = [];
    switch (language) {
      case 'fr':
        (faq === 'tenants')
        ? categories = ['Lockout', 'Audiences judiciaires',
          'Locataires subventionnés', 'Aide au logement supplémentaire',
          `Assistance d'urgence`, 'Électricité, gaz, eau']
        : categories = ['Déménagements', 'Audiences judiciaires'];
        break;
      case 'pr':
        (faq === 'tenants')
        ? categories = ['Bloqueio', 'Audiências em Tribunal',
        'Inquilinos subsidiados', 'Assistência Adicional à Habitação',
        'Assistência emergencial', 'Eletricidade, Gás, Água']
        : categories = ['Remoções', 'Audiências em Tribunal'];
        break;
      case 'sp':
        (faq === 'tenants')
        ? categories = ['Cierres patronales', 'Audiencias judiciales',
        'Inquilinos subsidiados', 'Asistencia de vivienda adicional',
        'Asistencia de emergencia', 'Electricidad, Gas, Agua']
        : categories = ['Mudanzas', 'Audiencias judiciales'];
        break;
      default:
        (faq === 'tenants')
        ? categories = ['Lockout', 'Court Hearings',
          'Subsidized Tenants', 'Additional Housing Assistance',
          'Emergency Assistance', 'Electricity, Gas, Water'
        ]
        : categories = ['Removals', 'Court Hearings'];
    }
    return categories;
  }
  filterCat(cat) {
    return cat;
  }
  scrollTo(el: any) {
    document.querySelector(`#category${el}`).scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
      }, 500);
  }
}
