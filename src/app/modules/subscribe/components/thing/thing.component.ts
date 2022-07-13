import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AreaService } from '../../../../services/area.service'
import { Thing } from '../../../../model/thing'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThingComponent implements OnChanges, OnDestroy {

  @Input() areaId: number
  things: any[] = []

  subscription: Subscription 

  constructor(
    private areaService: AreaService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnChanges() {
    this.subscription = this.areaService.getThings(this.areaId).subscribe(data => {
      this.things = data
      this.ref.markForCheck()
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
