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
var shopping_list_1 = require("../mock/shopping-list");
var ingredient_list_1 = require("../mock/ingredient-list");
var ShoppingListService = (function () {
    function ShoppingListService() {
    }
    /**
    * appends the selected ingredients onto the end of the array.
    */
    ShoppingListService.prototype.insertAllItems = function (Items) {
        var k = 0;
        if (shopping_list_1.SHOPPING_LIST[k] == null) {
            shopping_list_1.SHOPPING_LIST.push(Items);
        }
        else if (shopping_list_1.SHOPPING_LIST[k] != null) {
            do {
                if (Items.recipeName == shopping_list_1.SHOPPING_LIST[k].recipeName) {
                    return 0;
                }
                else
                    k++;
            } while (k < shopping_list_1.SHOPPING_LIST.length);
            shopping_list_1.SHOPPING_LIST.push(Items);
        }
        shopping_list_1.SHOPPING_LIST.sort(function (a, b) {
            if (a.recipeName < b.recipeName)
                return -1;
            else if (a.recipeName > b.recipeName)
                return 1;
            else
                return 0;
        });
    };
    ShoppingListService.prototype.insertIngredients = function (ingredients) {
        var k = 0;
        while (k < ingredients.length) {
            ingredient_list_1.INGREDIENTS.push({ Ingredient: ingredients[k], ingredientCount: 1 });
            k++;
        }
        ingredient_list_1.INGREDIENTS.sort(function (a, b) {
            if (a.Ingredient < b.Ingredient)
                return -1;
            else if (a.Ingredient > b.Ingredient)
                return 1;
            else
                return 0;
        });
    };
    /**
    * returns shopping list from local  storage.
    */
    ShoppingListService.prototype.getAllItems = function () {
        return shopping_list_1.SHOPPING_LIST;
    };
    /**
    * returns the SHOPPING_LIST after duplicate recipes are deleted
    */
    ShoppingListService.prototype.getShoppingList = function () {
        return shopping_list_1.SHOPPING_LIST;
    };
    ShoppingListService.prototype.getIngredientList = function () {
        var i = 0;
        var k = 0;
        while (k < ingredient_list_1.INGREDIENTS.length - 1) {
            if (ingredient_list_1.INGREDIENTS[k].Ingredient == ingredient_list_1.INGREDIENTS[k + 1].Ingredient) {
                while (i < ingredient_list_1.INGREDIENTS[k].ingredientCount) {
                    this.incrementIngredient(k + 1);
                    i++;
                }
                ingredient_list_1.INGREDIENTS.splice(k, 1);
                i = 0;
            }
            if (k < ingredient_list_1.INGREDIENTS.length - 1 && ingredient_list_1.INGREDIENTS[k].Ingredient != ingredient_list_1.INGREDIENTS[k + 1].Ingredient) {
                k++;
            }
        }
        return ingredient_list_1.INGREDIENTS;
    };
    ShoppingListService.prototype.returnIngredients = function () {
        return ingredient_list_1.INGREDIENTS;
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        ingredient_list_1.INGREDIENTS.splice(index, 1);
    };
    ShoppingListService.prototype.incrementIngredient = function (index) {
        ingredient_list_1.INGREDIENTS[index].ingredientCount++;
    };
    ShoppingListService.prototype.decrementIngredient = function (index) {
        if (ingredient_list_1.INGREDIENTS[index].ingredientCount > 0)
            ingredient_list_1.INGREDIENTS[index].ingredientCount--;
    };
    /**
    * Deletes entire recipes from the SHOPPING_LIST
    */
    ShoppingListService.prototype.deleteItem = function (index) {
        shopping_list_1.SHOPPING_LIST.splice(index, 1);
    };
    /**
    * Clears entire shopping list
    */
    ShoppingListService.prototype.clearRecipeList = function () {
        shopping_list_1.SHOPPING_LIST.splice(0, 1000);
    };
    ShoppingListService.prototype.clearIngredientList = function () {
        ingredient_list_1.INGREDIENTS.splice(0, 1000);
    };
    ShoppingListService.prototype.addItem = function (ingredient) {
        var k = 0;
        var i = 0;
        while (k < ingredient_list_1.INGREDIENTS.length) {
            if (ingredient.Ingredient == ingredient_list_1.INGREDIENTS[k].Ingredient) {
                while (i < ingredient.ingredientCount) {
                    this.incrementIngredient(k);
                    i++;
                }
                return 0;
            }
            k++;
        }
        ingredient_list_1.INGREDIENTS.push(ingredient);
    };
    ShoppingListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBSXBELGdDQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBR3BEO0lBQUE7SUEySkEsQ0FBQztJQXpKQTs7TUFFRTtJQUNGLDRDQUFjLEdBQWQsVUFBZSxLQUFtQjtRQUVqQyxJQUFJLENBQUMsR0FBVSxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFBLENBQUMsNkJBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FDNUIsQ0FBQztZQUNBLDZCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsNkJBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FDakMsQ0FBQztZQUNBLEdBQ0EsQ0FBQztnQkFDQSxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLDZCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ25ELENBQUM7b0JBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDO2dCQUNELElBQUk7b0JBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLFFBQU0sQ0FBQyxHQUFHLDZCQUFhLENBQUMsTUFBTSxFQUFFO1lBQ2pDLDZCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCw2QkFBYSxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDO1lBRTlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEVBQUUs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MkpDLElBQUE7QUEzSlksMkJBQW1CLHNCQTJKL0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NIT1BQSU5HX0xJU1R9IGZyb20gXCIuLi9tb2NrL3Nob3BwaW5nLWxpc3RcIjtcclxuaW1wb3J0IHtzaG9wcGluZ0xpc3R9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmdMaXN0XCI7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xyXG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xyXG5pbXBvcnQge0lOR1JFRElFTlRTfSBmcm9tIFwiLi4vbW9jay9pbmdyZWRpZW50LWxpc3RcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2UgXHJcbntcclxuXHQvKipcclxuXHQqIGFwcGVuZHMgdGhlIHNlbGVjdGVkIGluZ3JlZGllbnRzIG9udG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuIFxyXG5cdCovXHJcblx0aW5zZXJ0QWxsSXRlbXMoSXRlbXM6IHNob3BwaW5nTGlzdClcclxuXHR7XHJcblx0XHRsZXQgazpudW1iZXIgPSAwO1xyXG5cdFx0aWYoU0hPUFBJTkdfTElTVFtrXSA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRTSE9QUElOR19MSVNULnB1c2goSXRlbXMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihTSE9QUElOR19MSVNUW2tdICE9IG51bGwpXHRcclxuXHRcdHtcclxuXHRcdFx0ZG9cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKEl0ZW1zLnJlY2lwZU5hbWUgPT0gU0hPUFBJTkdfTElTVFtrXS5yZWNpcGVOYW1lKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGsrKztcclxuXHRcdFx0fXdoaWxlKGsgPCBTSE9QUElOR19MSVNULmxlbmd0aCk7XHJcblx0XHRcdFNIT1BQSU5HX0xJU1QucHVzaChJdGVtcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0U0hPUFBJTkdfTElTVC5zb3J0KGZ1bmN0aW9uKGEsYikgXHJcblx0XHR7XHJcblx0XHRcdGlmIChhLnJlY2lwZU5hbWUgPCBiLnJlY2lwZU5hbWUpXHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRlbHNlIGlmIChhLnJlY2lwZU5hbWUgPiBiLnJlY2lwZU5hbWUpXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGluc2VydEluZ3JlZGllbnRzKGluZ3JlZGllbnRzOiBBcnJheTxhbnk+KVxyXG5cdHtcclxuXHRcdGxldCBrOm51bWJlcj0wO1xyXG5cdFx0d2hpbGUoayA8IGluZ3JlZGllbnRzLmxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0SU5HUkVESUVOVFMucHVzaCh7SW5ncmVkaWVudDogaW5ncmVkaWVudHNba10sIGluZ3JlZGllbnRDb3VudDogMX0pXHJcblx0XHRcdGsrKztcclxuXHRcdH1cclxuXHRcdElOR1JFRElFTlRTLnNvcnQoZnVuY3Rpb24oYSxiKSBcclxuXHRcdHtcclxuXHRcdFx0aWYgKGEuSW5ncmVkaWVudCA8IGIuSW5ncmVkaWVudClcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKGEuSW5ncmVkaWVudCA+IGIuSW5ncmVkaWVudClcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIHJldHVybnMgc2hvcHBpbmcgbGlzdCBmcm9tIGxvY2FsICBzdG9yYWdlLlxyXG5cdCovXHJcblx0Z2V0QWxsSXRlbXMoKVxyXG5cdHtcclxuXHRcdHJldHVybiBTSE9QUElOR19MSVNUO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIHJldHVybnMgdGhlIFNIT1BQSU5HX0xJU1QgYWZ0ZXIgZHVwbGljYXRlIHJlY2lwZXMgYXJlIGRlbGV0ZWRcclxuXHQqL1xyXG5cdGdldFNob3BwaW5nTGlzdCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1Q7XHJcblx0fVxyXG5cdFxyXG5cdGdldEluZ3JlZGllbnRMaXN0KClcclxuXHR7XHJcblx0XHRsZXQgaTpudW1iZXIgPSAwO1xyXG5cdFx0bGV0IGs6bnVtYmVyID0gMDtcclxuXHRcdHdoaWxlKGsgPCBJTkdSRURJRU5UUy5sZW5ndGgtMSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKElOR1JFRElFTlRTW2tdLkluZ3JlZGllbnQgPT0gSU5HUkVESUVOVFNbaysxXS5JbmdyZWRpZW50KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2hpbGUoaSA8IElOR1JFRElFTlRTW2tdLmluZ3JlZGllbnRDb3VudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmluY3JlbWVudEluZ3JlZGllbnQoaysxKTtcclxuXHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRJTkdSRURJRU5UUy5zcGxpY2UoaywgMSk7XHJcblx0XHRcdFx0aT0wO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChrIDwgSU5HUkVESUVOVFMubGVuZ3RoLTEgJiYgSU5HUkVESUVOVFNba10uSW5ncmVkaWVudCAhPSBJTkdSRURJRU5UU1trKzFdLkluZ3JlZGllbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRrKys7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBJTkdSRURJRU5UUztcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuSW5ncmVkaWVudHMoKVxyXG5cdHtcclxuXHRcdHJldHVybiBJTkdSRURJRU5UUztcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdElOR1JFRElFTlRTLnNwbGljZShpbmRleCwgMSk7XHJcblx0fVxyXG5cclxuXHRpbmNyZW1lbnRJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHRJTkdSRURJRU5UU1tpbmRleF0uaW5ncmVkaWVudENvdW50Kys7XHJcblx0fVxyXG5cclxuXHRkZWNyZW1lbnRJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHRpZihJTkdSRURJRU5UU1tpbmRleF0uaW5ncmVkaWVudENvdW50ID4gMClcclxuXHRcdFx0SU5HUkVESUVOVFNbaW5kZXhdLmluZ3JlZGllbnRDb3VudC0tO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQqIERlbGV0ZXMgZW50aXJlIHJlY2lwZXMgZnJvbSB0aGUgU0hPUFBJTkdfTElTVFxyXG5cdCovXHJcblx0ZGVsZXRlSXRlbShpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0U0hPUFBJTkdfTElTVC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBDbGVhcnMgZW50aXJlIHNob3BwaW5nIGxpc3RcclxuXHQqL1xyXG5cdGNsZWFyUmVjaXBlTGlzdCgpXHJcblx0e1xyXG5cdFx0U0hPUFBJTkdfTElTVC5zcGxpY2UoMCwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckluZ3JlZGllbnRMaXN0KClcclxuXHR7XHJcblx0XHRJTkdSRURJRU5UUy5zcGxpY2UoMCwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGluZ3JlZGllbnQ6IGFueSlcclxuXHR7XHJcblx0XHRsZXQgazpudW1iZXI9MDtcclxuXHRcdGxldCBpOm51bWJlcj0wO1xyXG5cdFx0d2hpbGUoayA8IElOR1JFRElFTlRTLmxlbmd0aClcclxuXHRcdHtcclxuXHRcdFx0aWYoaW5ncmVkaWVudC5JbmdyZWRpZW50ID09IElOR1JFRElFTlRTW2tdLkluZ3JlZGllbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aGlsZShpIDwgaW5ncmVkaWVudC5pbmdyZWRpZW50Q291bnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRJbmdyZWRpZW50KGspO1xyXG5cdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRrKys7XHJcblx0XHR9XHJcblx0XHRJTkdSRURJRU5UUy5wdXNoKGluZ3JlZGllbnQpO1xyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
