import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CircleComponent  //components,directives and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //modules which are integrated
  ],
  providers: [], //services would be mentioned here
  bootstrap: [AppComponent]
})
export class AppModule { }
