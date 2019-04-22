//to show working of ngif, ngswitch

import { Component} from '@angular/core'

@Component({
    selector: 'sandbox5',
    template:  `
    <h2>Hello 

    <span *ngIf='showName'> {{name}} </span>
    <span *ngIf='!showName'> World </span>

    </h2>
    <hr />
    <!-- in Angular4, we have ng-template, very similar to ngId , it an alternative 
    where noName is the tempalte defined, we can have any number of ng-template
    until they are unique  -->
    
    <h2> Welcome
    <span *ngIf='showName; else noName'>{{name}}</span>
    <ng-template #noName> World </ng-template>    

    <hr />

    <div [ngSwitch]='option'>
        <div *ngSwitchCase="1">Hey you are in Case 1 - Hello World </div>
        <div *ngSwitchCase="2">Hey you are in Case 2 - Test 2 </div>
        <div *ngSwitchCase="3">Hey you are in Case 3 - you there </div>
        <div *ngSwitchCase="4">Hey you are in Case 4 - Enjoy</div>
        <div *ngSwitchDefault>Sorry</div>
    </div>
    `
})

export class Sandbox5Component{
    name: string = 'Abel';
    showName: boolean = false;

    // for showing ngSwitch
    option: number = 22;
}