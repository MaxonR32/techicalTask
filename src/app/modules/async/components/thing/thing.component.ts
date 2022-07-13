import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
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
export class ThingComponent implements OnDestroy {

  @Input() areaId: number
  @Input() things$: Thing[] = [] 

  final$: Observable<any>
  
  subscription: Subscription
  areaIdArr: any = []
  finalA: any = []

  constructor(
    private areaService: AreaService,
    private ref: ChangeDetectorRef
    ) { }

  ngOnChanges(): void {
    this.subscription = this.areaService.getThings(this.areaId).subscribe(data => {
      this.things$ = data
      // sort array ascending
      this.things$.sort((a, b) => a.joinedWith - b.joinedWith)

      // create an from numbers from joinedWidth
      this.things$.forEach(a => {
        this.areaIdArr.push(a.joinedWith)
      })

      this.areaIdArr = [...new Set(this.areaIdArr)]

      this.areaIdArr.forEach((t: any) => {
          let s:any = []

        this.things$.forEach(a => {
          // console.log(t)
          if(a.joinedWith === null && t === null) {
            s.push(a)
          }
          if (a.joinedWith !== null && t === a.joinedWith) {
            s.push(a)                
          }
        })
        let obj = {
          objects: s
        }
        this.finalA.push(obj)
      })
      this.final$ = of(this.finalA)

      this.ref.markForCheck()
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
