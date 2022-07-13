import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'async' },
  { path: 'subscribe', loadChildren: () => import('./modules/subscribe/subscribe.module').then(x => x.SubscribeModule) },
  { path: 'async', loadChildren: () => import('./modules/async/async.module').then(x => x.AsyncModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
