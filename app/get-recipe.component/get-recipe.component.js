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
var core_1 = require('@angular/core');
var http_service_1 = require("../services/http.service");
var shopping_list_service_1 = require("../services/shopping-list.service");
var GetRecipeComponent = (function () {
    function GetRecipeComponent(_httpService, _shoppingListService) {
        this._httpService = _httpService;
        this._shoppingListService = _shoppingListService;
        this.selectedRecipe = false; // Testing if the customer has selected a recipe. 
    }
    /**
    * captures the array of the specific recipe the user had picked
    * and allows the dom to iterate through the ingredients of that recipe.
    */
    GetRecipeComponent.prototype.onSelectRecipe = function (i, selected) {
        if (this.selectedRecipe == true && selected == true && this.index == i) {
            this.selectedRecipe = false;
            this._httpService.saveSelectedRecipe(this.index, this.selectedRecipe);
            return 0;
        }
        this.selectedRecipe = selected;
        this.index = i;
        this._httpService.saveSelectedRecipe(this.index, this.selectedRecipe);
    };
    /**
    * captures the ingredients and recipe name of the selected recipe and pushes it
    * to the shopping list service. This service pushes the array to
    * local cache where it is later pulled for the ingredient list component.
    */
    GetRecipeComponent.prototype.onAddToFavorite = function (index) {
        this._shoppingListService.insertAllItems({ recipeName: this.recipes[index].Recipe, Ingredient: this.recipes[index].Ingredients });
    };
    GetRecipeComponent.prototype.onAddToShoppingList = function (index) {
        this._shoppingListService.insertIngredients(this.recipes[index].Ingredients);
    };
    /**
    * Intial search of the arango recipe DB. captures the users entered
    * search term and pushes it to the HttpService. which returns the
    * results of all recipes containing that ingredient.
    */
    GetRecipeComponent.prototype.onGetRecipes = function () {
        var _this = this;
        this._httpService.getPosts(this.customerInput)
            .subscribe(function (response) { return _this.recipes = response; });
        this.index = null;
    };
    /**
    * Allows the user to navigate to the shopping list component
    * and back without losing their previously searched results.
    * if no search has been conducted, it returns an empty array.
    */
    GetRecipeComponent.prototype.ngOnInit = function () {
        this.customerInput = this._httpService.returnCustomerInput();
        this.onGetRecipes();
        this.selectedRecipe = this._httpService.returnSelectionTest();
        this.index = this._httpService.returnSelectedRecipeIndex();
    };
    GetRecipeComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/get-recipe.component/get-recipe.tpl.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, shopping_list_service_1.ShoppingListService])
    ], GetRecipeComponent);
    return GetRecipeComponent;
}());
exports.GetRecipeComponent = GetRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsc0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFZdEU7SUFPQyw0QkFBb0IsWUFBeUIsRUFDcEMsb0JBQXlDO1FBRDlCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFIbEQsbUJBQWMsR0FBWSxLQUFLLENBQUMsQ0FBQyxrREFBa0Q7SUFHN0IsQ0FBQztJQUV2RDs7O01BR0U7SUFDRiwyQ0FBYyxHQUFkLFVBQWUsQ0FBUSxFQUFFLFFBQWdCO1FBRXhDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FDdEUsQ0FBQztZQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFBO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O01BSUU7SUFDRiw0Q0FBZSxHQUFmLFVBQWdCLEtBQWE7UUFFNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQy9ILENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0Q7Ozs7TUFJRTtJQUNGLHlDQUFZLEdBQVo7UUFBQSxpQkFRQztRQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDNUMsU0FBUyxDQUVULFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQXZCLENBQXVCLENBQ25DLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLHFDQUFRLEdBQVI7UUFFQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQXhFRjtRQUFDLGdCQUFTLENBQ1Q7WUFDRyxXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7MEJBQUE7SUFxRUYseUJBQUM7QUFBRCxDQXBFQSxBQW9FQyxJQUFBO0FBcEVZLDBCQUFrQixxQkFvRTlCLENBQUEiLCJmaWxlIjoiZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSRUNJUEVfTElTVH0gZnJvbSBcIi4uL21vY2svcmVjaXBlLWxpc3RcIjtcclxuaW1wb3J0IHtDVVNUT01FUklOUFVUfSBmcm9tIFwiLi4vbW9jay9jdXN0b21lci1pbnB1dFwiO1xyXG5pbXBvcnQge1NIT1BQSU5HX0xJU1R9IGZyb20gXCIuLi9tb2NrL3Nob3BwaW5nLWxpc3RcIjtcclxuaW1wb3J0IHtzaG9wcGluZ0xpc3R9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmdMaXN0XCI7XHJcblxyXG5AQ29tcG9uZW50XHJcbih7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9nZXQtcmVjaXBlLmNvbXBvbmVudC9nZXQtcmVjaXBlLnRwbC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0UmVjaXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcdFxyXG5cdHJlY2lwZXM6IFJlY2lwZVtdOyAvLyBzYXZlcyB0aGUgYXJyYXkgb2YgUmVjaXBlIG9iamVjdHMgZnJvbSB0aGUgaHR0cCBzZXJ2aWNlLlxyXG5cdGluZGV4OiBudW1iZXI7IC8vIGluZGV4IG9mIHRoZSBzZWxlY3RlZCByZWNpcGVcclxuXHRjdXN0b21lcklucHV0OiBzdHJpbmc7IC8vIFNlYXJjaCB0ZXJtIHRoZSBjdXN0b21lciBoYXMgZW50ZXJlZFxyXG5cdHNlbGVjdGVkUmVjaXBlOiBib29sZWFuID0gZmFsc2U7IC8vIFRlc3RpbmcgaWYgdGhlIGN1c3RvbWVyIGhhcyBzZWxlY3RlZCBhIHJlY2lwZS4gXHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgXHJcblx0XHRwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7IH1cclxuXHRcclxuXHQvKipcdFxyXG5cdCogY2FwdHVyZXMgdGhlIGFycmF5IG9mIHRoZSBzcGVjaWZpYyByZWNpcGUgdGhlIHVzZXIgaGFkIHBpY2tlZCBcclxuXHQqIGFuZCBhbGxvd3MgdGhlIGRvbSB0byBpdGVyYXRlIHRocm91Z2ggdGhlIGluZ3JlZGllbnRzIG9mIHRoYXQgcmVjaXBlLiBcclxuXHQqL1xyXG5cdG9uU2VsZWN0UmVjaXBlKGk6bnVtYmVyLCBzZWxlY3RlZDpib29sZWFuKVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuc2VsZWN0ZWRSZWNpcGUgPT0gdHJ1ZSAmJiBzZWxlY3RlZCA9PSB0cnVlICYmIHRoaXMuaW5kZXggPT0gaSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFJlY2lwZSA9IGZhbHNlXHJcblx0XHRcdHRoaXMuX2h0dHBTZXJ2aWNlLnNhdmVTZWxlY3RlZFJlY2lwZSh0aGlzLmluZGV4LCB0aGlzLnNlbGVjdGVkUmVjaXBlKTtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gc2VsZWN0ZWQ7XHJcblx0XHR0aGlzLmluZGV4ID0gaTtcclxuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLnNhdmVTZWxlY3RlZFJlY2lwZSh0aGlzLmluZGV4LCB0aGlzLnNlbGVjdGVkUmVjaXBlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogY2FwdHVyZXMgdGhlIGluZ3JlZGllbnRzIGFuZCByZWNpcGUgbmFtZSBvZiB0aGUgc2VsZWN0ZWQgcmVjaXBlIGFuZCBwdXNoZXMgaXRcclxuXHQqIHRvIHRoZSBzaG9wcGluZyBsaXN0IHNlcnZpY2UuIFRoaXMgc2VydmljZSBwdXNoZXMgdGhlIGFycmF5IHRvXHJcblx0KiBsb2NhbCBjYWNoZSB3aGVyZSBpdCBpcyBsYXRlciBwdWxsZWQgZm9yIHRoZSBpbmdyZWRpZW50IGxpc3QgY29tcG9uZW50LlxyXG5cdCovXHJcblx0b25BZGRUb0Zhdm9yaXRlKGluZGV4OiBudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRBbGxJdGVtcyh7cmVjaXBlTmFtZTp0aGlzLnJlY2lwZXNbaW5kZXhdLlJlY2lwZSwgSW5ncmVkaWVudDp0aGlzLnJlY2lwZXNbaW5kZXhdLkluZ3JlZGllbnRzfSk7XHJcblx0fVxyXG5cclxuXHRvbkFkZFRvU2hvcHBpbmdMaXN0KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEluZ3JlZGllbnRzKHRoaXMucmVjaXBlc1tpbmRleF0uSW5ncmVkaWVudHMpO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIEludGlhbCBzZWFyY2ggb2YgdGhlIGFyYW5nbyByZWNpcGUgREIuIGNhcHR1cmVzIHRoZSB1c2VycyBlbnRlcmVkXHJcblx0KiBzZWFyY2ggdGVybSBhbmQgcHVzaGVzIGl0IHRvIHRoZSBIdHRwU2VydmljZS4gd2hpY2ggcmV0dXJucyB0aGVcclxuXHQqIHJlc3VsdHMgb2YgYWxsIHJlY2lwZXMgY29udGFpbmluZyB0aGF0IGluZ3JlZGllbnQuIFxyXG5cdCovXHJcblx0b25HZXRSZWNpcGVzKCkgXHJcblx0e1xyXG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuZ2V0UG9zdHModGhpcy5jdXN0b21lcklucHV0KVxyXG5cdFx0XHQuc3Vic2NyaWJlXHJcblx0XHRcdChcclxuXHRcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlY2lwZXMgPSByZXNwb25zZVxyXG5cdFx0XHQpO1xyXG5cdFx0dGhpcy5pbmRleCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIEFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB0byB0aGUgc2hvcHBpbmcgbGlzdCBjb21wb25lbnQgXHJcblx0KiBhbmQgYmFjayB3aXRob3V0IGxvc2luZyB0aGVpciBwcmV2aW91c2x5IHNlYXJjaGVkIHJlc3VsdHMuXHJcblx0KiBpZiBubyBzZWFyY2ggaGFzIGJlZW4gY29uZHVjdGVkLCBpdCByZXR1cm5zIGFuIGVtcHR5IGFycmF5LiBcclxuXHQqL1xyXG5cdG5nT25Jbml0KClcclxuXHR7XHRcclxuXHRcdHRoaXMuY3VzdG9tZXJJbnB1dCA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVybkN1c3RvbWVySW5wdXQoKTtcclxuXHRcdHRoaXMub25HZXRSZWNpcGVzKCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuU2VsZWN0aW9uVGVzdCgpO1xyXG5cdFx0dGhpcy5pbmRleCA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVyblNlbGVjdGVkUmVjaXBlSW5kZXgoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
