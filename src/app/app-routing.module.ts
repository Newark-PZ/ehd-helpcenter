import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import * as pageComponents from './pages';

export interface LinkRoute extends Route {
  icon?: string;
  title?: string;
}
export const routes: Array<LinkRoute> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: pageComponents.HomeComponent,
    path: 'home',
    icon: 'home',
    title: 'Home'
  },
  {
    component: pageComponents.ProgramComponent,
    path: 'program',
    icon: 'attachment',
    title: 'Our Programs'
  },
  {
    component: pageComponents.MapsComponent,
    path: 'maps',
    icon: 'map',
    title: 'Maps'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
