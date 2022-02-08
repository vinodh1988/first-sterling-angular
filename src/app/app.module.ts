import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { CircleComponent } from './circle/circle.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CircleComponent,
    TimerComponent  //components,directives and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //modules which are integrated
    FormsModule //modules which=
  ],
  providers: [], //services would be mentioned here
  bootstrap: [AppComponent]
})
export class AppModule { }
