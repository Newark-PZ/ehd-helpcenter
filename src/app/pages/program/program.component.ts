import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-program',
  styleUrls: ['./program.component.scss'],
  templateUrl: './program.component.html'
})

export class ProgramComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Picture with Text', cols: 4, rows: 2, color: 'lightsalmon' },
    { text: 'Information about programs', cols: 4, rows: 1, color: 'aquamarine' },
    { text: 'Information about our programs', cols: 4, rows: 1, color: 'lightgrey' },
    { text: 'Information about our program', cols: 4, rows: 1, color: 'lightgrey' },
    { text: 'Information about our program', cols: 4, rows: 1, color: 'lightgrey' },

  ];
  constructor() { }

  ngOnInit(): void {  }
}
