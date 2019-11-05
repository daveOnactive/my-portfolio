import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SvgComponent } from './svg.component';
import { HomeContentComponent } from './home-content.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxTypedJsComponent } from './ngx-typed-js.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    SvgComponent,
    HomeContentComponent,
    NgxTypedJsComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
