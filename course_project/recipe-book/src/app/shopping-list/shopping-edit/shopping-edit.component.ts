import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAdd(ev) {
    ev.preventDefault();
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
