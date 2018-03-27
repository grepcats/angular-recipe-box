import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() childRecipeList: Recipe[];

  constructor() { }

  ngOnInit() {
  }

  @Output() viewSender = new EventEmitter();
  recipeClicked(recipeToView: Recipe) {
    this.viewSender.emit(recipeToView);
  }

  @Output() newRecipe = new EventEmitter();
  newRecipeClicked() {
    this.newRecipe.emit();
  }

}
