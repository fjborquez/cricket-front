import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: 'panels', component: PanelsComponent},
  {path: 'panels/:id', component: PanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
