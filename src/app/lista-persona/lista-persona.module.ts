import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    Pipe,
    AsyncPipe
  ],
  bootstrap: []
})
export class AppModule { }