import { Component } from '@angular/core';
import { ResourcePage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-stay-home',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class StayHomeComponent {
  resourceContent: ResourcePage = {
    title: 'Shelter-in-Place Order',
    icon: 'local_hospital',
    introContent: [{
      text:
      `<h3><img class="intro-pic" src='assets/img/pagePhotos/shelter-in-place.jpg'>
      To protect residents against the spread of COVID-19, Mayor Ras J. Baraka has announced a strict City-wide “shelter-in-place” mandate and all-city quarantine that will be strictly enforced by law enforcement.</h3>
      <p>People must stay home and not come out unless it’s an emergency.</p>`,
    }],
    programs: [
    {
      header: 'Exceptions',
      text: `
      <p>You can still go to the supermarket, local store for essentials, pharmacy, doctor, walk dogs, step out and get fresh air in front or back of home/doorstep/porch/terrace, or if an essential employee. Also, children need to be accompanied by an adult and people should only leave their homes in pairs.</p>
      <p>While out, you must maintain the Center for Disease Control’s (CDC) recommendation of keeping six feet apart.</p>
      <p><b>Residents are urged to call police if they see groups of people hanging out and violating this mandate.</b></p>`
    }]
   };
}
