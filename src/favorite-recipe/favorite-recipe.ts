import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";
import {shoppingList} from "../shared/shoppingList";

@Component({
	selector:'favorite-recipe',
	templateUrl:'src/favorite-recipe/favorite-recipe-list.tpl.html',
})
export class FavoriteRecipeComponent implements OnInit {
	shoppingList: shoppingList[];

	constructor(private _shoppingListService: ShoppingListService) { }
	/**
	* Deletes a selected recipe from the shopping list
	*/
	onDeleteRecipe(index:number)
	{
		this._shoppingListService.deleteItem(index);
	}
	/**
	* Clears entire shopping list for the customer
	*/
	onClearList()
	{
		this._shoppingListService.clearRecipeList();
	}

	onAddToShoppingList(index:number)
	{
		this._shoppingListService.insertIngredients(this.shoppingList[index].Ingredient);
	}

	/**
	* Pulls the selected ingredients from local storage and 
	* iterates through them in a listed format. 
	*/
	ngOnInit():any {
		this.shoppingList = this._shoppingListService.getShoppingList();
	}

}