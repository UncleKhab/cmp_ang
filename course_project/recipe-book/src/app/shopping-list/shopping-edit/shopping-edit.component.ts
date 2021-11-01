import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountRef: ElementRef;
  @Output() sendIngredient = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}
  onAdd(ev) {
    ev.preventDefault();
    this.sendIngredient.emit({
      name: this.nameRef.nativeElement.value,
      amount: this.amountRef.nativeElement.value,
    });
  }
}
