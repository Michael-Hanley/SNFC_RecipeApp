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
const ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
const common_1 = require('@angular/common');
let GetRecipeComponent = class GetRecipeComponent {
    constructor(_httpService, _shoppingListService) {
        this._httpService = _httpService;
        this._shoppingListService = _shoppingListService;
        //drop down boostrap req
        this.disabled = false;
        this.status = { isopen: false };
        this.selectedRecipe = false; // Testing if the customer has selected a recipe. 
        this.allergies = ['eggs', 'egg', 'fish', 'milk', 'peanuts', 'shellfish', 'soya', 'wheat', 'soy', 'soy milk', 'egg noodles'];
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
    toggled(open) {
        console.log('Dropdown is now: ', open);
    }
    toggleDropdown($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
};
GetRecipeComponent = __decorate([
    core_1.Component({
        templateUrl: 'src/get-recipe.component/get-recipe.tpl.html',
        directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES],
        providers: [http_service_1.HttpService]
    }), 
    __metadata('design:paramtypes', [http_service_1.HttpService, shopping_list_service_1.ShoppingListService])
], GetRecipeComponent);
exports.GetRecipeComponent = GetRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsd0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFNdEUsZ0NBQW9DLDZCQUE2QixDQUFDLENBQUE7QUFDbEUseUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFRaEQ7SUFZQyxZQUFvQixZQUF5QixFQUNwQyxvQkFBeUM7UUFEOUIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDcEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQVhsRCx3QkFBd0I7UUFDakIsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQW9CLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBS25ELG1CQUFjLEdBQVksS0FBSyxDQUFDLENBQUMsa0RBQWtEO1FBQ25GLGNBQVMsR0FBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUc3RSxDQUFDO0lBRXZEOzs7TUFHRTtJQUNGLGNBQWMsQ0FBQyxDQUFRLEVBQUUsUUFBZ0I7UUFFeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1lBQ0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUE7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGVBQWUsQ0FBQyxLQUFhO1FBRTVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUMvSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0Q7Ozs7TUFJRTtJQUNGLFlBQVk7UUFFWCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzVDLFNBQVMsQ0FFVCxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQ25DLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLFFBQVE7UUFFUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUlNLE9BQU8sQ0FBQyxJQUFZO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFpQjtRQUN0QyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztBQUNKLENBQUM7QUEzRkQ7SUFBQyxnQkFBUyxDQUNUO1FBQ0csV0FBVyxFQUFFLDhDQUE4QztRQUM5RCxVQUFVLEVBQUUsQ0FBQyxtQ0FBbUIsRUFBRSx3QkFBZSxDQUFDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQzs7c0JBQUE7QUFDVywwQkFBa0IscUJBcUY5QixDQUFBIiwiZmlsZSI6ImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UkVDSVBFX0xJU1R9IGZyb20gXCIuLi9tb2NrL3JlY2lwZS1saXN0XCI7XHJcbmltcG9ydCB7Q1VTVE9NRVJJTlBVVH0gZnJvbSBcIi4uL21vY2svY3VzdG9tZXItaW5wdXRcIjtcclxuaW1wb3J0IHtTSE9QUElOR19MSVNUfSBmcm9tIFwiLi4vbW9jay9zaG9wcGluZy1saXN0XCI7XHJcbmltcG9ydCB7c2hvcHBpbmdMaXN0fSBmcm9tIFwiLi4vc2hhcmVkL3Nob3BwaW5nTGlzdFwiO1xyXG5pbXBvcnQgeyBEUk9QRE9XTl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50XHJcbih7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9nZXQtcmVjaXBlLmNvbXBvbmVudC9nZXQtcmVjaXBlLnRwbC5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbRFJPUERPV05fRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0UmVjaXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcdFxyXG5cdC8vZHJvcCBkb3duIGJvb3N0cmFwIHJlcVxyXG5cdHB1YmxpYyBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgXHRwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcblxyXG5cdHJlY2lwZXM6IFJlY2lwZVtdOyAvLyBzYXZlcyB0aGUgYXJyYXkgb2YgUmVjaXBlIG9iamVjdHMgZnJvbSB0aGUgaHR0cCBzZXJ2aWNlLlxyXG5cdGluZGV4OiBudW1iZXI7IC8vIGluZGV4IG9mIHRoZSBzZWxlY3RlZCByZWNpcGVcclxuXHRjdXN0b21lcklucHV0OiBzdHJpbmc7IC8vIFNlYXJjaCB0ZXJtIHRoZSBjdXN0b21lciBoYXMgZW50ZXJlZFxyXG5cdHNlbGVjdGVkUmVjaXBlOiBib29sZWFuID0gZmFsc2U7IC8vIFRlc3RpbmcgaWYgdGhlIGN1c3RvbWVyIGhhcyBzZWxlY3RlZCBhIHJlY2lwZS4gXHJcblx0YWxsZXJnaWVzOiBBcnJheTxhbnk+ID0gWydlZ2dzJywgJ2VnZycsICdmaXNoJywgJ21pbGsnLCAncGVhbnV0cycsICdzaGVsbGZpc2gnLCAnc295YScsICd3aGVhdCcsICdzb3knLCAnc295IG1pbGsnLCAnZWdnIG5vb2RsZXMnXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBcclxuXHRcdHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHsgfVxyXG5cdFxyXG5cdC8qKlx0XHJcblx0KiBjYXB0dXJlcyB0aGUgYXJyYXkgb2YgdGhlIHNwZWNpZmljIHJlY2lwZSB0aGUgdXNlciBoYWQgcGlja2VkIFxyXG5cdCogYW5kIGFsbG93cyB0aGUgZG9tIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgaW5ncmVkaWVudHMgb2YgdGhhdCByZWNpcGUuIFxyXG5cdCovXHJcblx0b25TZWxlY3RSZWNpcGUoaTpudW1iZXIsIHNlbGVjdGVkOmJvb2xlYW4pXHJcblx0e1xyXG5cdFx0aWYodGhpcy5zZWxlY3RlZFJlY2lwZSA9PSB0cnVlICYmIHNlbGVjdGVkID09IHRydWUgJiYgdGhpcy5pbmRleCA9PSBpKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gZmFsc2VcclxuXHRcdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSBzZWxlY3RlZDtcclxuXHRcdHRoaXMuaW5kZXggPSBpO1xyXG5cdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBjYXB0dXJlcyB0aGUgaW5ncmVkaWVudHMgYW5kIHJlY2lwZSBuYW1lIG9mIHRoZSBzZWxlY3RlZCByZWNpcGUgYW5kIHB1c2hlcyBpdFxyXG5cdCogdG8gdGhlIHNob3BwaW5nIGxpc3Qgc2VydmljZS4gVGhpcyBzZXJ2aWNlIHB1c2hlcyB0aGUgYXJyYXkgdG9cclxuXHQqIGxvY2FsIGNhY2hlIHdoZXJlIGl0IGlzIGxhdGVyIHB1bGxlZCBmb3IgdGhlIGluZ3JlZGllbnQgbGlzdCBjb21wb25lbnQuXHJcblx0Ki9cclxuXHRvbkFkZFRvRmF2b3JpdGUoaW5kZXg6IG51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEFsbEl0ZW1zKHtyZWNpcGVOYW1lOnRoaXMucmVjaXBlc1tpbmRleF0uUmVjaXBlLCBJbmdyZWRpZW50OnRoaXMucmVjaXBlc1tpbmRleF0uSW5ncmVkaWVudHN9KTtcclxuXHR9XHJcblxyXG5cdG9uQWRkVG9TaG9wcGluZ0xpc3QoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SW5ncmVkaWVudHModGhpcy5yZWNpcGVzW2luZGV4XS5JbmdyZWRpZW50cyk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogSW50aWFsIHNlYXJjaCBvZiB0aGUgYXJhbmdvIHJlY2lwZSBEQi4gY2FwdHVyZXMgdGhlIHVzZXJzIGVudGVyZWRcclxuXHQqIHNlYXJjaCB0ZXJtIGFuZCBwdXNoZXMgaXQgdG8gdGhlIEh0dHBTZXJ2aWNlLiB3aGljaCByZXR1cm5zIHRoZVxyXG5cdCogcmVzdWx0cyBvZiBhbGwgcmVjaXBlcyBjb250YWluaW5nIHRoYXQgaW5ncmVkaWVudC4gXHJcblx0Ki9cclxuXHRvbkdldFJlY2lwZXMoKSBcclxuXHR7XHJcblx0XHR0aGlzLl9odHRwU2VydmljZS5nZXRQb3N0cyh0aGlzLmN1c3RvbWVySW5wdXQpXHJcblx0XHRcdC5zdWJzY3JpYmVcclxuXHRcdFx0KFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMucmVjaXBlcyA9IHJlc3BvbnNlXHJcblx0XHRcdCk7XHJcblx0XHR0aGlzLmluZGV4ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogQWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHRvIHRoZSBzaG9wcGluZyBsaXN0IGNvbXBvbmVudCBcclxuXHQqIGFuZCBiYWNrIHdpdGhvdXQgbG9zaW5nIHRoZWlyIHByZXZpb3VzbHkgc2VhcmNoZWQgcmVzdWx0cy5cclxuXHQqIGlmIG5vIHNlYXJjaCBoYXMgYmVlbiBjb25kdWN0ZWQsIGl0IHJldHVybnMgYW4gZW1wdHkgYXJyYXkuIFxyXG5cdCovXHJcblx0bmdPbkluaXQoKVxyXG5cdHtcdFxyXG5cdFx0dGhpcy5jdXN0b21lcklucHV0ID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQ3VzdG9tZXJJbnB1dCgpO1xyXG5cdFx0dGhpcy5vbkdldFJlY2lwZXMoKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5TZWxlY3Rpb25UZXN0KCk7XHJcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuU2VsZWN0ZWRSZWNpcGVJbmRleCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlZChvcGVuOmJvb2xlYW4pOnZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcblx0fVxyXG4gXHJcblx0cHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcclxuXHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICBcdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
