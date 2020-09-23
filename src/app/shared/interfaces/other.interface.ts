import { Route } from '@angular/router';
import { SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

export interface StoreConfigI18n {
  currentLanguage?: 'en' | 'fr' | 'sp' | 'pr';
}
export interface StoreConfigPage {
  currentProgram?: Page;
  currentResource?: Page;
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
export interface Page {
  link?: string;
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital' | 'assessment' | string;
  title: string;
  category?: string;
  subtitle?: string;
  introText?: string;
  introPic?: string;
  download?: boolean;
  introActionsCol?: boolean;
  infoButtons?: Array<{
    link?: string;
    linkText?: string;
    fullWidth?: boolean;
    extraClass?: string;
  }>;
  purposeHeader?: string;
  purpose?: Array<{
    header?: string;
    body?: string;
    rows?: '1' | string;
  }>;
  sections?: Array<{
    actionsCol?: boolean;
    header?: string;
    headerIcon?: string;
    emphasizeHeader?: boolean | false;
    footer?: string;
    buttons?: Array<{
      link?: string;
      linkText?: string;
      fullWidth?: boolean;
      extraClass?: string;
      icon?: string | 'double_arrow';
    }>;
    iframeSrc?: string;
    iframeClass?: string;
    expanded?: boolean;
    text: string;
    logos?: Array<string>;
  }>;
  parent?: string;
  sectionHeader?: string;
  hideBottomBar?: boolean | false;
}
export interface FaqPage {
  type: 'Tenant' | 'Homeowners' | 'RentControl';
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
  children?: Array<Faq>;
}
export interface Faq {
  Answer: string;
  Category: string;
  Question: string;
  tableRows?: Array<Array<string>>;
  Type?: 'Tenant' | 'Homeowner' | 'RentControl';
  LastUpdated?: string;
}
export interface HomeCard {
  id?: string;
  title: string;
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'edit'
  | 'local_dining' | 'local_hospital' | 'info'| 'verified_user' | 'campaign';
  link?: string;
  extUrl?: string;
  parent?: string;
  style?: object;
  category: 'Small Business' | 'Housing' | 'Employment & Wellness' | 'Save Lives. Stay Healthy. Safely Re-Open.';
}
export interface DocPage {
  title: string;
  category?: string;
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital' | 'assessment' | string;
  doc?: Array<string | SafeUrl | SafeResourceUrl>;
  type?: 'img' | 'iframe';
}
