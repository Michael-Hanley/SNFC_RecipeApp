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
var core_1 = require('angular2/core');
var shopping_list_service_1 = require("./services/shopping-list.service");
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
    }
    /**
    * Deletes a selected recipe from the shopping list
    */
    ShoppingListComponent.prototype.onDeleteRecipe = function (index) {
        this._shoppingListService.deleteItem(index);
    };
    /**
    * Clears entire shopping list for the customer
    */
    ShoppingListComponent.prototype.onClearList = function () {
        this._shoppingListService.clearRecipeList();
    };
    ShoppingListComponent.prototype.onAddToShoppingList = function (index) {
        this._shoppingListService.insertIngredients(this.shoppingList[index].Ingredient);
    };
    /**
    * Pulls the selected ingredients from local storage and
    * iterates through them in a listed format.
    */
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.shoppingList = this._shoppingListService.getShoppingList();
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list',
            templateUrl: 'templates/favorites/favorite-recipe-list.tpl.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof shopping_list_service_1.ShoppingListService !== 'undefined' && shopping_list_service_1.ShoppingListService) === 'function' && _a) || Object])
    ], ShoppingListComponent);
    return ShoppingListComponent;
    var _a;
}());
exports.ShoppingListComponent = ShoppingListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsc0NBQWtDLGtDQUFrQyxDQUFDLENBQUE7QUFPckU7SUFHQywrQkFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFBSSxDQUFDO0lBQ2xFOztNQUVFO0lBQ0YsOENBQWMsR0FBZCxVQUFlLEtBQVk7UUFFMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0Q7O01BRUU7SUFDRiwyQ0FBVyxHQUFYO1FBRUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxtREFBbUIsR0FBbkIsVUFBb0IsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7OztNQUdFO0lBQ0Ysd0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFsQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFDLGVBQWU7WUFDeEIsV0FBVyxFQUFDLG1EQUFtRDtTQUMvRCxDQUFDOzs2QkFBQTtJQWlDRiw0QkFBQzs7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLDZCQUFxQix3QkFnQ2pDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtzaG9wcGluZ0xpc3R9IGZyb20gXCIuL3NoYXJlZC9zaG9wcGluZ0xpc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOidzaG9wcGluZy1saXN0JyxcclxuXHR0ZW1wbGF0ZVVybDondGVtcGxhdGVzL2Zhdm9yaXRlcy9mYXZvcml0ZS1yZWNpcGUtbGlzdC50cGwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHNob3BwaW5nTGlzdDogc2hvcHBpbmdMaXN0W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHsgfVxyXG5cdC8qKlxyXG5cdCogRGVsZXRlcyBhIHNlbGVjdGVkIHJlY2lwZSBmcm9tIHRoZSBzaG9wcGluZyBsaXN0XHJcblx0Ki9cclxuXHRvbkRlbGV0ZVJlY2lwZShpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWxldGVJdGVtKGluZGV4KTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBDbGVhcnMgZW50aXJlIHNob3BwaW5nIGxpc3QgZm9yIHRoZSBjdXN0b21lclxyXG5cdCovXHJcblx0b25DbGVhckxpc3QoKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuY2xlYXJSZWNpcGVMaXN0KCk7XHJcblx0fVxyXG5cclxuXHRvbkFkZFRvU2hvcHBpbmdMaXN0KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEluZ3JlZGllbnRzKHRoaXMuc2hvcHBpbmdMaXN0W2luZGV4XS5JbmdyZWRpZW50KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogUHVsbHMgdGhlIHNlbGVjdGVkIGluZ3JlZGllbnRzIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgXHJcblx0KiBpdGVyYXRlcyB0aHJvdWdoIHRoZW0gaW4gYSBsaXN0ZWQgZm9ybWF0LiBcclxuXHQqL1xyXG5cdG5nT25Jbml0KCk6YW55IHtcclxuXHRcdHRoaXMuc2hvcHBpbmdMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRTaG9wcGluZ0xpc3QoKTtcclxuXHR9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
