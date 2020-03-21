import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';

/*ng2 charts*/
import { ChartsModule } from 'ng2-charts';

/*TEMPORAL*/
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

/*Pipe Module*/
import {PipesModule} from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PipesModule
  ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule,
      PipesModule
    ]
})

export class PageModule {

}

