import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './bar.component';
import { BarComponentComponent } from './bar-component/bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
