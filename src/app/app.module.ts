import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaConsultaComponent } from './Ayuda/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Ayuda/persona-registro/persona-registro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    NavMenuComponent,
    FetchDataComponent,
    PersonaRegistroComponent,
    PersonaConsultaComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
