import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { EditarComponent } from './editar/editar.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    EditarComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListaPersonaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
