import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 // user component
 
 import { SandboxComponent} from './components/sandbox.component';
 import { sandbox1Component} from './components/sandbox1.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    sandbox1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
