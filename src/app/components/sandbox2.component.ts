import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'sandbox2',
    template: `
    <h1> The customer is </h1>
    <p>Id : {{customer.id}}, Name {{customer.name}}, Email {{customer.email}}</p>
    <br/>

    <ul>
        <li *ngFor='let cust of customers'>
            {{cust.id}},{{cust.name}},{{cust.email}}
        </li>
    </ul>
    `
})

export class sandbox2Component {
    customer: ICustomer;
    customers: ICustomer[];

    constructor() {
        this.customer = {
            id: 101,
            name: 'Britt',
            email: 'britt@gmail.com'
        };

        this.customers =[
            {
                id: 101,
                name: 'Britt',
                email: 'britt@gmail.com'
            },
            {
                id: 102,
                name: 'Raul',
                email: 'rul@gmail.com'
            },
            {
                id: 103,
                name: 'Fernando',
                email: 'fer@gmail.com'
            }
        ];
    }
}
interface ICustomer {
    id: number,
    name: string,
    email: string
}
