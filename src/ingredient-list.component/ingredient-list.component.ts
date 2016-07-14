import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ShoppingListService} from "../services/shopping-list.service";
import {Ingredient} from "../shared/ingredient";
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators} from "@angular/forms";

@Component
({
    selector: 'ingredient-list',
	directives: [REACTIVE_FORM_DIRECTIVES],
    templateUrl: "src/ingredient-list.component/ingredient-list.tpl.html",
})
export class IngredientListComponent implements OnInit{
	ingredientList: Ingredient[];
	tableFlag:boolean = false;
	myForm: FormGroup;

	constructor(private _shoppingListService: ShoppingListService) {
		this.myForm = new FormGroup({
			'itemName': new FormControl('', Validators.required),
			'amount': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
		});
	 }

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
		let k:number = this.myForm.value.amount;
		this._shoppingListService.addItem({Ingredient: this.myForm.value.itemName, ingredientCount: k});
	}

	ngOnInit():any {
		this.ingredientList = this._shoppingListService.getIngredientList();
	}
}
