import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SzamlaRogzitesComponent } from './szamla/szamla-rogzites/szamla-rogzites.component';
import { SzamlaListaComponent } from './szamla/szamla-lista/szamla-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SzamlaRogzitesComponent,
    SzamlaListaComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
