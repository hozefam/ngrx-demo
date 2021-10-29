import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ counter: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
