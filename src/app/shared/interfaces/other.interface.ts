import { Route } from '@angular/router';

export interface StoreConfigI18n {
  currentLanguage?: 'en' | 'fr' | 'sp' | 'pr';
}
export interface StoreConfigPage {
  currentProgram?: ProgramPage;
  currentResource?: ResourcePage;
}
export interface StoreConfigHomePanels {
  open: boolean;
  multi: boolean;
  toggleDisabled: boolean;
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
  link?: string;
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
  purpose?: Array<{
    header?: string;
    body?: string;
    rows?: '1' | string;
  }>;
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
  type: 'Tenant' | 'Homeowners';
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  contentIntro?: {
    right?: {text: string; };
    header?: string;
    paragraphs?: Array<string>;
    footer?: string;
    buttons?: Array<{
        title: string;
        date?: string;
        icon?: string;
        link?: string;
        extUrl?: string;
        parent?: string;
    }>
  };
  title: string;
}
export interface FaqCategory {
  name: string;
  children?: Array<TenantFaq>;
}
export interface TenantFaq {
  Answer: string;
  Categories: 'Lockout'
    | 'Court Hearings'
    | 'Subsidized Tenants'
    | 'Additional Housing Assistance'
    | 'Emergency Assistance'
    | 'Electricity, Gas, Water';
  Postscript: string;
  Question: string;
  Type: 'Tenant';
  __v: number;
  _id: {
    id: any
  };
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
}
export interface HomeownerFaq {
  Answer: string;
  Categories: 'Removals'
  | 'Court_Hearings';
  Postscript: string;
  Question: string;
  Type: 'Homeowners';
  __v: number;
  _id: {
    id: any
  };
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
}
export interface ResourcePage {
    title: string;
    category?: string;
    link?: string;
    parent?: string;
    icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital' | 'assessment';
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
  id?: string;
  title: string;
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital' | 'info';
  link?: string;
  extUrl?: string;
  parent?: string;
  style?: object;
  category: 'Small Business' | 'Housing' | 'Employment & Wellness' | 'Save Lives. Stay Safe. Reopen.';
}
