/**
 * 1. import Component from angular core module
 * 2. create a clas named AppComponent(you can name it differently)
 * 3. export the class so it can be imported from other places in the App
 * 4. Add @Component directive to turn your class really into a Component
 */


import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
})



export class AppComponent {
    name = 'Anuglar';
}



