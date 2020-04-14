import { Route } from '@angular/router';

export interface StoreConfigI18n {
  currentLanguage?: 'en' | 'fr' | 'sp' | 'pr';
}
export interface SidebarLink extends Route {
  title?: string;
  icon?: string;
  link?: string;
  children?: Array<SidebarLink>;
  parentFragment?: string;
  isChild?: boolean;
  fullPath?: string;
}
export interface ProgramPage {
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  title: string;
  subtitle: string;
  introText: string;
  introPic?: string;
  download?: boolean;
  infoButtons?: Array<{
    link?: string;
    linkText?: string;
    fullWidth?: boolean;
  }>;
  purposeHeader?: string;
  purpose?: {
    header?: string;
    body: string;
    rows?: '1' | string;
  };
  sections?: Array<{
    header?: string;
    buttons?: Array<{
      link?: string;
      linkText?: string;
      fullWidth?: boolean;
    }>;
    text: string;
    logos?: Array<string>;
  }>;
}
export interface FaqPage {
  type: 'tenants' | 'homeowners';
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  title: string;
}
export interface FaqCategory {
  name: string;
  children?: Array<TenantFaq>;
}
export interface TenantFaq {
  name: string;
  category: 'Lockout'
    | 'Court Hearings'
    | 'Subsidized Tenants'
    | 'Additional Housing Assistance'
    | 'Emergency Assistance'
    | 'Electricity, Gas, Water';
  question: string;
  answer: string;
  info?: string;
}
export interface HomeownerFaq {
  name: string;
  category: 'Removals'
    | 'Court Hearings';
  question: string;
  answer: string;
  info?: string;
  extraInfo?: Array<string>;
}
export interface ResourcePage {
    title: string;
    icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
    introPic?: string;
    introContent?: Array<{
      header?: string;
      link?: string;
      linkText?: string;
      text: string;
    }>;
    sectionHeader?: string;
    programs?: Array<{
        header?: string;
        link?: string;
        linkText?: string;
        text: string;
        footer?: string;
      }>;
    hideBottomBar?: boolean;
}
export interface HomeCard {
  title: string;
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  link?: string;
  parent: string;
  category: 'Small Business' | 'Housing' | 'Employment & Wellness';
}
