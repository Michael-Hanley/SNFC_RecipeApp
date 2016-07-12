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
const shopping_list_1 = require("../mock/shopping-list");
const ingredient_list_1 = require("../mock/ingredient-list");
let ShoppingListService = class ShoppingListService {
    /**
    * appends the selected ingredients onto the end of the array.
    */
    insertAllItems(Items) {
        let k = 0;
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
    }
    insertIngredients(ingredients) {
        let k = 0;
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
    }
    /**
    * returns shopping list from local  storage.
    */
    getAllItems() {
        return shopping_list_1.SHOPPING_LIST;
    }
    /**
    * returns the SHOPPING_LIST after duplicate recipes are deleted
    */
    getShoppingList() {
        return shopping_list_1.SHOPPING_LIST;
    }
    getIngredientList() {
        let i = 0;
        let k = 0;
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
    }
    returnIngredients() {
        return ingredient_list_1.INGREDIENTS;
    }
    deleteIngredient(index) {
        ingredient_list_1.INGREDIENTS.splice(index, 1);
    }
    incrementIngredient(index) {
        ingredient_list_1.INGREDIENTS[index].ingredientCount++;
    }
    decrementIngredient(index) {
        if (ingredient_list_1.INGREDIENTS[index].ingredientCount > 0)
            ingredient_list_1.INGREDIENTS[index].ingredientCount--;
    }
    /**
    * Deletes entire recipes from the SHOPPING_LIST
    */
    deleteItem(index) {
        shopping_list_1.SHOPPING_LIST.splice(index, 1);
    }
    /**
    * Clears entire shopping list
    */
    clearRecipeList() {
        shopping_list_1.SHOPPING_LIST.splice(0, 1000);
    }
    clearIngredientList() {
        ingredient_list_1.INGREDIENTS.splice(0, 1000);
    }
    addItem(ingredient) {
        let k = 0;
        let i = 0;
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
    }
};
ShoppingListService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ShoppingListService);
exports.ShoppingListService = ShoppingListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGdDQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBSXBELGtDQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBR3BEO0lBRUM7O01BRUU7SUFDRixjQUFjLENBQUMsS0FBbUI7UUFFakMsSUFBSSxDQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsQ0FBQSxDQUFDLDZCQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQzVCLENBQUM7WUFDQSw2QkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLDZCQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQ2pDLENBQUM7WUFDQSxHQUNBLENBQUM7Z0JBQ0EsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSw2QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNuRCxDQUFDO29CQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQztnQkFDRCxJQUFJO29CQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxRQUFNLENBQUMsR0FBRyw2QkFBYSxDQUFDLE1BQU0sRUFBRTtZQUNqQyw2QkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsNkJBQWEsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUMsQ0FBQztZQUU5QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJO2dCQUNILE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUF1QjtRQUV4QyxJQUFJLENBQUMsR0FBUSxDQUFDLENBQUM7UUFDZixPQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUM1QixDQUFDO1lBQ0EsNkJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFBO1lBQ2xFLENBQUMsRUFBRSxDQUFDO1FBQ0wsQ0FBQztRQUNELDZCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUM7WUFFNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSTtnQkFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Q7O01BRUU7SUFDRixXQUFXO1FBRVYsTUFBTSxDQUFDLDZCQUFhLENBQUM7SUFDdEIsQ0FBQztJQUNEOztNQUVFO0lBQ0YsZUFBZTtRQUVkLE1BQU0sQ0FBQyw2QkFBYSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7UUFFaEIsSUFBSSxDQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFVLENBQUMsQ0FBQztRQUNqQixPQUFNLENBQUMsR0FBRyw2QkFBVyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQzlCLENBQUM7WUFDQSxFQUFFLENBQUMsQ0FBQyw2QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSw2QkFBVyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDN0QsQ0FBQztnQkFDQSxPQUFNLENBQUMsR0FBRyw2QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFDeEMsQ0FBQztvQkFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixDQUFDLEVBQUUsQ0FBQTtnQkFDSixDQUFDO2dCQUNELDZCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsNkJBQVcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLDZCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLDZCQUFXLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUN6RixDQUFDO2dCQUNBLENBQUMsRUFBRSxDQUFDO1lBQ0wsQ0FBQztRQUNGLENBQUM7UUFDRCxNQUFNLENBQUMsNkJBQVcsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUJBQWlCO1FBRWhCLE1BQU0sQ0FBQyw2QkFBVyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFZO1FBRTVCLDZCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQiw2QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFZO1FBRS9CLEVBQUUsQ0FBQSxDQUFDLDZCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUN6Qyw2QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7TUFFRTtJQUNGLFVBQVUsQ0FBQyxLQUFZO1FBRXRCLDZCQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O01BRUU7SUFDRixlQUFlO1FBRWQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQkFBbUI7UUFFbEIsNkJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQUMsVUFBZTtRQUV0QixJQUFJLENBQUMsR0FBUSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsR0FBUSxDQUFDLENBQUM7UUFDZixPQUFNLENBQUMsR0FBRyw2QkFBVyxDQUFDLE1BQU0sRUFDNUIsQ0FBQztZQUNBLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksNkJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDdEQsQ0FBQztnQkFDQSxPQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsZUFBZSxFQUNwQyxDQUFDO29CQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUFFLENBQUE7Z0JBQ0osQ0FBQztnQkFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztZQUNELENBQUMsRUFBRSxDQUFDO1FBQ0wsQ0FBQztRQUNELDZCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7QUFFRixDQUFDO0FBNUpEO0lBQUMsaUJBQVUsRUFBRTs7dUJBQUE7QUFDQSwyQkFBbUIsc0JBMkovQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U0hPUFBJTkdfTElTVH0gZnJvbSBcIi4uL21vY2svc2hvcHBpbmctbGlzdFwiO1xyXG5pbXBvcnQge3Nob3BwaW5nTGlzdH0gZnJvbSBcIi4uL3NoYXJlZC9zaG9wcGluZ0xpc3RcIjtcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7SU5HUkVESUVOVFN9IGZyb20gXCIuLi9tb2NrL2luZ3JlZGllbnQtbGlzdFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0U2VydmljZSBcclxue1xyXG5cdC8qKlxyXG5cdCogYXBwZW5kcyB0aGUgc2VsZWN0ZWQgaW5ncmVkaWVudHMgb250byB0aGUgZW5kIG9mIHRoZSBhcnJheS4gXHJcblx0Ki9cclxuXHRpbnNlcnRBbGxJdGVtcyhJdGVtczogc2hvcHBpbmdMaXN0KVxyXG5cdHtcclxuXHRcdGxldCBrOm51bWJlciA9IDA7XHJcblx0XHRpZihTSE9QUElOR19MSVNUW2tdID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdFNIT1BQSU5HX0xJU1QucHVzaChJdGVtcyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKFNIT1BQSU5HX0xJU1Rba10gIT0gbnVsbClcdFxyXG5cdFx0e1xyXG5cdFx0XHRkb1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYoSXRlbXMucmVjaXBlTmFtZSA9PSBTSE9QUElOR19MSVNUW2tdLnJlY2lwZU5hbWUpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaysrO1xyXG5cdFx0XHR9d2hpbGUoayA8IFNIT1BQSU5HX0xJU1QubGVuZ3RoKTtcclxuXHRcdFx0U0hPUFBJTkdfTElTVC5wdXNoKEl0ZW1zKTtcclxuXHRcdH1cclxuXHJcblx0XHRTSE9QUElOR19MSVNULnNvcnQoZnVuY3Rpb24oYSxiKSBcclxuXHRcdHtcclxuXHRcdFx0aWYgKGEucmVjaXBlTmFtZSA8IGIucmVjaXBlTmFtZSlcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKGEucmVjaXBlTmFtZSA+IGIucmVjaXBlTmFtZSlcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aW5zZXJ0SW5ncmVkaWVudHMoaW5ncmVkaWVudHM6IEFycmF5PGFueT4pXHJcblx0e1xyXG5cdFx0bGV0IGs6bnVtYmVyPTA7XHJcblx0XHR3aGlsZShrIDwgaW5ncmVkaWVudHMubGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRJTkdSRURJRU5UUy5wdXNoKHtJbmdyZWRpZW50OiBpbmdyZWRpZW50c1trXSwgaW5ncmVkaWVudENvdW50OiAxfSlcclxuXHRcdFx0aysrO1xyXG5cdFx0fVxyXG5cdFx0SU5HUkVESUVOVFMuc29ydChmdW5jdGlvbihhLGIpIFxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYS5JbmdyZWRpZW50IDwgYi5JbmdyZWRpZW50KVxyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAoYS5JbmdyZWRpZW50ID4gYi5JbmdyZWRpZW50KVxyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyBzaG9wcGluZyBsaXN0IGZyb20gbG9jYWwgIHN0b3JhZ2UuXHJcblx0Ki9cclxuXHRnZXRBbGxJdGVtcygpXHJcblx0e1xyXG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1Q7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyB0aGUgU0hPUFBJTkdfTElTVCBhZnRlciBkdXBsaWNhdGUgcmVjaXBlcyBhcmUgZGVsZXRlZFxyXG5cdCovXHJcblx0Z2V0U2hvcHBpbmdMaXN0KClcclxuXHR7XHJcblx0XHRyZXR1cm4gU0hPUFBJTkdfTElTVDtcclxuXHR9XHJcblx0XHJcblx0Z2V0SW5ncmVkaWVudExpc3QoKVxyXG5cdHtcclxuXHRcdGxldCBpOm51bWJlciA9IDA7XHJcblx0XHRsZXQgazpudW1iZXIgPSAwO1xyXG5cdFx0d2hpbGUoayA8IElOR1JFRElFTlRTLmxlbmd0aC0xKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoSU5HUkVESUVOVFNba10uSW5ncmVkaWVudCA9PSBJTkdSRURJRU5UU1trKzFdLkluZ3JlZGllbnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aGlsZShpIDwgSU5HUkVESUVOVFNba10uaW5ncmVkaWVudENvdW50KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50SW5ncmVkaWVudChrKzEpO1xyXG5cdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdElOR1JFRElFTlRTLnNwbGljZShrLCAxKTtcclxuXHRcdFx0XHRpPTA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGsgPCBJTkdSRURJRU5UUy5sZW5ndGgtMSAmJiBJTkdSRURJRU5UU1trXS5JbmdyZWRpZW50ICE9IElOR1JFRElFTlRTW2srMV0uSW5ncmVkaWVudClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGsrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIElOR1JFRElFTlRTO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm5JbmdyZWRpZW50cygpXHJcblx0e1xyXG5cdFx0cmV0dXJuIElOR1JFRElFTlRTO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlSW5ncmVkaWVudChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0SU5HUkVESUVOVFMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblxyXG5cdGluY3JlbWVudEluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdElOR1JFRElFTlRTW2luZGV4XS5pbmdyZWRpZW50Q291bnQrKztcclxuXHR9XHJcblxyXG5cdGRlY3JlbWVudEluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdGlmKElOR1JFRElFTlRTW2luZGV4XS5pbmdyZWRpZW50Q291bnQgPiAwKVxyXG5cdFx0XHRJTkdSRURJRU5UU1tpbmRleF0uaW5ncmVkaWVudENvdW50LS07XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCogRGVsZXRlcyBlbnRpcmUgcmVjaXBlcyBmcm9tIHRoZSBTSE9QUElOR19MSVNUXHJcblx0Ki9cclxuXHRkZWxldGVJdGVtKGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHRTSE9QUElOR19MSVNULnNwbGljZShpbmRleCwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIENsZWFycyBlbnRpcmUgc2hvcHBpbmcgbGlzdFxyXG5cdCovXHJcblx0Y2xlYXJSZWNpcGVMaXN0KClcclxuXHR7XHJcblx0XHRTSE9QUElOR19MSVNULnNwbGljZSgwLCAxMDAwKTtcclxuXHR9XHJcblxyXG5cdGNsZWFySW5ncmVkaWVudExpc3QoKVxyXG5cdHtcclxuXHRcdElOR1JFRElFTlRTLnNwbGljZSgwLCAxMDAwKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oaW5ncmVkaWVudDogYW55KVxyXG5cdHtcclxuXHRcdGxldCBrOm51bWJlcj0wO1xyXG5cdFx0bGV0IGk6bnVtYmVyPTA7XHJcblx0XHR3aGlsZShrIDwgSU5HUkVESUVOVFMubGVuZ3RoKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihpbmdyZWRpZW50LkluZ3JlZGllbnQgPT0gSU5HUkVESUVOVFNba10uSW5ncmVkaWVudClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdoaWxlKGkgPCBpbmdyZWRpZW50LmluZ3JlZGllbnRDb3VudClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmluY3JlbWVudEluZ3JlZGllbnQoayk7XHJcblx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGsrKztcclxuXHRcdH1cclxuXHRcdElOR1JFRElFTlRTLnB1c2goaW5ncmVkaWVudCk7XHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
