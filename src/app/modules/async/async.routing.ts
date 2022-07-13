import { RouterModule, Routes } from '@angular/router'
import { AreaComponent } from './components/area/area.component'

export const routes: Routes = [{ path: '', component: AreaComponent }]

export const routing = RouterModule.forChild(routes)
