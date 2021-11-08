import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  notifyRecipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Best tender chicken schnitzel, coming from heaven!',
      'https://bit.ly/3nXcREm',
      [new Ingredient('Chicken', 1), new Ingredient('French Fries', 21)]
    ),
    new Recipe(
      'Greek Flatbread',
      'Greek Flatbread for your next Gyros or something',
      'https://bzfd.it/3wd1con',
      [new Ingredient('Beef', 1), new Ingredient('Buns', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyRecipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.notifyRecipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyRecipesChanged.next(this.recipes.slice());
  }
}
