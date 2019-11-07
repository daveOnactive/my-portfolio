import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxTypedJsComponent } from './ngx-typed-js.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { SvgHomeComponent } from './svg-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeContentComponent,
    NgxTypedJsComponent,
    SvgHomeComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
