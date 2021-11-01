import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None / ShadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { name: string; content: string; type: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    // It's called first, before init and everytime the content changes for a particular instance of element
  }
  ngOnInit(): void {
    console.log('onInit called');
    // It's called when the component initialized

    console.log('TextContent:', this.header.nativeElement.textContent);
    console.log(
      'TextContent of Paragraph:',
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    // It's called everytime anything changes, anywhere in the app,
    // be carefull not to use powerful code inside or it will affect your performance
  }
  ngAfterContentInit() {
    console.log('ngAfter Content Init');
    console.log(
      'TextContent of Paragraph:',
      this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked() {
    console.log('After Content Checked');
  }
  ngAfterViewInit() {
    console.log('ngAfter View Init');
    console.log('TextContent: ', this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('After View Checked');
  }
  ngOnDestroy() {
    console.log('Content Destroyed');
  }
}
