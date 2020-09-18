import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Javascript',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/mountain.bmp',
      ingredints: ['Node', 'React', 'Angular'],
    },
    {
      id: 'r2',
      title: 'Database',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
      ingredints: ['MySQL', 'MongoDB', 'NoSQL'],
    },
    {
      id: 'r3',
      title: 'Programming',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/serrano.png',
      ingredints: ['C', 'C++', 'C#'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  geteRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
