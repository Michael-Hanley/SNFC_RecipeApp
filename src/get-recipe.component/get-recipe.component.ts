import {Component} from '@angular/core';
import {HttpService} from "../services/http.service";
import {Recipe} from "../shared/recipe";
import {ShoppingListService} from "../services/shopping-list.service";
import {OnInit} from "@angular/core";
import {RECIPE_LIST} from "../mock/recipe-list";
import {CUSTOMERINPUT} from "../mock/customer-input";
import {SHOPPING_LIST} from "../mock/shopping-list";
import {shoppingList} from "../shared/shoppingList";

@Component
({
    templateUrl: 'src/get-recipe.component/get-recipe.tpl.html',
    providers: [HttpService]
})
export class GetRecipeComponent implements OnInit
{	
	recipes: Recipe[]; // saves the array of Recipe objects from the http service.
	index: number; // index of the selected recipe
	customerInput: string; // Search term the customer has entered
	selectedRecipe: boolean = false; // Testing if the customer has selected a recipe. 

	constructor(private _httpService: HttpService, 
		private _shoppingListService: ShoppingListService) { }
	
	/**	
	* captures the array of the specific recipe the user had picked 
	* and allows the dom to iterate through the ingredients of that recipe. 
	*/
	onSelectRecipe(i:number, selected:boolean)
	{
		if(this.selectedRecipe == true && selected == true && this.index == i)
		{
			this.selectedRecipe = false
			this._httpService.saveSelectedRecipe(this.index, this.selectedRecipe);
			return 0;
		}
		this.selectedRecipe = selected;
		this.index = i;
		this._httpService.saveSelectedRecipe(this.index, this.selectedRecipe);
	}

	/**
	* captures the ingredients and recipe name of the selected recipe and pushes it
	* to the shopping list service. This service pushes the array to
	* local cache where it is later pulled for the ingredient list component.
	*/
	onAddToFavorite(index: number)
	{
		this._shoppingListService.insertAllItems({recipeName:this.recipes[index].Recipe, Ingredient:this.recipes[index].Ingredients});
	}

	onAddToShoppingList(index:number)
	{
		this._shoppingListService.insertIngredients(this.recipes[index].Ingredients);
	}
	/**
	* Intial search of the arango recipe DB. captures the users entered
	* search term and pushes it to the HttpService. which returns the
	* results of all recipes containing that ingredient. 
	*/
	onGetRecipes() 
	{
		this._httpService.getPosts(this.customerInput)
			.subscribe
			(
				response => this.recipes = response
			);
		this.index = null;
	}

	/**
	* Allows the user to navigate to the shopping list component 
	* and back without losing their previously searched results.
	* if no search has been conducted, it returns an empty array. 
	*/
	ngOnInit()
	{	
		this.customerInput = this._httpService.returnCustomerInput();
		this.onGetRecipes();
		this.selectedRecipe = this._httpService.returnSelectionTest();
		this.index = this._httpService.returnSelectedRecipeIndex();
	}
}