import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  @Input() childSelectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickSender = new EventEmitter();
  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

}
