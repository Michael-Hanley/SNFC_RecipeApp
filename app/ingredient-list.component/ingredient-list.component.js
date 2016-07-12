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
const common_1 = require("@angular/common");
const common_2 = require("@angular/common");
let IngredientListComponent = class IngredientListComponent {
    constructor(_shoppingListService, _formBuilder) {
        this._shoppingListService = _shoppingListService;
        this._formBuilder = _formBuilder;
        this.tableFlag = false;
        this.item = { name: '', amount: 0 };
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
        let k = this.item.amount;
        this._shoppingListService.addItem({ Ingredient: this.item.name, ingredientCount: k });
    }
    ngOnInit() {
        this.ingredientList = this._shoppingListService.getIngredientList();
        this.myForm = this._formBuilder.group({
            'ingredient': ['', common_2.Validators.required],
            'ingredientCount': ['', common_2.Validators.compose([
                    common_2.Validators.required,
                    greaterZero
                ])],
        });
    }
};
IngredientListComponent = __decorate([
    core_1.Component({
        selector: 'ingredient-list',
        templateUrl: "src/ingredient-list.component/ingredient-list.tpl.html",
    }), 
    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
], IngredientListComponent);
exports.IngredientListComponent = IngredientListComponent;
function greaterZero(control) {
    if (control.value <= 0) {
        return { notEnough: true };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHdDQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBR3RFLHlCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHlCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBUTNDO0lBTUMsWUFBb0Isb0JBQXlDLEVBQVUsWUFBeUI7UUFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBSmhHLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFHdUUsQ0FBQztJQUVyRyxrQkFBa0IsQ0FBQyxLQUFZO1FBRTlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBWTtRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVk7UUFFL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBRVYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVwRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3JDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDMUMsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixXQUFXO2lCQUNWLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDO0FBbEREO0lBQUMsZ0JBQVMsQ0FDVDtRQUNHLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLHdEQUF3RDtLQUN4RSxDQUFDOzsyQkFBQTtBQUNXLCtCQUF1QiwwQkE2Q25DLENBQUE7QUFFRCxxQkFBcUIsT0FBZ0I7SUFDcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUMxQixDQUFDO0FBQ0YsQ0FBQyIsImZpbGUiOiJpbmdyZWRpZW50LWxpc3QuY29tcG9uZW50L2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudFxyXG4oe1xyXG4gICAgc2VsZWN0b3I6ICdpbmdyZWRpZW50LWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic3JjL2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LnRwbC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRpbmdyZWRpZW50TGlzdDogSW5ncmVkaWVudFtdO1xyXG5cdHRhYmxlRmxhZzpib29sZWFuID0gZmFsc2U7XHJcblx0aXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcclxuXHRteUZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IH1cclxuXHJcblx0b25EZWxldGVJbmdyZWRpZW50KGluZGV4Om51bWJlcilcclxuXHR7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUluZ3JlZGllbnQoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0aW5jcmVtZW50SW5ncmVkaWVudChpbmRleDpudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbmNyZW1lbnRJbmdyZWRpZW50KGluZGV4KTtcclxuXHR9XHJcblxyXG5cdGRlY3JlbWVudEluZ3JlZGllbnQoaW5kZXg6bnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVjcmVtZW50SW5ncmVkaWVudChpbmRleCk7XHJcblx0fVxyXG5cclxuXHRvbkNsZWFyTGlzdCgpXHJcblx0e1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5jbGVhckluZ3JlZGllbnRMaXN0KCk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCgpXHJcblx0e1xyXG5cdFx0bGV0IGs6bnVtYmVyID0gdGhpcy5pdGVtLmFtb3VudDtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuYWRkSXRlbSh7SW5ncmVkaWVudDogdGhpcy5pdGVtLm5hbWUsIGluZ3JlZGllbnRDb3VudDoga30pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTphbnkge1xyXG5cdFx0dGhpcy5pbmdyZWRpZW50TGlzdCA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SW5ncmVkaWVudExpc3QoKTtcclxuXHJcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHsgXHJcblx0XHRcdCdpbmdyZWRpZW50JzogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHQnaW5ncmVkaWVudENvdW50JzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG5cdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcblx0XHRcdFx0Z3JlYXRlclplcm9cclxuXHRcdFx0XHRdKV0sXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcclxuXHRpZiAoY29udHJvbC52YWx1ZSA8PSAwKSB7XHJcblx0XHRyZXR1cm4ge25vdEVub3VnaDogdHJ1ZX07XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
