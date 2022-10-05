/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ng-app',
    template: `<form>
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" name="email" [(ngModel)]="email"/><br>
                    {{ errorEmail }}
                    <br/>
                    <input type="password" value="" name="password" [(ngModel)]="password"/><br>
                    {{ errorPassword }}
                    <br/>
                    <button (click)="ValidateLogin(email, password)">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email: string = "";
    password: string = "";

    errorEmail: string = "";
    errorPassword: string = "";

    logged_in = false;

    ValidateLogin(email, password) {
        let success = 0;
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email))==false) {
            this.errorEmail = "You have entered an invalid email address!";
        } else {
            this.errorEmail = "";
            success = success + 1;
        }

        var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (password.match(decimal)) {
            this.errorPassword = "";
            success = success + 1;
        } else {
            this.errorPassword = "You have entered an invalid password format!";
        }

        if(success==2) {
            this.logged_in = true;
        } else {
            this.logged_in = false;
        }
    }


}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: "",
                component: Test03Component
            }
        ])
    ],
    declarations: [Test03Component]
})
export class Test03Module { };