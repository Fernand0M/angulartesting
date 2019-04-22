// this program is to show how to use css ngClass
// 1:48

import {Component} from '@angular/core';

@Component({
selector: 'sandbox7',
template: `
<h2>Hello Sandbox 7</h2>
<h3 [ngClass]="'redcolor'">This will be in redColor - No Stock </h3>
<h3 [ngClass]="'redcolor saveable'">Red Color is not available in UpperCase </h3>
<hr />
<div *ngFor="let user of users" [ngClass]="'special saveable'">
    {{user}}
</div>
<hr />
<h2 [ngClass]="customClasses">This is custom class savable and special </h2>

<hr />
<p>Birthdat is {{birthday | date}}</p>
<p>Birthdat is {{birthday | date:"yyyy-MM-dd"}}</p>
<p>somE Content  - {{'somE Content' | uppercase}} 
<p>somE Content  - {{'somE Content' | lowercase}} 
<p>You total is  - {{total | currency:"INR"}} 
<p> Your commission is {{commision | percent}}

`,
styles:[
    ` 
      .special{
            color: green;
        }
      .saveable {
          text-transform :uppercase;
      }
      .redcolor{
          color: red;
      }
      .lowercase{
          text-transform :lowercase;
      }
      .fontsize{
          font-sixe:30px;
      }
    `
]
})

export class sandbox7Component {
    isSpecial = true;
    canSave = true;
    customClasses={ };
    users: string[] = ['Fernando', 'Abel', 'Ana','Jesus']

    //variables for pipes
    birthday = new Date(2010, 3,20);
    total = 12345;
    commision = 0.12;

    constructor(){
        this.setCustomClasses();

    }

    setCustomClasses(){
        this.customClasses={
            saveable: this.canSave,
            special: this.isSpecial
        }
    }
}