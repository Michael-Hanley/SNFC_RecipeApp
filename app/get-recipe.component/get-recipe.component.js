"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_service_1 = require("../services/http.service");
const shopping_list_service_1 = require("../services/shopping-list.service");
let GetRecipeComponent = class GetRecipeComponent {
    constructor(_httpService, _shoppingListService) {
        this._httpService = _httpService;
        this._shoppingListService = _shoppingListService;
        this.selectedRecipe = false; // Testing if the customer has selected a recipe. 
    }
    /**
    * captures the array of the specific recipe the user had picked
    * and allows the dom to iterate through the ingredients of that recipe.
    */
    onSelectRecipe(i, selected) {
        if (this.selectedRecipe == true && selected == true && this.index == i) {
            this.selectedRecipe = false;
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
    onAddToFavorite(index) {
        this._shoppingListService.insertAllItems({ recipeName: this.recipes[index].Recipe, Ingredient: this.recipes[index].Ingredients });
    }
    onAddToShoppingList(index) {
        this._shoppingListService.insertIngredients(this.recipes[index].Ingredients);
    }
    /**
    * Intial search of the arango recipe DB. captures the users entered
    * search term and pushes it to the HttpService. which returns the
    * results of all recipes containing that ingredient.
    */
    onGetRecipes() {
        this._httpService.getPosts(this.customerInput)
            .subscribe(response => this.recipes = response);
        this.index = null;
    }
    /**
    * Allows the user to navigate to the shopping list component
    * and back without losing their previously searched results.
    * if no search has been conducted, it returns an empty array.
    */
    ngOnInit() {
        this.customerInput = this._httpService.returnCustomerInput();
        this.onGetRecipes();
        this.selectedRecipe = this._httpService.returnSelectionTest();
        this.index = this._httpService.returnSelectedRecipeIndex();
    }
};
GetRecipeComponent = __decorate([
    core_1.Component({
        templateUrl: 'src/get-recipe.component/get-recipe.tpl.html',
        providers: [http_service_1.HttpService]
    }), 
    __metadata('design:paramtypes', [http_service_1.HttpService, shopping_list_service_1.ShoppingListService])
], GetRecipeComponent);
exports.GetRecipeComponent = GetRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsd0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFZdEU7SUFPQyxZQUFvQixZQUF5QixFQUNwQyxvQkFBeUM7UUFEOUIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDcEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUhsRCxtQkFBYyxHQUFZLEtBQUssQ0FBQyxDQUFDLGtEQUFrRDtJQUc3QixDQUFDO0lBRXZEOzs7TUFHRTtJQUNGLGNBQWMsQ0FBQyxDQUFRLEVBQUUsUUFBZ0I7UUFFeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1lBQ0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUE7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGVBQWUsQ0FBQyxLQUFhO1FBRTVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUMvSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0Q7Ozs7TUFJRTtJQUNGLFlBQVk7UUFFWCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzVDLFNBQVMsQ0FFVCxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQ25DLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLFFBQVE7UUFFUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDNUQsQ0FBQztBQUNGLENBQUM7QUF6RUQ7SUFBQyxnQkFBUyxDQUNUO1FBQ0csV0FBVyxFQUFFLDhDQUE4QztRQUMzRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7O3NCQUFBO0FBQ1csMEJBQWtCLHFCQW9FOUIsQ0FBQSIsImZpbGUiOiJnZXQtcmVjaXBlLmNvbXBvbmVudC9nZXQtcmVjaXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JFQ0lQRV9MSVNUfSBmcm9tIFwiLi4vbW9jay9yZWNpcGUtbGlzdFwiO1xyXG5pbXBvcnQge0NVU1RPTUVSSU5QVVR9IGZyb20gXCIuLi9tb2NrL2N1c3RvbWVyLWlucHV0XCI7XHJcbmltcG9ydCB7U0hPUFBJTkdfTElTVH0gZnJvbSBcIi4uL21vY2svc2hvcHBpbmctbGlzdFwiO1xyXG5pbXBvcnQge3Nob3BwaW5nTGlzdH0gZnJvbSBcIi4uL3NoYXJlZC9zaG9wcGluZ0xpc3RcIjtcclxuXHJcbkBDb21wb25lbnRcclxuKHtcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2dldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUudHBsLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZXRSZWNpcGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxue1x0XHJcblx0cmVjaXBlczogUmVjaXBlW107IC8vIHNhdmVzIHRoZSBhcnJheSBvZiBSZWNpcGUgb2JqZWN0cyBmcm9tIHRoZSBodHRwIHNlcnZpY2UuXHJcblx0aW5kZXg6IG51bWJlcjsgLy8gaW5kZXggb2YgdGhlIHNlbGVjdGVkIHJlY2lwZVxyXG5cdGN1c3RvbWVySW5wdXQ6IHN0cmluZzsgLy8gU2VhcmNoIHRlcm0gdGhlIGN1c3RvbWVyIGhhcyBlbnRlcmVkXHJcblx0c2VsZWN0ZWRSZWNpcGU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gVGVzdGluZyBpZiB0aGUgY3VzdG9tZXIgaGFzIHNlbGVjdGVkIGEgcmVjaXBlLiBcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBcclxuXHRcdHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHsgfVxyXG5cdFxyXG5cdC8qKlx0XHJcblx0KiBjYXB0dXJlcyB0aGUgYXJyYXkgb2YgdGhlIHNwZWNpZmljIHJlY2lwZSB0aGUgdXNlciBoYWQgcGlja2VkIFxyXG5cdCogYW5kIGFsbG93cyB0aGUgZG9tIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgaW5ncmVkaWVudHMgb2YgdGhhdCByZWNpcGUuIFxyXG5cdCovXHJcblx0b25TZWxlY3RSZWNpcGUoaTpudW1iZXIsIHNlbGVjdGVkOmJvb2xlYW4pXHJcblx0e1xyXG5cdFx0aWYodGhpcy5zZWxlY3RlZFJlY2lwZSA9PSB0cnVlICYmIHNlbGVjdGVkID09IHRydWUgJiYgdGhpcy5pbmRleCA9PSBpKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gZmFsc2VcclxuXHRcdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSBzZWxlY3RlZDtcclxuXHRcdHRoaXMuaW5kZXggPSBpO1xyXG5cdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBjYXB0dXJlcyB0aGUgaW5ncmVkaWVudHMgYW5kIHJlY2lwZSBuYW1lIG9mIHRoZSBzZWxlY3RlZCByZWNpcGUgYW5kIHB1c2hlcyBpdFxyXG5cdCogdG8gdGhlIHNob3BwaW5nIGxpc3Qgc2VydmljZS4gVGhpcyBzZXJ2aWNlIHB1c2hlcyB0aGUgYXJyYXkgdG9cclxuXHQqIGxvY2FsIGNhY2hlIHdoZXJlIGl0IGlzIGxhdGVyIHB1bGxlZCBmb3IgdGhlIGluZ3JlZGllbnQgbGlzdCBjb21wb25lbnQuXHJcblx0Ki9cclxuXHRvbkFkZFRvRmF2b3JpdGUoaW5kZXg6IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEFsbEl0ZW1zKHtyZWNpcGVOYW1lOnRoaXMucmVjaXBlc1tpbmRleF0uUmVjaXBlLCBJbmdyZWRpZW50OnRoaXMucmVjaXBlc1tpbmRleF0uSW5ncmVkaWVudHN9KTtcclxuXHR9XHJcblxyXG5cdG9uQWRkVG9TaG9wcGluZ0xpc3QoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SW5ncmVkaWVudHModGhpcy5yZWNpcGVzW2luZGV4XS5JbmdyZWRpZW50cyk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogSW50aWFsIHNlYXJjaCBvZiB0aGUgYXJhbmdvIHJlY2lwZSBEQi4gY2FwdHVyZXMgdGhlIHVzZXJzIGVudGVyZWRcclxuXHQqIHNlYXJjaCB0ZXJtIGFuZCBwdXNoZXMgaXQgdG8gdGhlIEh0dHBTZXJ2aWNlLiB3aGljaCByZXR1cm5zIHRoZVxyXG5cdCogcmVzdWx0cyBvZiBhbGwgcmVjaXBlcyBjb250YWluaW5nIHRoYXQgaW5ncmVkaWVudC4gXHJcblx0Ki9cclxuXHRvbkdldFJlY2lwZXMoKSBcclxuXHR7XHJcblx0XHR0aGlzLl9odHRwU2VydmljZS5nZXRQb3N0cyh0aGlzLmN1c3RvbWVySW5wdXQpXHJcblx0XHRcdC5zdWJzY3JpYmVcclxuXHRcdFx0KFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMucmVjaXBlcyA9IHJlc3BvbnNlXHJcblx0XHRcdCk7XHJcblx0XHR0aGlzLmluZGV4ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogQWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHRvIHRoZSBzaG9wcGluZyBsaXN0IGNvbXBvbmVudCBcclxuXHQqIGFuZCBiYWNrIHdpdGhvdXQgbG9zaW5nIHRoZWlyIHByZXZpb3VzbHkgc2VhcmNoZWQgcmVzdWx0cy5cclxuXHQqIGlmIG5vIHNlYXJjaCBoYXMgYmVlbiBjb25kdWN0ZWQsIGl0IHJldHVybnMgYW4gZW1wdHkgYXJyYXkuIFxyXG5cdCovXHJcblx0bmdPbkluaXQoKVxyXG5cdHtcdFxyXG5cdFx0dGhpcy5jdXN0b21lcklucHV0ID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQ3VzdG9tZXJJbnB1dCgpO1xyXG5cdFx0dGhpcy5vbkdldFJlY2lwZXMoKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5TZWxlY3Rpb25UZXN0KCk7XHJcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuU2VsZWN0ZWRSZWNpcGVJbmRleCgpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
