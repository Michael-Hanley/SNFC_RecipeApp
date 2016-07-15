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
        this.selectedAllergens = [];
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
    onAddToAllergens(item) {
        for (let i = 0; i < this.selectedAllergens.length; i++)
            if (this.selectedAllergens[i] == item)
                this.selectedAllergens.slice(i, 0);
            else
                this.selectedAllergens.push(item);
        console.log(this.selectedAllergens[0]);
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
        directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        providers: [http_service_1.HttpService]
    }), 
    __metadata('design:paramtypes', [http_service_1.HttpService, shopping_list_service_1.ShoppingListService])
], GetRecipeComponent);
exports.GetRecipeComponent = GetRecipeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsd0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFNdEUsZ0NBQW9DLDZCQUE2QixDQUFDLENBQUE7QUFDbEUseUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStELGdCQUFnQixDQUFDLENBQUE7QUFTaEY7SUFpQkMsWUFBb0IsWUFBeUIsRUFDcEMsb0JBQXlDO1FBRDlCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFoQmxELGdDQUFnQztRQUN6QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBb0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFLbkQsbUJBQWMsR0FBWSxLQUFLLENBQUMsQ0FBQyxrREFBa0Q7UUFFbkYsMkJBQTJCO1FBQzNCLGNBQVMsR0FBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuSSxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFLL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDM0IsTUFBTSxFQUFFLElBQUksbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztJQUNILENBQUM7SUFFSDs7O01BR0U7SUFDRixjQUFjLENBQUMsQ0FBUSxFQUFFLFFBQWdCO1FBRXhDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLFFBQVEs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SEQ7SUFBQyxnQkFBUyxDQUNUO1FBQ0csV0FBVyxFQUFFLDhDQUE4QztRQUM5RCxVQUFVLEVBQUUsQ0FBQyxtQ0FBbUIsRUFBRSx3QkFBZSxFQUFFLGdDQUF3QixDQUFDO1FBQ3pFLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQzs7c0JBQUE7QUFDVywwQkFBa0IscUJBMEc5QixDQUFBIiwiZmlsZSI6ImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvaHR0cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UkVDSVBFX0xJU1R9IGZyb20gXCIuLi9tb2NrL3JlY2lwZS1saXN0XCI7XHJcbmltcG9ydCB7Q1VTVE9NRVJJTlBVVH0gZnJvbSBcIi4uL21vY2svY3VzdG9tZXItaW5wdXRcIjtcclxuaW1wb3J0IHtTSE9QUElOR19MSVNUfSBmcm9tIFwiLi4vbW9jay9zaG9wcGluZy1saXN0XCI7XHJcbmltcG9ydCB7c2hvcHBpbmdMaXN0fSBmcm9tIFwiLi4vc2hhcmVkL3Nob3BwaW5nTGlzdFwiO1xyXG5pbXBvcnQgeyBEUk9QRE9XTl9ESVJFQ1RJVkVTIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50XHJcbih7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9nZXQtcmVjaXBlLmNvbXBvbmVudC9nZXQtcmVjaXBlLnRwbC5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbRFJPUERPV05fRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZXRSZWNpcGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXRcclxue1x0XHJcblx0Ly9kcm9wZG93biBib29zdHJhcCByZXF1aXJtZW50cyBcclxuXHRwdWJsaWMgZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIFx0cHVibGljIHN0YXR1czp7aXNvcGVuOmJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG5cclxuXHRyZWNpcGVzOiBSZWNpcGVbXTsgLy8gc2F2ZXMgdGhlIGFycmF5IG9mIFJlY2lwZSBvYmplY3RzIGZyb20gdGhlIGh0dHAgc2VydmljZS5cclxuXHRpbmRleDogbnVtYmVyOyAvLyBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgcmVjaXBlXHJcblx0Y3VzdG9tZXJJbnB1dDogc3RyaW5nOyAvLyBTZWFyY2ggdGVybSB0aGUgY3VzdG9tZXIgaGFzIGVudGVyZWRcclxuXHRzZWxlY3RlZFJlY2lwZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBUZXN0aW5nIGlmIHRoZSBjdXN0b21lciBoYXMgc2VsZWN0ZWQgYSByZWNpcGUuIFxyXG5cclxuXHQvLyBhbGxlcmdpZXMgZm9ybSBmaWx0ZXJpbmdcclxuXHRhbGxlcmdlbnM6IEFycmF5PGFueT4gPSBbJ2VnZ3MnLCAnZWdnJywgJ2Zpc2gnLCAnbWlsaycsICdwZWFudXRzJywgJ3NoZWxsZmlzaCcsICdzb3lhJywgJ3doZWF0JywgJ3NveScsICdzb3kgbWlsaycsICdlZ2cgbm9vZGxlcyddO1xyXG5cdG15Rm9ybTogRm9ybUdyb3VwO1xyXG5cdHNlbGVjdGVkQWxsZXJnZW5zOiBBcnJheTxhbnk+PVtdO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBcclxuXHRcdHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcclxuXHRcdFx0dGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHQnaXRlbSc6IG5ldyBGb3JtQ29udHJvbChbJyddKVxyXG5cdFx0XHR9KTtcclxuXHRcdCB9XHJcblx0XHJcblx0LyoqXHRcclxuXHQqIGNhcHR1cmVzIHRoZSBhcnJheSBvZiB0aGUgc3BlY2lmaWMgcmVjaXBlIHRoZSB1c2VyIGhhZCBwaWNrZWQgXHJcblx0KiBhbmQgYWxsb3dzIHRoZSBkb20gdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBpbmdyZWRpZW50cyBvZiB0aGF0IHJlY2lwZS4gXHJcblx0Ki9cclxuXHRvblNlbGVjdFJlY2lwZShpOm51bWJlciwgc2VsZWN0ZWQ6Ym9vbGVhbilcclxuXHR7XHJcblx0XHRpZih0aGlzLnNlbGVjdGVkUmVjaXBlID09IHRydWUgJiYgc2VsZWN0ZWQgPT0gdHJ1ZSAmJiB0aGlzLmluZGV4ID09IGkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLl9odHRwU2VydmljZS5zYXZlU2VsZWN0ZWRSZWNpcGUodGhpcy5pbmRleCwgdGhpcy5zZWxlY3RlZFJlY2lwZSk7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWxlY3RlZFJlY2lwZSA9IHNlbGVjdGVkO1xyXG5cdFx0dGhpcy5pbmRleCA9IGk7XHJcblx0XHR0aGlzLl9odHRwU2VydmljZS5zYXZlU2VsZWN0ZWRSZWNpcGUodGhpcy5pbmRleCwgdGhpcy5zZWxlY3RlZFJlY2lwZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIGNhcHR1cmVzIHRoZSBpbmdyZWRpZW50cyBhbmQgcmVjaXBlIG5hbWUgb2YgdGhlIHNlbGVjdGVkIHJlY2lwZSBhbmQgcHVzaGVzIGl0XHJcblx0KiB0byB0aGUgc2hvcHBpbmcgbGlzdCBzZXJ2aWNlLiBUaGlzIHNlcnZpY2UgcHVzaGVzIHRoZSBhcnJheSB0b1xyXG5cdCogbG9jYWwgY2FjaGUgd2hlcmUgaXQgaXMgbGF0ZXIgcHVsbGVkIGZvciB0aGUgaW5ncmVkaWVudCBsaXN0IGNvbXBvbmVudC5cclxuXHQqL1xyXG5cdG9uQWRkVG9GYXZvcml0ZShpbmRleDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0QWxsSXRlbXMoe3JlY2lwZU5hbWU6dGhpcy5yZWNpcGVzW2luZGV4XS5SZWNpcGUsIEluZ3JlZGllbnQ6dGhpcy5yZWNpcGVzW2luZGV4XS5JbmdyZWRpZW50c30pO1xyXG5cdH1cclxuXHJcblx0b25BZGRUb1Nob3BwaW5nTGlzdChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJbmdyZWRpZW50cyh0aGlzLnJlY2lwZXNbaW5kZXhdLkluZ3JlZGllbnRzKTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBJbnRpYWwgc2VhcmNoIG9mIHRoZSBhcmFuZ28gcmVjaXBlIERCLiBjYXB0dXJlcyB0aGUgdXNlcnMgZW50ZXJlZFxyXG5cdCogc2VhcmNoIHRlcm0gYW5kIHB1c2hlcyBpdCB0byB0aGUgSHR0cFNlcnZpY2UuIHdoaWNoIHJldHVybnMgdGhlXHJcblx0KiByZXN1bHRzIG9mIGFsbCByZWNpcGVzIGNvbnRhaW5pbmcgdGhhdCBpbmdyZWRpZW50LiBcclxuXHQqL1xyXG5cdG9uR2V0UmVjaXBlcygpIFxyXG5cdHtcclxuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBvc3RzKHRoaXMuY3VzdG9tZXJJbnB1dClcclxuXHRcdFx0LnN1YnNjcmliZVxyXG5cdFx0XHQoXHJcblx0XHRcdFx0cmVzcG9uc2UgPT4gdGhpcy5yZWNpcGVzID0gcmVzcG9uc2VcclxuXHRcdFx0KTtcclxuXHRcdHRoaXMuaW5kZXggPSBudWxsO1xyXG5cdH1cclxuXHJcblx0b25BZGRUb0FsbGVyZ2VucyhpdGVtKVxyXG5cdHtcclxuXHRcdFxyXG5cdFx0Zm9yKGxldCBpPTA7IGk8dGhpcy5zZWxlY3RlZEFsbGVyZ2Vucy5sZW5ndGg7aSsrKVxyXG5cdFx0XHRpZih0aGlzLnNlbGVjdGVkQWxsZXJnZW5zW2ldID09IGl0ZW0pXHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEFsbGVyZ2Vucy5zbGljZShpLDApO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEFsbGVyZ2Vucy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZWxlY3RlZEFsbGVyZ2Vuc1swXSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIEFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB0byB0aGUgc2hvcHBpbmcgbGlzdCBjb21wb25lbnQgXHJcblx0KiBhbmQgYmFjayB3aXRob3V0IGxvc2luZyB0aGVpciBwcmV2aW91c2x5IHNlYXJjaGVkIHJlc3VsdHMuXHJcblx0KiBpZiBubyBzZWFyY2ggaGFzIGJlZW4gY29uZHVjdGVkLCBpdCByZXR1cm5zIGFuIGVtcHR5IGFycmF5LiBcclxuXHQqL1xyXG5cdG5nT25Jbml0KClcclxuXHR7XHRcclxuXHRcdHRoaXMuY3VzdG9tZXJJbnB1dCA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVybkN1c3RvbWVySW5wdXQoKTtcclxuXHRcdHRoaXMub25HZXRSZWNpcGVzKCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuU2VsZWN0aW9uVGVzdCgpO1xyXG5cdFx0dGhpcy5pbmRleCA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVyblNlbGVjdGVkUmVjaXBlSW5kZXgoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHRvZ2dsZWQob3Blbjpib29sZWFuKTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG5cdH1cclxuIFxyXG5cdHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XHJcblx0XHQkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
