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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHdDQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXRFLHdCQUEyRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBUTVGO0lBS0MsWUFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFIN0QsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUl6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMzQixVQUFVLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDcEYsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVGLGtCQUFrQixDQUFDLEtBQVk7UUFFOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFZO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVc7UUFFVixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckUsQ0FBQztBQUNGLENBQUM7QUEvQ0Q7SUFBQyxnQkFBUyxDQUNUO1FBQ0csUUFBUSxFQUFFLGlCQUFpQjtRQUM5QixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztRQUNuQyxXQUFXLEVBQUUsd0RBQXdEO0tBQ3hFLENBQUM7OzJCQUFBO0FBQ1csK0JBQXVCLDBCQXlDbkMsQ0FBQSIsImZpbGUiOiJpbmdyZWRpZW50LWxpc3QuY29tcG9uZW50L2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnRcclxuKHtcclxuICAgIHNlbGVjdG9yOiAnaW5ncmVkaWVudC1saXN0JyxcclxuXHRkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInNyYy9pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50L2luZ3JlZGllbnQtbGlzdC50cGwuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5ncmVkaWVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0aW5ncmVkaWVudExpc3Q6IEluZ3JlZGllbnRbXTtcclxuXHR0YWJsZUZsYWc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdG15Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLm15Rm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHQnaXRlbU5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG5cdFx0XHQnYW1vdW50JzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFwiXlswLTldKiRcIildKVxyXG5cdFx0fSk7XHJcblx0IH1cclxuXHJcblx0b25EZWxldGVJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUluZ3JlZGllbnQoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0aW5jcmVtZW50SW5ncmVkaWVudChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbmNyZW1lbnRJbmdyZWRpZW50KGluZGV4KTtcclxuXHR9XHJcblxyXG5cdGRlY3JlbWVudEluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVjcmVtZW50SW5ncmVkaWVudChpbmRleCk7XHJcblx0fVxyXG5cclxuXHRvbkNsZWFyTGlzdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5jbGVhckluZ3JlZGllbnRMaXN0KCk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCgpXHJcblx0e1xyXG5cdFx0bGV0IGs6bnVtYmVyID0gdGhpcy5teUZvcm0udmFsdWUuYW1vdW50O1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5hZGRJdGVtKHtJbmdyZWRpZW50OiB0aGlzLm15Rm9ybS52YWx1ZS5pdGVtTmFtZSwgaW5ncmVkaWVudENvdW50OiBrfSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLmluZ3JlZGllbnRMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRJbmdyZWRpZW50TGlzdCgpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
