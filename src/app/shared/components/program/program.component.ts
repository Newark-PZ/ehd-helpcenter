import { Component, Input } from '@angular/core';
import {ProgramPage} from '../../interfaces/other.interface';

@Component({
  selector: 'app-program',
  styleUrls: ['./program.component.scss'],
  templateUrl: './program.component.html'
})

export class ProgramComponent {
  @Input() programPage: ProgramPage;
}
