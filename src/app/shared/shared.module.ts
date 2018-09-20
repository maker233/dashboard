import { NgModule } from '@angular/core';

// Rutas
//Módulos

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent
    ],
    imports: [],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent,
        NopagefoundComponent
    ],
    providers: [],
})
export class SharedModule {}