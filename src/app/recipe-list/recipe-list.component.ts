import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() childRecipeList: Recipe[];
  @Input() showFormBool: boolean;

  @Output() clickedBool = new EventEmitter;

  displayForm() {
    this.showFormBool = !this.showFormBool;
    this.clickedBool.emit(this.showFormBool);
  }

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
