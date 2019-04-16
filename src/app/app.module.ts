import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 // user component
 
 import { SandboxComponent} from './components/sandbox.component';
 import { sandbox1Component} from './components/sandbox1.component';
 import { sandbox2Component} from './components/sandbox2.component';
 import { sandbox4Component} from './components/sandbox4.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    sandbox1Component,
    sandbox2Component,
    sandbox4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
