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
const forms_1 = require("@angular/forms");
let GetRecipeComponent = class GetRecipeComponent {
    constructor(_httpService, _shoppingListService) {
        this._httpService = _httpService;
        this._shoppingListService = _shoppingListService;
        //dropdown boostrap requirments 
        this.disabled = false;
        this.status = { isopen: false };
        this.selectedRecipe = false; // Testing if the customer has selected a recipe. 
        // allergies form filtering
        this.allergens = ['eggs', 'egg', 'fish', 'milk', 'peanuts', 'shellfish', 'soya', 'wheat', 'soy', 'soy milk', 'egg noodles'];
        this.myForm = new forms_1.FormGroup({
            'item': new forms_1.FormControl([''])
        });
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
        this.selectedAllergens = this._httpService.returnAllergenInfo();
        console.log(this.selectedAllergens);
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
    onAddToAllergens(p) {
        this._httpService.saveAllergenInfo(this.allergens[p]);
        this.selectedAllergens = this._httpService.returnAllergenInfo();
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
        this.selectedAllergens = this._httpService.returnAllergenInfo();
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
        directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        providers: [http_service_1.HttpService]
    }), 
    __metadata('design:paramtypes', [http_service_1.HttpService, shopping_list_service_1.ShoppingListService])
], GetRecipeComponent);
exports.GetRecipeComponent = GetRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsd0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFNdEUsZ0NBQW9DLDZCQUE2QixDQUFDLENBQUE7QUFDbEUseUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStELGdCQUFnQixDQUFDLENBQUE7QUFTaEY7SUFpQkMsWUFBb0IsWUFBeUIsRUFBVSxvQkFBeUM7UUFBNUUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBZmhHLGdDQUFnQztRQUN6QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBb0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFLbkQsbUJBQWMsR0FBWSxLQUFLLENBQUMsQ0FBQyxrREFBa0Q7UUFFbkYsMkJBQTJCO1FBQzNCLGNBQVMsR0FBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQU1sSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMzQixNQUFNLEVBQUUsSUFBSSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7TUFHRTtJQUNGLGNBQWMsQ0FBQyxDQUFRLEVBQUUsUUFBZ0I7UUFFeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJ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QixFQUFFLHdCQUFlLEVBQUUsZ0NBQXdCLENBQUM7UUFDekUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUMzQixDQUFDOztzQkFBQTtBQUNXLDBCQUFrQixxQkFzRzlCLENBQUEiLCJmaWxlIjoiZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSRUNJUEVfTElTVH0gZnJvbSBcIi4uL21vY2svcmVjaXBlLWxpc3RcIjtcclxuaW1wb3J0IHtDVVNUT01FUklOUFVUfSBmcm9tIFwiLi4vbW9jay9jdXN0b21lci1pbnB1dFwiO1xyXG5pbXBvcnQge1NIT1BQSU5HX0xJU1R9IGZyb20gXCIuLi9tb2NrL3Nob3BwaW5nLWxpc3RcIjtcclxuaW1wb3J0IHtzaG9wcGluZ0xpc3R9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmdMaXN0XCI7XHJcbmltcG9ydCB7IERST1BET1dOX0RJUkVDVElWRVMgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnRcclxuKHtcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2dldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUudHBsLmh0bWwnLFxyXG5cdGRpcmVjdGl2ZXM6IFtEUk9QRE9XTl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdldFJlY2lwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHRcclxuXHQvL2Ryb3Bkb3duIGJvb3N0cmFwIHJlcXVpcm1lbnRzIFxyXG5cdHB1YmxpYyBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgXHRwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcblxyXG5cdHJlY2lwZXM6IFJlY2lwZVtdOyAvLyBzYXZlcyB0aGUgYXJyYXkgb2YgUmVjaXBlIG9iamVjdHMgZnJvbSB0aGUgaHR0cCBzZXJ2aWNlLlxyXG5cdGluZGV4OiBudW1iZXI7IC8vIGluZGV4IG9mIHRoZSBzZWxlY3RlZCByZWNpcGVcclxuXHRjdXN0b21lcklucHV0OiBzdHJpbmc7IC8vIFNlYXJjaCB0ZXJtIHRoZSBjdXN0b21lciBoYXMgZW50ZXJlZFxyXG5cdHNlbGVjdGVkUmVjaXBlOiBib29sZWFuID0gZmFsc2U7IC8vIFRlc3RpbmcgaWYgdGhlIGN1c3RvbWVyIGhhcyBzZWxlY3RlZCBhIHJlY2lwZS4gXHJcblxyXG5cdC8vIGFsbGVyZ2llcyBmb3JtIGZpbHRlcmluZ1xyXG5cdGFsbGVyZ2VuczogQXJyYXk8YW55PiA9IFsnZWdncycsICdlZ2cnLCAnZmlzaCcsICdtaWxrJywgJ3BlYW51dHMnLCAnc2hlbGxmaXNoJywgJ3NveWEnLCAnd2hlYXQnLCAnc295JywgJ3NveSBtaWxrJywgJ2VnZyBub29kbGVzJ107XHJcblx0bXlGb3JtOiBGb3JtR3JvdXA7XHJcblx0c2VsZWN0ZWRBbGxlcmdlbnM6IEFycmF5PGFueT47XHJcblxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcclxuXHRcdHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdCdpdGVtJzogbmV3IEZvcm1Db250cm9sKFsnJ10pXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHRcclxuXHQqIGNhcHR1cmVzIHRoZSBhcnJheSBvZiB0aGUgc3BlY2lmaWMgcmVjaXBlIHRoZSB1c2VyIGhhZCBwaWNrZWQgXHJcblx0KiBhbmQgYWxsb3dzIHRoZSBkb20gdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBpbmdyZWRpZW50cyBvZiB0aGF0IHJlY2lwZS4gXHJcblx0Ki9cclxuXHRvblNlbGVjdFJlY2lwZShpOm51bWJlciwgc2VsZWN0ZWQ6Ym9vbGVhbilcclxuXHR7XHJcblx0XHRpZih0aGlzLnNlbGVjdGVkUmVjaXBlID09IHRydWUgJiYgc2VsZWN0ZWQgPT0gdHJ1ZSAmJiB0aGlzLmluZGV4ID09IGkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLl9odHRwU2VydmljZS5zYXZlU2VsZWN0ZWRSZWNpcGUodGhpcy5pbmRleCwgdGhpcy5zZWxlY3RlZFJlY2lwZSk7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWxlY3RlZFJlY2lwZSA9IHNlbGVjdGVkO1xyXG5cdFx0dGhpcy5pbmRleCA9IGk7XHJcblx0XHR0aGlzLl9odHRwU2VydmljZS5zYXZlU2VsZWN0ZWRSZWNpcGUodGhpcy5pbmRleCwgdGhpcy5zZWxlY3RlZFJlY2lwZSk7XHJcblx0XHR0aGlzLnNlbGVjdGVkQWxsZXJnZW5zID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQWxsZXJnZW5JbmZvKCk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkQWxsZXJnZW5zKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogY2FwdHVyZXMgdGhlIGluZ3JlZGllbnRzIGFuZCByZWNpcGUgbmFtZSBvZiB0aGUgc2VsZWN0ZWQgcmVjaXBlIGFuZCBwdXNoZXMgaXRcclxuXHQqIHRvIHRoZSBzaG9wcGluZyBsaXN0IHNlcnZpY2UuIFRoaXMgc2VydmljZSBwdXNoZXMgdGhlIGFycmF5IHRvXHJcblx0KiBsb2NhbCBjYWNoZSB3aGVyZSBpdCBpcyBsYXRlciBwdWxsZWQgZm9yIHRoZSBpbmdyZWRpZW50IGxpc3QgY29tcG9uZW50LlxyXG5cdCovXHJcblx0b25BZGRUb0Zhdm9yaXRlKGluZGV4OiBudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRBbGxJdGVtcyh7cmVjaXBlTmFtZTp0aGlzLnJlY2lwZXNbaW5kZXhdLlJlY2lwZSwgSW5ncmVkaWVudDp0aGlzLnJlY2lwZXNbaW5kZXhdLkluZ3JlZGllbnRzfSk7XHJcblx0fVxyXG5cclxuXHRvbkFkZFRvU2hvcHBpbmdMaXN0KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluc2VydEluZ3JlZGllbnRzKHRoaXMucmVjaXBlc1tpbmRleF0uSW5ncmVkaWVudHMpO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIEludGlhbCBzZWFyY2ggb2YgdGhlIGFyYW5nbyByZWNpcGUgREIuIGNhcHR1cmVzIHRoZSB1c2VycyBlbnRlcmVkXHJcblx0KiBzZWFyY2ggdGVybSBhbmQgcHVzaGVzIGl0IHRvIHRoZSBIdHRwU2VydmljZS4gd2hpY2ggcmV0dXJucyB0aGVcclxuXHQqIHJlc3VsdHMgb2YgYWxsIHJlY2lwZXMgY29udGFpbmluZyB0aGF0IGluZ3JlZGllbnQuIFxyXG5cdCovXHJcblx0b25HZXRSZWNpcGVzKCkgXHJcblx0e1xyXG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuZ2V0UG9zdHModGhpcy5jdXN0b21lcklucHV0KVxyXG5cdFx0XHQuc3Vic2NyaWJlXHJcblx0XHRcdChcclxuXHRcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlY2lwZXMgPSByZXNwb25zZVxyXG5cdFx0XHQpO1xyXG5cdFx0dGhpcy5pbmRleCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRvbkFkZFRvQWxsZXJnZW5zKHA6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLnNhdmVBbGxlcmdlbkluZm8odGhpcy5hbGxlcmdlbnNbcF0pO1xyXG5cdFx0dGhpcy5zZWxlY3RlZEFsbGVyZ2VucyA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVybkFsbGVyZ2VuSW5mbygpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBBbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgdG8gdGhlIHNob3BwaW5nIGxpc3QgY29tcG9uZW50IFxyXG5cdCogYW5kIGJhY2sgd2l0aG91dCBsb3NpbmcgdGhlaXIgcHJldmlvdXNseSBzZWFyY2hlZCByZXN1bHRzLlxyXG5cdCogaWYgbm8gc2VhcmNoIGhhcyBiZWVuIGNvbmR1Y3RlZCwgaXQgcmV0dXJucyBhbiBlbXB0eSBhcnJheS4gXHJcblx0Ki9cclxuXHRuZ09uSW5pdCgpXHJcblx0e1x0XHJcblx0XHR0aGlzLmN1c3RvbWVySW5wdXQgPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5DdXN0b21lcklucHV0KCk7XHJcblx0XHR0aGlzLm9uR2V0UmVjaXBlcygpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZFJlY2lwZSA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVyblNlbGVjdGlvblRlc3QoKTtcclxuXHRcdHRoaXMuaW5kZXggPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5TZWxlY3RlZFJlY2lwZUluZGV4KCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkQWxsZXJnZW5zID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQWxsZXJnZW5JbmZvKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0b2dnbGVkKG9wZW46Ym9vbGVhbik6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuXHR9XHJcbiBcclxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xyXG5cdFx0JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gIFx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
