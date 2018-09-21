import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Módulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    providers: [],
})
export class PagesModule {}