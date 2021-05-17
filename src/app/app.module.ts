import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSolicitudesComponent } from './componentes/formulario-solicitudes/formulario-solicitudes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSolicitudesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
