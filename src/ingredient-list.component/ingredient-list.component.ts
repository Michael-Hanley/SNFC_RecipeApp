import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";
import {Ingredient} from "../shared/ingredient";
import {ControlGroup} from "@angular/common";
import {FormBuilder} from "@angular/common";
import {Validators} from "@angular/common";
import {Control} from "@angular/common";

@Component
({
    selector: 'ingredient-list',
    templateUrl: "src/ingredient-list.component/ingredient-list.tpl.html",
})
export class IngredientListComponent implements OnInit{
	ingredientList: Ingredient[];
	tableFlag:boolean = false;
	item = {name: '', amount: 0};
	myForm: ControlGroup;

	constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) { }

	onDeleteIngredient(index:number)
	{
		this._shoppingListService.deleteIngredient(index);
	}

	incrementIngredient(index:number)
	{
		this._shoppingListService.incrementIngredient(index);
	}

	decrementIngredient(index:number)
	{
		this._shoppingListService.decrementIngredient(index);
	}

	onClearList()
	{
		this._shoppingListService.clearIngredientList();
	}

	onSubmit()
	{
		let k:number = this.item.amount;
		this._shoppingListService.addItem({Ingredient: this.item.name, ingredientCount: k});
	}

	ngOnInit():any {
		this.ingredientList = this._shoppingListService.getIngredientList();

		this.myForm = this._formBuilder.group({ 
			'ingredient': ['',Validators.required],
			'ingredientCount': ['', Validators.compose([
				Validators.required,
				greaterZero
				])],
		});
	}
}

function greaterZero(control: Control): {[s: string]: boolean} {
	if (control.value <= 0) {
		return {notEnough: true};
	}
}