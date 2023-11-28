import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AddPanelComponent } from './add-panel/add-panel.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'paneles', component: PanelsComponent, canActivate: [AuthGuardService]},
  {path: 'paneles/add', component: AddPanelComponent, canActivate: [AuthGuardService]},
  {path: 'paneles/:id', component: PanelComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
