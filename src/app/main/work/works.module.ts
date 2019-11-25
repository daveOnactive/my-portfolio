import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
import { ProjectComponent } from './project.component';
import { ShowComponent } from './show.component';
import { ToolsComponent } from './tools.component';
import { SafeGuard } from 'src/app/shared/safe.guard';

const routes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'work/:id', component: ShowComponent,
    canActivate: [SafeGuard] },
];

@NgModule({
  declarations: [
    WorkComponent,
    ProjectComponent,
    ShowComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksModule { }
