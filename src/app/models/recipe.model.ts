export class Recipe {
  public photo: string = "";
  //static allRecipes = [];

  constructor(public title: string, public description: string, public ingredients: string, public instructions: string){
  //  Recipe.allRecipes.push(this);
  }

  //add tags later
}

//console.log(Recipe.allRecipes);
