import { Component, OnInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-food',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class FoodComponent implements OnInit {
  resourceContent: ResourcePage = {
    title: 'Food Distribution to Newarkers Impacted by COVID-19',
    icon: 'people',
    introContent: [{
      text:
      `<p><img class="intro-pic" src='assets/img/pagePhotos/nj small business grants.png'>
      Residents can call <a href="tel:9737335728">(973) 733-5728</a> from 9 a.m. to 5 p.m for information about food distribution. The City has ShopRite gift cards for residents, but will be doing the shopping for them by shopping coordinators at ShopRite. When people call, they'll be asked a series of questions to see if they are eligible for the gift cards. Eligible meaning that they do not have the financial means to get food in their homes or if they are seniors.
      </p>
      <p>We only have a limited amount at this time so we are going to focus on seniors and those who need it the most. As more resources come, we will have the ability to get more cards. We thank the National Action Network, Newark Housing Authority, and Neil Greenstein from ShopRite for partnering with us to get the food to those who need it the most.<p>`,
      link: 'https://www.nps.k12.nj.us/covid-19-resources/breakfast-lunch-program-locations/',
      linkText: 'Learn More About the Breakfast & Loan Program'
    }],
    programs: [{
      header: 'School Breakfast and Lunch Program Locations',
      text: '<p>The Breakfast and Lunch Program is available for all students at designated schools from Monday to Friday between the hours of 9:30 am - 11:30 am. Student can pick up food at any NPS site nearest to their home.</p>',
      link: 'https://www.nps.k12.nj.us/covid-19-resources/breakfast-lunch-program-locations/',
      linkText: 'Learn More About the Breakfast & Loan Program'
    }]
  };
  ngOnInit(): void {  }
}
