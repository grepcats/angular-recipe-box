import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  masterRecipeList: Recipe[] = [new Recipe('Oatmeal', 'some boring breakfast food', 'oats, water, salt' , 'Boil the oats in water and salt'),
  new Recipe('Kale Chips', 'some boring food that liberals eat', 'kale, salt, olive oil, pepper', 'Set oven to 400 degrees. Tear kale into pieces. Drizzle with olive oil and add seasonings. Bake for 10-12 minutes'),
  new Recipe('Coffee', 'bean water', 'coffee beans, water, whipping cream', 'Grind coffee beans to desired consistency. Put grounds in French Press and pour water over them. Figure out the rest')];
  selectedRecipe: Recipe = null;
  selectedRecipe2: Recipe = null;
  showForm: boolean = false;

  updateShowForm(formState) {
    this.showForm = formState;
    this.selectedRecipe = null;
    this.selectedRecipe2 = null;
  }

  addRecipe(newRecipe: Recipe) {
    this.masterRecipeList.push(newRecipe);
    this.showForm = false;
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe2 = clickedRecipe;
    this.selectedRecipe = null;
    //console.log("this is the clicked recipe: " + this.selectedRecipe.description);
  }

  viewRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
    this.selectedRecipe2 = null;
    this.showForm = false;
  }

  finishedEditing() {
    this.selectedRecipe2 = null;
  }

  deleteRecipe() {
    let index = this.masterRecipeList.indexOf(this.selectedRecipe2)
    this.masterRecipeList.splice(index, 1);
    this.selectedRecipe2 = null;
  }
}
