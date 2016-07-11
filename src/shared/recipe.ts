export class Recipe {
	Recipe: string;
	PLU: number;
	IngredientCount: number;
	Ingredients: Array<any>;

	constructor(Recipe: string, PLU: number, IngredientCount: number, Ingredients: Array<any>) {
			this.Recipe = Recipe;
			this.PLU = PLU;
			this.IngredientCount = IngredientCount;
			this.Ingredients = Ingredients;
		}
}