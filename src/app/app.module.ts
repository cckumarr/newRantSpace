import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RantsComponent } from './rants/rants.component';
import { RantDetailComponent } from './rant-detail/rant-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RantsComponent,
    RantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
