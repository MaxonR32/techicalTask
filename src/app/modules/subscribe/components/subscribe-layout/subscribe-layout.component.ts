import { Component, OnDestroy, OnInit } from '@angular/core'

import { Area } from '../../../../model/area'
import { Thing } from '../../../../model/thing'
import { AreaService } from '../../../../services/area.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-subscribe-layout',
  templateUrl: './subscribe-layout.component.html',
  styleUrls: ['./subscribe-layout.component.scss'],
})
export class SubscribeLayoutComponent implements OnInit, OnDestroy {
  areas: Area[] = []
  subscription: Subscription

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.subscription = this.areaService.getAreas().subscribe(data => {
      this.areas = data
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
