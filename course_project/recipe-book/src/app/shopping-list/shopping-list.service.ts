import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  notifyIngredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {}
  private ingredients: Ingredient[] = [
    new Ingredient('Carrot', 1),
    new Ingredient('Potato', 10),
    new Ingredient('Onion', 3),
    new Ingredient('Garlic', 1),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.notifyIngredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.notifyIngredientsChanged.emit(this.ingredients.slice());
  }
}
