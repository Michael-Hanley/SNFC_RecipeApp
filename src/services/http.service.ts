import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Recipe} from "../shared/recipe";
import {RECIPE_LIST} from "../mock/recipe-list";
import {CUSTOMERINPUT} from "../mock/customer-input";
import {ALLERGEN_LIST} from "../mock/allergen-list";

@Injectable()
export class HttpService 
{
	constructor(private _http: Http) {}
	/**
	* Creates the proper header to gain access to arango.
	* True authentication yet to be started.
	*/
	createAuthorizationHeader(headers:Headers) 
		{
	    	headers.append('Authorization', 'Basic ' +
	      		btoa('webdev:a%5i*ot!')); 
	  	}
	/**
	* Main Search query based on the ingredients the recipe contains. 
	* takes the inputed search term pushed from the get_recipe.component
	*/ 
	getPosts(input:string): Observable<any> 
		{
		let k:number = 0;
		let headers = new Headers();
		let recipeObject: Array<Recipe>;
		var url= 'http://stage.webservices.sacfood.coop:8529/_db/snfc/snfcEndPoints/foodservice/recipes-ingredients/' + input;
    	this.createAuthorizationHeader(headers);

    	// returns the query 
		return this._http.get(url,{headers:headers})
		
		// maps the response object to a json object
			.map((response) => 
			{
				return response.json();
			})
		// maps the large object into multiple smaller objects contained in the 
		// recipe model
		.map((recipes: Array<any>) => {
			let result:Array<Recipe> = [];
			if (recipes) 
			{
				recipes.forEach((recipe) => 
				{
					result.push(
						new Recipe(recipe.Recipe,
							recipe.PLU,
							recipe.IngredientCount,
							recipe.Ingredients
							));
				 k++;
				});
			}
		
		// clears the results from previous search
		this.clearResults()
		// saves the customers input to local cache
		CUSTOMERINPUT[0] = input;
		// sorts the results based on the name of the recipe
		result.sort(function(a,b) 
		{
			if (a.Recipe < b.Recipe)
				return -1;
			else if (a.Recipe > b.Recipe)
				return 1;
			else 
				return 0;
		});
		// saves the current set of json objects
		this.saveResults(result);
		// if larger than 1 result conduct duplicate check
		if(k>1)
		{
			this.deleteDuplicate(k);
		}

		return this.returnResults();
		}) 
	}
	/**
	* saves the results of the current search to local storage.
	*/
	saveResults(input: any) 
	{
		Array.prototype.push.apply(RECIPE_LIST, input);
	}

	/**
	* nulls the previously searched results starting at element 0 to 1000 
	*/
	clearResults()
	{
		RECIPE_LIST.splice(0, 1000);
	}
	
	/**
	* after the query has been sorted, This method loops through the 
	* object array and deletes any duplicate recipes.
	*/
	deleteDuplicate(k:number)
	{
		let j:number=0;
		do
		{
			if(RECIPE_LIST[j].Recipe === RECIPE_LIST[j+1].Recipe)
			{	
				RECIPE_LIST.splice(j, 1);
				k--;
			}
			j++;
		}while(j < k-1);
	}
	/**
	* Saves the the index of the selected recipes along with the boolean
	* value that tests whether or not a item had been selected.
	*/
	saveSelectedRecipe(i:number, test:boolean)
	{
		CUSTOMERINPUT[1] = i;
		CUSTOMERINPUT[2] = test;
	}

	/**
	* returns the customers search term to the input field.
	*/
	returnCustomerInput()
	{
		return CUSTOMERINPUT[0]; // Search term
	}

	/**
	* returns the index of the recipe the customer had selected.
	*/
	returnSelectedRecipeIndex() 
	{
		return CUSTOMERINPUT[1]; // Index of selected recipe
	}

	/**
	* returns the test of whether a customer has selected a recipe.
	*/
	returnSelectionTest()
	{
		return CUSTOMERINPUT[2]; // Selection test boolean
	}

	/**
	* returns saved recipe search.
	*/
	returnResults() 
	{
		return RECIPE_LIST;
	}

	saveAllergenInfo(item:any)
	{
		for(let i = 0; i < ALLERGEN_LIST.length; i++ )
		{
			if ( item == ALLERGEN_LIST[i])
			{
				ALLERGEN_LIST.splice(i, 1);
				return 0;
			}
		}
		ALLERGEN_LIST.push(item);
		console.log(ALLERGEN_LIST);
	}

	returnAllergenInfo()
	{
		return ALLERGEN_LIST;
	}

}