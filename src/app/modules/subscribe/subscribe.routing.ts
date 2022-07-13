import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { SubscribeLayoutComponent } from './components/subscribe-layout/subscribe-layout.component'
import { AreaComponent } from './components/area/area.component'

export const routes: Routes = [
  { path: '', component: SubscribeLayoutComponent },
]

export const routing = RouterModule.forChild(routes)
