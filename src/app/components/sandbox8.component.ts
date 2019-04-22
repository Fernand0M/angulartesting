

import { Component } from '@angular/core'

@Component({
    selector: 'sandbox8',
    template: `
    <button (click)="changeValue()">Change Value</button>
    <div *ngIf="value">
        <p>{{text}}</p>
    </div>

    <button id="mouseBtn" (click)="fireEvent($event)">Click Event</button>
    <hr />
    <button id="mouseBtn" (mouseover)="fireEvent($event)">Mouse Hover </button>
    <hr />
    <button id="mouseBtn" (mousedown)="fireEvent($event)">Mouse Down </button>
    <hr />
    <button id="mouseBtn" (dblclick)="fireEvent($event)">Doble Click </button>

    <!-- Key board events -->
    <div>
       Key Up <input type="text" (keyup)="fireEvent($event)" placeholder= Key up Event />
    </div>
    <div>
        Key Down <input type="text" (keydown)="fireEvent($event)" placeholder= Key down Event />
    </div>
    <div>
        blur <input type="text" (blur)="fireEvent($event)" placeholder= On Blur/>
    </div>
    <div>
        focus <input type="text" (focus)="fireEvent($event)" placeholder= On focus Event />
    </div>
    <div>
        cut <input type="text" (cut)="fireEvent($event)" placeholder= cut Event />
    </div>
    <div>
        copy<input type="text" (copy)="fireEvent($event)" placeholder= copy Event />
    </div>
    <div>
        paste <input type="text" (paste)="fireEvent($event)" placeholder= paste Event />
    </div>
    `
})

export class sandbox8Component {
    text: string = "Hello World";
    value: boolean = true;
    changeValue() {
        this.text = "hi how are you"
        this.value = !this.value;
    }
    fireEvent(e) {
        //console.log(e.target.id);
        console.log(e.type);
    }

}