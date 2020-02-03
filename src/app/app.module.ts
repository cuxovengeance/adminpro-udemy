import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*RUTAS*/
import {APP_ROUTES} from './app.routes';

/*MODULOS*/
import { PageModule } from './pages/pages.module';

/*COMPONENTES*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import {RouterModule} from '@angular/router';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import {FormsModule} from '@angular/forms';

/*SERVICIOS*/
/*import {SettingsService} from './services/service.index';*/
import {ServiceModule} from './services/service.module';  // Debo colocarlo en los imports tambien

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES,
    PageModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
