import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  notifyRecipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.notifyRecipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
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
