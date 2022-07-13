import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './components/area/area.component';
import { routing } from './async.routing';
import { ThingComponent } from './components/thing/thing.component';

@NgModule({
  declarations: [
    AreaComponent,
    ThingComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})

export class AsyncModule { }
