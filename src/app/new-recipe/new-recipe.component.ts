import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
  @Output() sendRecipe = new EventEmitter();

  submitForm(title: string, description: string, ingredients: string, instructions: string) {
    let newRecipe: Recipe = new Recipe(title, description, ingredients, instructions);
    this.sendRecipe.emit(newRecipe);
  }
}
