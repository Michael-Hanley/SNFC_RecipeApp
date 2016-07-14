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
const shopping_list_service_1 = require("../services/shopping-list.service");
const forms_1 = require("@angular/forms");
let IngredientListComponent = class IngredientListComponent {
    constructor(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
        this.tableFlag = false;
        this.myForm = new forms_1.FormGroup({
            'itemName': new forms_1.FormControl('', forms_1.Validators.required),
            'amount': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("^[0-9]*$")])
        });
    }
    onDeleteIngredient(index) {
        this._shoppingListService.deleteIngredient(index);
    }
    incrementIngredient(index) {
        this._shoppingListService.incrementIngredient(index);
    }
    decrementIngredient(index) {
        this._shoppingListService.decrementIngredient(index);
    }
    onClearList() {
        this._shoppingListService.clearIngredientList();
    }
    onSubmit() {
        console.log(this.myForm.value.itemName);
        let k = this.myForm.value.amount;
        this._shoppingListService.addItem({ Ingredient: this.myForm.value.itemName, ingredientCount: k });
    }
    ngOnInit() {
        this.ingredientList = this._shoppingListService.getIngredientList();
    }
};
IngredientListComponent = __decorate([
    core_1.Component({
        selector: 'ingredient-list',
        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
        templateUrl: "src/ingredient-list.component/ingredient-list.tpl.html",
    }), 
    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
], IngredientListComponent);
exports.IngredientListComponent = IngredientListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHdDQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXRFLHdCQUEyRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBUTVGO0lBS0MsWUFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFIN0QsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUl6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMzQixVQUFVLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDcEYsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVGLGtCQUFrQixDQUFDLEtBQVk7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFZO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0FBQ0YsQ0FBQztBQWhERDtJQUFDLGdCQUFTLENBQ1Q7UUFDRyxRQUFRLEVBQUUsaUJBQWlCO1FBQzlCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1FBQ25DLFdBQVcsRUFBRSx3REFBd0Q7S0FDeEUsQ0FBQzs7MkJBQUE7QUFDVywrQkFBdUIsMEJBMENuQyxDQUFBIiwiZmlsZSI6ImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudFxyXG4oe1xyXG4gICAgc2VsZWN0b3I6ICdpbmdyZWRpZW50LWxpc3QnLFxyXG5cdGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic3JjL2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LnRwbC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRpbmdyZWRpZW50TGlzdDogSW5ncmVkaWVudFtdO1xyXG5cdHRhYmxlRmxhZzpib29sZWFuID0gZmFsc2U7XHJcblx0bXlGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcclxuXHRcdHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdCdpdGVtTmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHRcdCdhbW91bnQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oXCJeWzAtOV0qJFwiKV0pXHJcblx0XHR9KTtcclxuXHQgfVxyXG5cclxuXHRvbkRlbGV0ZUluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSW5ncmVkaWVudChpbmRleCk7XHJcblx0fVxyXG5cclxuXHRpbmNyZW1lbnRJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmluY3JlbWVudEluZ3JlZGllbnQoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0ZGVjcmVtZW50SW5ncmVkaWVudChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWNyZW1lbnRJbmdyZWRpZW50KGluZGV4KTtcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXJMaXN0KClcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmNsZWFySW5ncmVkaWVudExpc3QoKTtcclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KClcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZS5pdGVtTmFtZSk7XHJcblx0XHRsZXQgazpudW1iZXIgPSB0aGlzLm15Rm9ybS52YWx1ZS5hbW91bnQ7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmFkZEl0ZW0oe0luZ3JlZGllbnQ6IHRoaXMubXlGb3JtLnZhbHVlLml0ZW1OYW1lLCBpbmdyZWRpZW50Q291bnQ6IGt9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6YW55IHtcclxuXHRcdHRoaXMuaW5ncmVkaWVudExpc3QgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEluZ3JlZGllbnRMaXN0KCk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
