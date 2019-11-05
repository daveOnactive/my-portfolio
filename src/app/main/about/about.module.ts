import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { SvgComponent } from './svg.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AboutModule { }
