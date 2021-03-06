import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { CircleComponent } from './circle/circle.component';
import { TimerComponent } from './timer/timer.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { MenuBoxComponent } from './menu-box/menu-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CircleComponent,
    TimerComponent,
    ReceiverComponent,
    MenuBoxComponent  //components,directives and pipes
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
