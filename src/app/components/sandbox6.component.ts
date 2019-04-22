// to show working of propery binding in angular
// with img tag

import {Component} from '@angular/core'
import { template } from '@angular/core/src/render3';

@Component ({
    selector: 'sandbox6',
    template: `
    <h2> Hello Sandbox </h2>
     <div><img src='{{imageUrl}}'></div>

     <hr />
     <div><img [src]="imageUrl" /></div>
     
     <hr />
     <div><img bind-src="imageUrl" /> </div>

     <hr />
    <button [disabled]="isChanged">Save</button>
    `
})

export class sandbox6Component{
    imageUrl : string = 'http://lorempixel.com/400/200/';
    isChanged : boolean = false;
}