import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit, OnChanges {
  constructor(private elRef: ElementRef) {}
  @Input('appDropdown') displayDirective: boolean = false;
  ngOnChanges() {
    this.elRef.nativeElement.classList.toggle('show');
  }
  ngOnInit() {
    this.elRef.nativeElement.classList.remove('show');
  }
}
