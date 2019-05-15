import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepannageComponent } from './depannage/depannage.component';
import { FormationComponent } from './formation/formation.component';
import { WebComponent } from './web/web.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepannageComponent,
    FormationComponent,
    WebComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
