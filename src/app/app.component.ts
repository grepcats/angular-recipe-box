import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  masterRecipeList: Recipe[] = [new Recipe('Oatmeal', 'oats, water, salt', 'Boil the oats in water and salt'),
  new Recipe('Kale Chips', 'kale, salt, olive oil, pepper', 'Set oven to 400 degrees. Tear kale into pieces. Drizzle with olive oil and add seasonings. Bake for 10-12 minutes'),
  new Recipe('Coffee', 'coffee beans, water, whipping cream', 'Grind coffee beans to desired consistency. Put grounds in French Press and pour water over them. Figure out the rest')];
  selectedRecipe: Recipe = null;


  addRecipe(newRecipe: Recipe) {
    this.masterRecipeList.push(newRecipe);
    console.log(this.masterRecipeList);
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
    //console.log("this is the clicked recipe: " + this.selectedRecipe.description);
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  deleteRecipe() {
  let index = this.masterRecipeList.indexOf(this.selectedRecipe)
  this.masterRecipeList.splice(index, 1);
  this.selectedRecipe = null;
  }
}
