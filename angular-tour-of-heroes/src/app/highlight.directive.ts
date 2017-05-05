// this is an attribute directive
// will be added as attribute to html element and should change the appearance

import { Directive, ElementRef, Input } from '@angular/core';

class HighlightDirective {
    constructor(el: ElementRef){
        el.nativeElement.style.color = 'red';
    }
}