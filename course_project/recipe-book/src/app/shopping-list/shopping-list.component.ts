import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Carrot', 1),
    new Ingredient('Potato', 10),
    new Ingredient('Onion', 3),
    new Ingredient('Garlic', 1),
  ];
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}