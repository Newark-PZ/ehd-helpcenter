import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img?: {src: string; alt: string;};
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Icons and buttons linking to our programs', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Mayor Ras Baraka', cols: 2, rows: 1, color: 'lightpink', img:{src:'assets/img/rasBaraka.jpeg', alt:'Mayor Ras Baraka' } },
    { text: 'Icons and buttons linking to our programs', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Icons and buttons linking to our programs', cols: 2, rows: 1, color: 'lightpink' }
  ];
  // splash: SplashCard = {
  //   actions: [{action: () => {}, icon: '', name: ''}],
  //   content: 'worked',
  //   footer: '',
  //   image: {
  //     description: 'logo',
  //     src: 'assets/img/NwkCitySky.png'
  //   },
  //   imageSize: 'lg',
  //   subtitle: 'Home',
  //   title: 'Welcome'
  // }
  constructor() { }

  ngOnInit(): void {  }
}
