import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: 'work', component: WorkComponent }
];

@NgModule({
  declarations: [
    WorkComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule { }
