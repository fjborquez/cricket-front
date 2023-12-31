import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule }   from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { PanelComponent } from './panel/panel.component';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddPanelComponent } from './add-panel/add-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SubpanelInsidersComponent } from './subpanel-insiders/subpanel-insiders.component';
import { SubpanelResultadosAnualesComponent } from './subpanel-resultados-anuales/subpanel-resultados-anuales.component';
import { SubpanelPuntosPorEmpresaComponent } from './subpanel-cantidad-puntos-agrupados/subpanel-cantidad-puntos-agrupados.component';
import { SubpanelMapaComponent } from "./subpanel-mapa/subpanel-mapa.component";
import { SubpanelNotasComponent } from './subpanel-notas/subpanel-notas.component';

@NgModule({
    declarations: [
        AppComponent,
        PanelsComponent,
        PanelComponent,
        ChartComponent,
        LoginComponent,
        AddPanelComponent,
        SubpanelInsidersComponent,
        SubpanelResultadosAnualesComponent,
        SubpanelPuntosPorEmpresaComponent,
        SubpanelMapaComponent,
        SubpanelNotasComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgChartsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        DragDropModule,
        LeafletModule,
    ]
})
export class AppModule { }
