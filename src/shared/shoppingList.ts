export class shoppingList {
	recipeName: string
	Ingredient: Array<string>;

	constructor(recipeName: string, Ingredient: Array<string>) {
			this.recipeName = recipeName;
			this.Ingredient = Ingredient;
		}
}