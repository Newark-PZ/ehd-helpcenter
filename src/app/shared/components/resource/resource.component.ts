import { Component, OnInit, Input } from '@angular/core';
import { ResourcePage } from '../../../shared/interfaces/other.interface';

@Component({
  selector: 'app-resource',
  styleUrls: ['./resource.component.scss'],
  templateUrl: './resource.component.html'
})
// tslint:disable: max-line-length
export class ResourceComponent {
  @Input() resourceContent: ResourcePage;
}
