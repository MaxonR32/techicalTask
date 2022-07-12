import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './components/area/area.component'
import { ThingComponent } from './components/thing/thing.component';

import { routing } from './subscribe.routing';
import { SubscribeLayoutComponent } from './components/subscribe-layout/subscribe-layout.component'

@NgModule({
  declarations: [
    AreaComponent,
    ThingComponent,
    SubscribeLayoutComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class SubscribeModule { }
