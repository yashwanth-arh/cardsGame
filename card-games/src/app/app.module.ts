import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABCardsComponent } from './ab-cards/ab-cards.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, ABCardsComponent],
  imports: [BrowserModule, AppRoutingModule, FlexModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
