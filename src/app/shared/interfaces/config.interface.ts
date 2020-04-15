import { StoreConfigSidebar } from './config-sidebar.interface';
import { StoreConfigI18n, StoreConfigHomePanels } from './other.interface';

export interface StoreConfig {
  sidebar?: StoreConfigSidebar;
  sidebarRight?: StoreConfigSidebar;
  i18n?: StoreConfigI18n;
  homePanels?: StoreConfigHomePanels;
}
