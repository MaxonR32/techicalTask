import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Thing } from '../../../../model/thing'
import { AreaService } from '../../../../services/area.service'
import { Observable, Subscription, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ThingComponent implements OnChanges {

  @Input() areaId: number

  final$: Observable<any>

  constructor(private areaService: AreaService) { }

  ngOnChanges(): void {
    this.final$ = this.areaService.getThings(this.areaId)
  }
}
