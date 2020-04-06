import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-maps',
  styleUrls: ['./maps.component.scss'],
  templateUrl: './maps.component.html'
})

export class MapsComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 4, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() { }

  ngOnInit(): void {  }
}
