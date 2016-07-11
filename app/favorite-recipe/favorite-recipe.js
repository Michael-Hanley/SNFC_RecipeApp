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
var shopping_list_service_1 = require("../services/shopping-list.service");
var FavoriteRecipeComponent = (function () {
    function FavoriteRecipeComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
    }
    /**
    * Deletes a selected recipe from the shopping list
    */
    FavoriteRecipeComponent.prototype.onDeleteRecipe = function (index) {
        this._shoppingListService.deleteItem(index);
    };
    /**
    * Clears entire shopping list for the customer
    */
    FavoriteRecipeComponent.prototype.onClearList = function () {
        this._shoppingListService.clearRecipeList();
    };
    FavoriteRecipeComponent.prototype.onAddToShoppingList = function (index) {
        this._shoppingListService.insertIngredients(this.shoppingList[index].Ingredient);
    };
    /**
    * Pulls the selected ingredients from local storage and
    * iterates through them in a listed format.
    */
    FavoriteRecipeComponent.prototype.ngOnInit = function () {
        this.shoppingList = this._shoppingListService.getShoppingList();
    };
    FavoriteRecipeComponent = __decorate([
        core_1.Component({
            selector: 'favorite-recipe',
            templateUrl: 'src/favorite-recipe/favorite-recipe-list.tpl.html',
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], FavoriteRecipeComponent);
    return FavoriteRecipeComponent;
}());
exports.FavoriteRecipeComponent = FavoriteRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLXJlY2lwZS9mYXZvcml0ZS1yZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QyxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQU90RTtJQUdDLGlDQUFvQixvQkFBeUM7UUFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUFJLENBQUM7SUFDbEU7O01BRUU7SUFDRixnREFBYyxHQUFkLFVBQWUsS0FBWTtRQUUxQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRDs7TUFFRTtJQUNGLDZDQUFXLEdBQVg7UUFFQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHFEQUFtQixHQUFuQixVQUFvQixLQUFZO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7O01BR0U7SUFDRiwwQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakUsQ0FBQztJQWxDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsaUJBQWlCO1lBQzFCLFdBQVcsRUFBQyxtREFBbUQ7U0FDL0QsQ0FBQzs7K0JBQUE7SUFpQ0YsOEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLCtCQUF1QiwwQkFnQ25DLENBQUEiLCJmaWxlIjoiZmF2b3JpdGUtcmVjaXBlL2Zhdm9yaXRlLXJlY2lwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtzaG9wcGluZ0xpc3R9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmdMaXN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjonZmF2b3JpdGUtcmVjaXBlJyxcclxuXHR0ZW1wbGF0ZVVybDonc3JjL2Zhdm9yaXRlLXJlY2lwZS9mYXZvcml0ZS1yZWNpcGUtbGlzdC50cGwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVJlY2lwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c2hvcHBpbmdMaXN0OiBzaG9wcGluZ0xpc3RbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkgeyB9XHJcblx0LyoqXHJcblx0KiBEZWxldGVzIGEgc2VsZWN0ZWQgcmVjaXBlIGZyb20gdGhlIHNob3BwaW5nIGxpc3RcclxuXHQqL1xyXG5cdG9uRGVsZXRlUmVjaXBlKGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0oaW5kZXgpO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIENsZWFycyBlbnRpcmUgc2hvcHBpbmcgbGlzdCBmb3IgdGhlIGN1c3RvbWVyXHJcblx0Ki9cclxuXHRvbkNsZWFyTGlzdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5jbGVhclJlY2lwZUxpc3QoKTtcclxuXHR9XHJcblxyXG5cdG9uQWRkVG9TaG9wcGluZ0xpc3QoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SW5ncmVkaWVudHModGhpcy5zaG9wcGluZ0xpc3RbaW5kZXhdLkluZ3JlZGllbnQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBQdWxscyB0aGUgc2VsZWN0ZWQgaW5ncmVkaWVudHMgZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBcclxuXHQqIGl0ZXJhdGVzIHRocm91Z2ggdGhlbSBpbiBhIGxpc3RlZCBmb3JtYXQuIFxyXG5cdCovXHJcblx0bmdPbkluaXQoKTphbnkge1xyXG5cdFx0dGhpcy5zaG9wcGluZ0xpc3QgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldFNob3BwaW5nTGlzdCgpO1xyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
