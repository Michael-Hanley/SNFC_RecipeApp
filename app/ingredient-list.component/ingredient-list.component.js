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
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var IngredientListComponent = (function () {
    function IngredientListComponent(_shoppingListService, _formBuilder) {
        this._shoppingListService = _shoppingListService;
        this._formBuilder = _formBuilder;
        this.tableFlag = false;
        this.item = { name: '', amount: 0 };
    }
    IngredientListComponent.prototype.onDeleteIngredient = function (index) {
        this._shoppingListService.deleteIngredient(index);
    };
    IngredientListComponent.prototype.incrementIngredient = function (index) {
        this._shoppingListService.incrementIngredient(index);
    };
    IngredientListComponent.prototype.decrementIngredient = function (index) {
        this._shoppingListService.decrementIngredient(index);
    };
    IngredientListComponent.prototype.onClearList = function () {
        this._shoppingListService.clearIngredientList();
    };
    IngredientListComponent.prototype.onSubmit = function () {
        var k = this.item.amount;
        this._shoppingListService.addItem({ Ingredient: this.item.name, ingredientCount: k });
    };
    IngredientListComponent.prototype.ngOnInit = function () {
        this.ingredientList = this._shoppingListService.getIngredientList();
        this.myForm = this._formBuilder.group({
            'ingredient': ['', common_2.Validators.required],
            'ingredientCount': ['', common_2.Validators.compose([
                    common_2.Validators.required,
                    greaterZero
                ])],
        });
    };
    IngredientListComponent = __decorate([
        core_1.Component({
            selector: 'ingredient-list',
            templateUrl: "src/ingredient-list.component/ingredient-list.tpl.html",
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
    ], IngredientListComponent);
    return IngredientListComponent;
}());
exports.IngredientListComponent = IngredientListComponent;
function greaterZero(control) {
    if (control.value <= 0) {
        return { notEnough: true };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHNDQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBR3RFLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBUTNDO0lBTUMsaUNBQW9CLG9CQUF5QyxFQUFVLFlBQXlCO1FBQTVFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUpoRyxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO0lBR3VFLENBQUM7SUFFckcsb0RBQWtCLEdBQWxCLFVBQW1CLEtBQVk7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxxREFBbUIsR0FBbkIsVUFBb0IsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHFEQUFtQixHQUFuQixVQUFvQixLQUFZO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNyQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzFDLG1CQUFVLENBQUMsUUFBUTtvQkFDbkIsV0FBVztpQkFDVixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBakRGO1FBQUMsZ0JBQVMsQ0FDVDtZQUNHLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHdEQUF3RDtTQUN4RSxDQUFDOzsrQkFBQTtJQThDRiw4QkFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE3Q1ksK0JBQXVCLDBCQTZDbkMsQ0FBQTtBQUVELHFCQUFxQixPQUFnQjtJQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzFCLENBQUM7QUFDRixDQUFDIiwiZmlsZSI6ImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcclxuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50XHJcbih7XHJcbiAgICBzZWxlY3RvcjogJ2luZ3JlZGllbnQtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJzcmMvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC9pbmdyZWRpZW50LWxpc3QudHBsLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZ3JlZGllbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdGluZ3JlZGllbnRMaXN0OiBJbmdyZWRpZW50W107XHJcblx0dGFibGVGbGFnOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xyXG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuXHRvbkRlbGV0ZUluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSW5ncmVkaWVudChpbmRleCk7XHJcblx0fVxyXG5cclxuXHRpbmNyZW1lbnRJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluY3JlbWVudEluZ3JlZGllbnQoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0ZGVjcmVtZW50SW5ncmVkaWVudChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWNyZW1lbnRJbmdyZWRpZW50KGluZGV4KTtcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXJMaXN0KClcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmNsZWFySW5ncmVkaWVudExpc3QoKTtcclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KClcclxuXHR7XHJcblx0XHRsZXQgazpudW1iZXIgPSB0aGlzLml0ZW0uYW1vdW50O1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5hZGRJdGVtKHtJbmdyZWRpZW50OiB0aGlzLml0ZW0ubmFtZSwgaW5ncmVkaWVudENvdW50OiBrfSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRJbmdyZWRpZW50TGlzdCgpO1xyXG5cclxuXHRcdHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoeyBcclxuXHRcdFx0J2luZ3JlZGllbnQnOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdCdpbmdyZWRpZW50Q291bnQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcblx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuXHRcdFx0XHRncmVhdGVyWmVyb1xyXG5cdFx0XHRcdF0pXSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ3JlYXRlclplcm8oY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG5cdGlmIChjb250cm9sLnZhbHVlIDw9IDApIHtcclxuXHRcdHJldHVybiB7bm90RW5vdWdoOiB0cnVlfTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
