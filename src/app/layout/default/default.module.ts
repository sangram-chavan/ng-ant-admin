import { NgModule } from '@angular/core';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import {DefLayoutContentModule} from './def-layout-content/def-layout-content.module';
import {SharedModule} from '../../share/shared.module';
import { TabComponent } from './tab/tab.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {SettingDrawerModule} from './setting-drawer/setting-drawer.module';


@NgModule({
  declarations: [DefaultComponent, TabComponent, SideNavComponent],
  imports: [
    SharedModule,
    SettingDrawerModule,
    DefLayoutContentModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }