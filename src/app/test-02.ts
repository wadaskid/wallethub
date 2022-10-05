/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, EventEmitter, Output } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'textfield',
    template: '<h2>Title:<h2><br/><input type="text" [(ngModel)]="field" (keyup)="fireEvent()"/>'
})
export class TextField {
    field= '';
    @Output() public childEvent = new EventEmitter();

    fireEvent() {
        this.childEvent.emit(this.field);
    }
}

@Component({
    selector: 'child-component',
    template: `<textfield></textfield>`
})
export class ChildComponent {

}


@Component({
    selector: 'ng-app',
    template: `<div>
                    <textfield (childEvent)="title=$event"></textfield> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    public title = "";

}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: "",
                component: Test02Component
            }
        ])
    ],
    declarations: [Test02Component, ChildComponent, TextField]
})
export class Test02Module { }