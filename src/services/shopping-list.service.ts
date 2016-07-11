import {Injectable} from '@angular/core';
import {SHOPPING_LIST} from "../mock/shopping-list";
import {shoppingList} from "../shared/shoppingList";
import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";
import {INGREDIENTS} from "../mock/ingredient-list";

@Injectable()
export class ShoppingListService 
{
	/**
	* appends the selected ingredients onto the end of the array. 
	*/
	insertAllItems(Items: shoppingList)
	{
		let k:number = 0;
		if(SHOPPING_LIST[k] == null)
		{
			SHOPPING_LIST.push(Items);
		}
		else if(SHOPPING_LIST[k] != null)	
		{
			do
			{
				if(Items.recipeName == SHOPPING_LIST[k].recipeName)
				{
					return 0;
				}
				else k++;
			}while(k < SHOPPING_LIST.length);
			SHOPPING_LIST.push(Items);
		}

		SHOPPING_LIST.sort(function(a,b) 
		{
			if (a.recipeName < b.recipeName)
				return -1;
			else if (a.recipeName > b.recipeName)
				return 1;
			else 
				return 0;
		});
	}

	insertIngredients(ingredients: Array<any>)
	{
		let k:number=0;
		while(k < ingredients.length)
		{
			INGREDIENTS.push({Ingredient: ingredients[k], ingredientCount: 1})
			k++;
		}
		INGREDIENTS.sort(function(a,b) 
		{
			if (a.Ingredient < b.Ingredient)
				return -1;
			else if (a.Ingredient > b.Ingredient)
				return 1;
			else 
				return 0;
		});
	}
	/**
	* returns shopping list from local  storage.
	*/
	getAllItems()
	{
		return SHOPPING_LIST;
	}
	/**
	* returns the SHOPPING_LIST after duplicate recipes are deleted
	*/
	getShoppingList()
	{
		return SHOPPING_LIST;
	}
	
	getIngredientList()
	{
		let i:number = 0;
		let k:number = 0;
		while(k < INGREDIENTS.length-1)
		{
			if (INGREDIENTS[k].Ingredient == INGREDIENTS[k+1].Ingredient)
			{
				while(i < INGREDIENTS[k].ingredientCount)
				{
					this.incrementIngredient(k+1);
					i++
				}
				INGREDIENTS.splice(k, 1);
				i=0;
			}
			if (k < INGREDIENTS.length-1 && INGREDIENTS[k].Ingredient != INGREDIENTS[k+1].Ingredient)
			{
				k++;
			}
		}
		return INGREDIENTS;
	}
	
	returnIngredients()
	{
		return INGREDIENTS;
	}

	deleteIngredient(index:number)
	{
		INGREDIENTS.splice(index, 1);
	}

	incrementIngredient(index:number)
	{
		INGREDIENTS[index].ingredientCount++;
	}

	decrementIngredient(index:number)
	{
		if(INGREDIENTS[index].ingredientCount > 0)
			INGREDIENTS[index].ingredientCount--;
	}
	
	/**
	* Deletes entire recipes from the SHOPPING_LIST
	*/
	deleteItem(index:number)
	{
		SHOPPING_LIST.splice(index, 1);
	}

	/**
	* Clears entire shopping list
	*/
	clearRecipeList()
	{
		SHOPPING_LIST.splice(0, 1000);
	}

	clearIngredientList()
	{
		INGREDIENTS.splice(0, 1000);
	}

	addItem(ingredient: any)
	{
		let k:number=0;
		let i:number=0;
		while(k < INGREDIENTS.length)
		{
			if(ingredient.Ingredient == INGREDIENTS[k].Ingredient)
			{
				while(i < ingredient.ingredientCount)
				{
					this.incrementIngredient(k);
					i++
				}		
				return 0;
			}
			k++;
		}
		INGREDIENTS.push(ingredient);
	}

}