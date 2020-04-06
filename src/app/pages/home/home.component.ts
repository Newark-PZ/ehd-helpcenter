import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img?: { src: string; alt: string; };
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  widthchanger;
  colNum;
  gridRowNum;
  breakpoint;
  cards = [
    {icon: 'business_center', title: 'Newark Small Business Emergency Grants'},
    {icon: 'house', title: 'Forgiveable Loans For Homeowners And First-Time Buyers'},
    {icon: 'people', title: 'Fund For Artists And Arts Organizations'},
    {icon: 'color_lens', title: 'Safe Housing For Homeless'},
    {icon: 'person', title: 'Help For Commercial Tenants And Property Owners'},
    {icon: 'person', title: 'Tenant Eviction Moritorium And Tenant F.A.Q.S'},
    {icon: 'person', title: 'Homeowners Mortage Relief And Foreclosure F.A.Q.S'},
    {icon: 'person', title: 'N.J. Financial Help For Small Businesses'},
    {icon: 'person', title: 'Eligibility For Unemployment Benefits'},
    {icon: 'person', title: 'Finding An Essential Job During Crisis'},
    {icon: 'person', title: 'Help From Federal “US CARES” Stimulus Package'}
  ];
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint = this.breakpointObserver.isMatched('(max-width: 767px)');
    this.colNum = this.breakpoint ? '1' : '3';
    this.gridRowNum = this.breakpoint ? '1' : '2';
  }
}
