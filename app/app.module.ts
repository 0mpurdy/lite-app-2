import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LiteModule } from 'lite-module';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, LiteModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
