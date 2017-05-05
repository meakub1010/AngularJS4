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
         this.highlight(this.highlightColor || this.defaultColor || 'red');
         console.log(this.defaultColor);
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(this.highlightColor);
    }
    
   // @Input() highlightColor: string;

     @Input('myHighlight') highlightColor : string;

     @Input() defaultColor: string;

    private highlight(color: string){
          this.el.nativeElement.style.color = color;
    }
}