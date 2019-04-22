// working of forms, where user does validation
// we can have an array of json objecy as we add 


import {Component} from '@angular/core';

@Component({
    selector: 'sandbox9',
    template: `
    <div class ="container">
        <form (ngSubmit)="onSubmit()">
            <div class = "form-group-row">
                <div class = "col-xs-2">
                    <label>Enter Name </label>
                    <input [(ngModel)]="name" type= "text" class = "form-control"  name="name"/>
                </div>
            </div>

            <div class = "form-group-row">
                <div class = "col-xs-2">
                    <label>Enter Age </label>
                    <input [(ngModel)]="age" type= "text" class = "form-control"  name="age"/>
                 </div>
            </div>
    
            <button type="submit" class="btn btn-success">Save</button>
        </form>
    </div>
    <hr />

    <ul class = "list-group">
        <li class="list-group-item" *ngFor="let user of users"></li>
        Name :{{user.name}},
        Age :{{user.age}}
    </ul>
    `
})

export class sandobox9Component {
    name: string = "Harry";
    age: number = 20;
    users:any[] = [];
    user;

    constructor(){
        this.user = {
            name : this.name,
            age : this.age
        }
    }

    onSubmit(){
        console.log("Submit Called ...")
        if(this.name.length < 5 || this.age <18){
        alert("Sorry record cannot be inserted, min 5 char , age min 18")
        }else{
            this.user ={
                name : this.name,
                age :this.age
            }
            this.users.unshift(this.user);
            this.name="";
            this.age=0;
        }
    }
}