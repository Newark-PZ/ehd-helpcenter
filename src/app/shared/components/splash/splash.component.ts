import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import { SplashCard } from '../../interfaces/other.interface';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  @Input() splashOptions: SplashCard;

  constructor(private store: Store<fromStore.StoreState>) {
  }
}
