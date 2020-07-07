import { Type } from '@angular/core';

export class Link {
  constructor(
    id: string,
    title: string,
    group: false | 'resources' | 'programs' | 'faqs' | 'stayingin' | 'docs',
    icon?: string
      | 'subdirectory_arrow_right'
      | 'business_center'
      | 'people'
      | 'person'
      | 'house'
      | 'color_lens'
      | 'local_dining'
      | 'local_hospital'
      | 'info',
    children?: Array<Link>,
    component?: Type<any>
    ) {
    this.id = id;
    this.title = title;
    this.icon = icon || 'subdirectory_arrow_right';
    this.group = group || false;
    this.children = children;
    this.component = component;
  }
  id: string;
  title: string;
  icon: string | 'subdirectory_arrow_right' | 'business_center' | 'people' | 'person'
  | 'house' | 'color_lens' | 'local_dining' | 'local_hospital' | 'info';
  group: false | 'resources' | 'programs' | 'faqs' | 'stayingin' | 'docs';
  children?: Array<Link>;
  component?: Type<any>;
}
