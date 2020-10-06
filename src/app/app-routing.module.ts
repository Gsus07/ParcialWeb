import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaConsultaComponent } from './Ayuda/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Ayuda/persona-registro/persona-registro.component';

const routes: Routes = [
    {
    path: 'personaConsulta',
    component: PersonaConsultaComponent
    },

    {
      path: 'personaRegistro',
      component: PersonaRegistroComponent
    }
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
