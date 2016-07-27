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
        console.log(this.allergens[p]);
        this._httpService.saveAllergenInfo(this.allergens[p]);
        this.selectedAllergens = this._httpService.returnAllergenInfo();
        console.log(this.selectedAllergens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsd0NBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFNdEUsZ0NBQW9DLDZCQUE2QixDQUFDLENBQUE7QUFDbEUseUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStELGdCQUFnQixDQUFDLENBQUE7QUFTaEY7SUFpQkMsWUFBb0IsWUFBeUIsRUFDcEMsb0JBQXlDO1FBRDlCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFoQmxELGdDQUFnQztRQUN6QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBb0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFLbkQsbUJBQWMsR0FBWSxLQUFLLENBQUMsQ0FBQyxrREFBa0Q7UUFFbkYsMkJBQTJCO1FBQzNCLGNBQVMsR0FBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQU9qSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMzQixNQUFNLEVBQUUsSUFBSSxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVIOzs7TUFHRTtJQUNGLGNBQWMsQ0FBQyxDQUFRLEVBQUUsUUFBZ0I7UUFFeEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FB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LElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7QUFDSixDQUFDO0FBL0dEO0lBQUMsZ0JBQVMsQ0FDVDtRQUNHLFdBQVcsRUFBRSw4Q0FBOEM7UUFDOUQsVUFBVSxFQUFFLENBQUMsbUNBQW1CLEVBQUUsd0JBQWUsRUFBRSxnQ0FBd0IsQ0FBQztRQUN6RSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7O3NCQUFBO0FBQ1csMEJBQWtCLHFCQXlHOUIsQ0FBQSIsImZpbGUiOiJnZXQtcmVjaXBlLmNvbXBvbmVudC9nZXQtcmVjaXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JFQ0lQRV9MSVNUfSBmcm9tIFwiLi4vbW9jay9yZWNpcGUtbGlzdFwiO1xyXG5pbXBvcnQge0NVU1RPTUVSSU5QVVR9IGZyb20gXCIuLi9tb2NrL2N1c3RvbWVyLWlucHV0XCI7XHJcbmltcG9ydCB7U0hPUFBJTkdfTElTVH0gZnJvbSBcIi4uL21vY2svc2hvcHBpbmctbGlzdFwiO1xyXG5pbXBvcnQge3Nob3BwaW5nTGlzdH0gZnJvbSBcIi4uL3NoYXJlZC9zaG9wcGluZ0xpc3RcIjtcclxuaW1wb3J0IHsgRFJPUERPV05fRElSRUNUSVZFUyB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5cclxuQENvbXBvbmVudFxyXG4oe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS50cGwuaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW0RST1BET1dOX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2V0UmVjaXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcdFxyXG5cdC8vZHJvcGRvd24gYm9vc3RyYXAgcmVxdWlybWVudHMgXHJcblx0cHVibGljIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBcdHB1YmxpYyBzdGF0dXM6e2lzb3Blbjpib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuXHJcblx0cmVjaXBlczogUmVjaXBlW107IC8vIHNhdmVzIHRoZSBhcnJheSBvZiBSZWNpcGUgb2JqZWN0cyBmcm9tIHRoZSBodHRwIHNlcnZpY2UuXHJcblx0aW5kZXg6IG51bWJlcjsgLy8gaW5kZXggb2YgdGhlIHNlbGVjdGVkIHJlY2lwZVxyXG5cdGN1c3RvbWVySW5wdXQ6IHN0cmluZzsgLy8gU2VhcmNoIHRlcm0gdGhlIGN1c3RvbWVyIGhhcyBlbnRlcmVkXHJcblx0c2VsZWN0ZWRSZWNpcGU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gVGVzdGluZyBpZiB0aGUgY3VzdG9tZXIgaGFzIHNlbGVjdGVkIGEgcmVjaXBlLiBcclxuXHJcblx0Ly8gYWxsZXJnaWVzIGZvcm0gZmlsdGVyaW5nXHJcblx0YWxsZXJnZW5zOiBBcnJheTxhbnk+ID0gWydlZ2dzJywgJ2VnZycsICdmaXNoJywgJ21pbGsnLCAncGVhbnV0cycsICdzaGVsbGZpc2gnLCAnc295YScsICd3aGVhdCcsICdzb3knLCAnc295IG1pbGsnLCAnZWdnIG5vb2RsZXMnXTtcclxuXHRteUZvcm06IEZvcm1Hcm91cDtcclxuXHRzZWxlY3RlZEFsbGVyZ2VuczogQXJyYXk8YW55PjtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgXHJcblx0XHRwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7XHJcblx0XHRcdHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0J2l0ZW0nOiBuZXcgRm9ybUNvbnRyb2woWycnXSlcclxuXHRcdFx0fSk7XHJcblx0XHQgfVxyXG5cdFxyXG5cdC8qKlx0XHJcblx0KiBjYXB0dXJlcyB0aGUgYXJyYXkgb2YgdGhlIHNwZWNpZmljIHJlY2lwZSB0aGUgdXNlciBoYWQgcGlja2VkIFxyXG5cdCogYW5kIGFsbG93cyB0aGUgZG9tIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgaW5ncmVkaWVudHMgb2YgdGhhdCByZWNpcGUuIFxyXG5cdCovXHJcblx0b25TZWxlY3RSZWNpcGUoaTpudW1iZXIsIHNlbGVjdGVkOmJvb2xlYW4pXHJcblx0e1xyXG5cdFx0aWYodGhpcy5zZWxlY3RlZFJlY2lwZSA9PSB0cnVlICYmIHNlbGVjdGVkID09IHRydWUgJiYgdGhpcy5pbmRleCA9PSBpKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkUmVjaXBlID0gZmFsc2VcclxuXHRcdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2VsZWN0ZWRSZWNpcGUgPSBzZWxlY3RlZDtcclxuXHRcdHRoaXMuaW5kZXggPSBpO1xyXG5cdFx0dGhpcy5faHR0cFNlcnZpY2Uuc2F2ZVNlbGVjdGVkUmVjaXBlKHRoaXMuaW5kZXgsIHRoaXMuc2VsZWN0ZWRSZWNpcGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZEFsbGVyZ2VucyA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVybkFsbGVyZ2VuSW5mbygpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zZWxlY3RlZEFsbGVyZ2Vucyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIGNhcHR1cmVzIHRoZSBpbmdyZWRpZW50cyBhbmQgcmVjaXBlIG5hbWUgb2YgdGhlIHNlbGVjdGVkIHJlY2lwZSBhbmQgcHVzaGVzIGl0XHJcblx0KiB0byB0aGUgc2hvcHBpbmcgbGlzdCBzZXJ2aWNlLiBUaGlzIHNlcnZpY2UgcHVzaGVzIHRoZSBhcnJheSB0b1xyXG5cdCogbG9jYWwgY2FjaGUgd2hlcmUgaXQgaXMgbGF0ZXIgcHVsbGVkIGZvciB0aGUgaW5ncmVkaWVudCBsaXN0IGNvbXBvbmVudC5cclxuXHQqL1xyXG5cdG9uQWRkVG9GYXZvcml0ZShpbmRleDogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0QWxsSXRlbXMoe3JlY2lwZU5hbWU6dGhpcy5yZWNpcGVzW2luZGV4XS5SZWNpcGUsIEluZ3JlZGllbnQ6dGhpcy5yZWNpcGVzW2luZGV4XS5JbmdyZWRpZW50c30pO1xyXG5cdH1cclxuXHJcblx0b25BZGRUb1Nob3BwaW5nTGlzdChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJbmdyZWRpZW50cyh0aGlzLnJlY2lwZXNbaW5kZXhdLkluZ3JlZGllbnRzKTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBJbnRpYWwgc2VhcmNoIG9mIHRoZSBhcmFuZ28gcmVjaXBlIERCLiBjYXB0dXJlcyB0aGUgdXNlcnMgZW50ZXJlZFxyXG5cdCogc2VhcmNoIHRlcm0gYW5kIHB1c2hlcyBpdCB0byB0aGUgSHR0cFNlcnZpY2UuIHdoaWNoIHJldHVybnMgdGhlXHJcblx0KiByZXN1bHRzIG9mIGFsbCByZWNpcGVzIGNvbnRhaW5pbmcgdGhhdCBpbmdyZWRpZW50LiBcclxuXHQqL1xyXG5cdG9uR2V0UmVjaXBlcygpIFxyXG5cdHtcclxuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBvc3RzKHRoaXMuY3VzdG9tZXJJbnB1dClcclxuXHRcdFx0LnN1YnNjcmliZVxyXG5cdFx0XHQoXHJcblx0XHRcdFx0cmVzcG9uc2UgPT4gdGhpcy5yZWNpcGVzID0gcmVzcG9uc2VcclxuXHRcdFx0KTtcclxuXHRcdHRoaXMuaW5kZXggPSBudWxsO1xyXG5cdH1cclxuXHJcblx0b25BZGRUb0FsbGVyZ2VucyhwOm51bWJlcilcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmFsbGVyZ2Vuc1twXSk7XHJcblx0XHR0aGlzLl9odHRwU2VydmljZS5zYXZlQWxsZXJnZW5JbmZvKHRoaXMuYWxsZXJnZW5zW3BdKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRBbGxlcmdlbnMgPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5BbGxlcmdlbkluZm8oKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRBbGxlcmdlbnMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBBbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgdG8gdGhlIHNob3BwaW5nIGxpc3QgY29tcG9uZW50IFxyXG5cdCogYW5kIGJhY2sgd2l0aG91dCBsb3NpbmcgdGhlaXIgcHJldmlvdXNseSBzZWFyY2hlZCByZXN1bHRzLlxyXG5cdCogaWYgbm8gc2VhcmNoIGhhcyBiZWVuIGNvbmR1Y3RlZCwgaXQgcmV0dXJucyBhbiBlbXB0eSBhcnJheS4gXHJcblx0Ki9cclxuXHRuZ09uSW5pdCgpXHJcblx0e1x0XHJcblx0XHR0aGlzLmN1c3RvbWVySW5wdXQgPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5DdXN0b21lcklucHV0KCk7XHJcblx0XHR0aGlzLm9uR2V0UmVjaXBlcygpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZFJlY2lwZSA9IHRoaXMuX2h0dHBTZXJ2aWNlLnJldHVyblNlbGVjdGlvblRlc3QoKTtcclxuXHRcdHRoaXMuaW5kZXggPSB0aGlzLl9odHRwU2VydmljZS5yZXR1cm5TZWxlY3RlZFJlY2lwZUluZGV4KCk7XHJcblx0XHR0aGlzLnNlbGVjdGVkQWxsZXJnZW5zID0gdGhpcy5faHR0cFNlcnZpY2UucmV0dXJuQWxsZXJnZW5JbmZvKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB0b2dnbGVkKG9wZW46Ym9vbGVhbik6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuXHR9XHJcbiBcclxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xyXG5cdFx0JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gIFx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
