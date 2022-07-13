import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { AreaService } from '../../../../services/area.service'
import { Area } from '../../../../model/area'
import { Subscription } from 'rxjs'
import { Thing } from '../../../../model/thing'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent {
  @Input() areas: Area[] = []
}
