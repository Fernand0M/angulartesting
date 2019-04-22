import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// for forms
import {FormsModule} from '@angular/forms';
 // user component
 
 import { SandboxComponent} from './components/sandbox.component';
 import { sandbox1Component} from './components/sandbox1.component';
 import { sandbox2Component} from './components/sandbox2.component';
 import { sandbox4Component} from './components/sandbox4.component';
 import { Sandbox5Component} from './components/sandbox5.component';
 import { sandbox6Component} from './components/sandbox6.component';
 import { sandbox7Component} from './components/sandbox7.component';
 import { sandbox8Component} from './components/sandbox8.component';
 import { sandobox9Component} from './components/sandbox9.component';



@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    sandbox1Component,
    sandbox2Component,
    sandbox4Component,
    Sandbox5Component,
    sandbox6Component,
    sandbox7Component,
    sandbox8Component,
    sandobox9Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
