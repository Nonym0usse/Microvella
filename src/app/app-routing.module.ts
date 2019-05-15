import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WebComponent} from './web/web.component';
import {DepannageComponent} from './depannage/depannage.component';
import {ApplicationComponent} from './application/application.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web', component: WebComponent },
  { path: 'depannage', component: DepannageComponent },
  { path: 'application', component: ApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
