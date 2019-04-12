import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'sandbox1',
    template: `
    name : {{name}}
    `
})

export class sandbox1Component {
    name : string = 'Kumar';
}