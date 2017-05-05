// this is an attribute directive
// will be added as attribute to html element and should change the appearance


// import HostListener so directive can respond to user-initiated events.


import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef){
      
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight('black');
    }
    
    private highlight(color: string){
          this.el.nativeElement.style.color = color;
    }
}