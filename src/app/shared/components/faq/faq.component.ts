import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FaqPage, Faq } from '../../interfaces/other.interface';
import * as fromStore from '../../../store/store.reducers';
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
  @Input() faqText: Array<Faq>;
  faqCategories = [];
  currentLanguage$: Observable<string>;
  selectedCol: number | undefined;
  constructor(
    private store: Store<fromStore.StoreState>
    ) {
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
          if (currentLang && this.faqPage.type) {
            this.getFaq(this.faqPage.type, lang);
            this.faqCategories = this.getCategories(this.faqPage.type, lang);
          }
        });
      });
  }

  getFaq(faq: string, language: string) {
    fetch(`assets/i18n/faqs/${faq.toLowerCase()}-${language}.json`)
      .then(response => response.json())
      .then((data) => this.faqText = data);
  }
  getCategories(faq: string, language: string): Array<string> {
    let categories = [];
    switch (language) {
      case 'fr':
        (faq === 'Tenant')
        ? categories = ['Lockout', 'Paiements de loyer', 'Audiences judiciaires',
          'Locataires subventionnés', 'Aide au logement supplémentaire',
          `Assistance d'urgence`, 'Électricité, gaz, eau', 'Harcèlement sexuel dans le logement']
        : categories = ['Déménagements', 'Audiences judiciaires'];
        break;
      case 'pr':
        (faq === 'Tenant')
        ? categories = ['Bloqueio', 'Pagamentos de aluguel', 'Audiências',
        'Inquilinos subsidiados', 'Assistência Adicional à Habitação',
        'Assistência emergencial', 'Eletricidade, Gás, Água', 'Assédio sexual em moradias']
        : categories = ['Remoções', 'Audiências em Tribunal'];
        break;
      case 'sp':
        (faq === 'Tenant')
        ? categories = ['Cierres patronales', 'Pago de renta', 'Audiencias judiciales',
        'Inquilinos subsidiados', 'Asistencia de vivienda adicional',
        'Asistencia de emergencia', 'Electricidad, Gas, Agua', 'Acoso Sexual en Vivienda']
        : categories = ['Mudanzas', 'Audiencias judiciales'];
        break;
      default:
        if (faq !== 'RentControl') {
          (faq === 'Tenant')
          ? categories = ['Lockout', 'Rent Payments', 'Court Hearings',
            'Subsidized Tenants', 'Additional Housing Assistance',
            'Emergency Assistance', 'Electricity, Gas, Water', 'Sexual Harrassment in Housing'
          ]
          : categories = ['Removals', 'Court Hearings'];
        } else {
          categories = ['Rent Increase FAQ'];
        }
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
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
}
