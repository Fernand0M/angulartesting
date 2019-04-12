// to show basic workflow of angualar, of using constructor,{{}} -> String interpolation

import {Component} from '@angular/core'

@Component({
    selector :'sandbox',
    template : `
    <h1> Hello From Sandbox Component </h1>
    <!-- get the values from the class and display -->
    Name is {{name}}
    <hr />
    Age : {{age}}
    <hr />
    <p> Showing JSON values </p>
    <p> First Name : {{person.firstname}}<br/>
        Last Name : {{person.lastname}} <br/>
    </p>
    <ul>
    <li> {{1+1}}</li>
    <li>{{showAge()}}
    </ul>
    `
})

export class SandboxComponent{
    name = 'Jhon Doe';
    age;
    person = {
        firstname: 'Pete',
        lastname: 'Sampres'
    };

    // They get invoked first time at constructing level
    constructor(){
        console.log ('Hi I´m from Constructor');
        this.age = 33;
    }

    showAge(){
        return "The age is " + this.age;
    }
}