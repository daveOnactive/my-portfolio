import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { HomeComponent } from './main/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './main/home/home.module';
import { WorksModule } from './main/work/works.module';
import { ContactModule } from './main/contact/contact.module';
import { AboutModule } from './main/about/about.module';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
  ],
  imports: [
    NgxTypedJsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule,
    WorksModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
