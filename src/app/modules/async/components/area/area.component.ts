import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AreaService } from '../../../../services/area.service'
import { Observable } from 'rxjs'

import { Area } from '../../../../model/area'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit {
  areas$: Observable<Area[]>

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.areas$ = this.areaService.getAreas()
  }
}
