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
const router_1 = require('@angular/router');
const favorite_recipe_1 = require('./favorite-recipe/favorite-recipe');
const ingredient_list_component_1 = require("./ingredient-list.component/ingredient-list.component");
const get_recipe_component_1 = require("./get-recipe.component/get-recipe.component");
const signup_component_1 = require("./signup.component/signup.component");
const login_component_1 = require("./login.component/login.component");
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        directives: [router_1.ROUTER_DIRECTIVES],
        precompile: [favorite_recipe_1.FavoriteRecipeComponent, ingredient_list_component_1.IngredientListComponent, get_recipe_component_1.GetRecipeComponent,
            signup_component_1.SignupComponent, login_component_1.LoginComponent],
        template: `
	<img src="./assets/logo/snfc_circle_logo.jpg" height="100" width="100" class="top-spacer logo"> 	
		<header>
			<nav class="navbar">
				<div class="container-fluid">
					<div class="navbar-header">
					</div>
					<ul class="nav navbar-nav">
						<li><a [routerLink]="['recipes']">Recipes</a></li>
						<li><a [routerLink]="['favorite-recipes']">Favorite Recipes</a></li> 
						<li><a [routerLink]="['ingredient-list']">Shopping List</a></li> 
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a [routerLink]="['signup']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
						<li><a [routerLink]="['login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
					</ul>
				</div>
			</nav>
		</header>
	<br>
	<div>
		<router-outlet></router-outlet>
	</div>
  `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCxrQ0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRSw0Q0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5Rix1Q0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxtQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxrQ0FBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQWdDbEU7QUFBMkIsQ0FBQztBQTlCNUI7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7UUFDaEMsVUFBVSxFQUFFLENBQUMseUNBQXVCLEVBQUUsbURBQXVCLEVBQUUseUNBQWtCO1lBQ2hGLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQztRQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO0tBQ0YsQ0FBQzs7Z0JBQUE7QUFDVyxvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge0Zhdm9yaXRlUmVjaXBlQ29tcG9uZW50fSBmcm9tICcuL2Zhdm9yaXRlLXJlY2lwZS9mYXZvcml0ZS1yZWNpcGUnO1xyXG5pbXBvcnQge0luZ3JlZGllbnRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50L2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHZXRSZWNpcGVDb21wb25lbnR9IGZyb20gXCIuL2dldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50L3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gIGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnRcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuXHRwcmVjb21waWxlOiBbRmF2b3JpdGVSZWNpcGVDb21wb25lbnQsIEluZ3JlZGllbnRMaXN0Q29tcG9uZW50LCBHZXRSZWNpcGVDb21wb25lbnQsXHJcblx0XHRTaWdudXBDb21wb25lbnQsIExvZ2luQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZTogYFxyXG5cdDxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby9zbmZjX2NpcmNsZV9sb2dvLmpwZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgY2xhc3M9XCJ0b3Atc3BhY2VyIGxvZ29cIj4gXHRcclxuXHRcdDxoZWFkZXI+XHJcblx0XHRcdDxuYXYgY2xhc3M9XCJuYXZiYXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydyZWNpcGVzJ11cIj5SZWNpcGVzPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ2Zhdm9yaXRlLXJlY2lwZXMnXVwiPkZhdm9yaXRlIFJlY2lwZXM8L2E+PC9saT4gXHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ2luZ3JlZGllbnQtbGlzdCddXCI+U2hvcHBpbmcgTGlzdDwvYT48L2xpPiBcclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbnVwJ11cIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlclwiPjwvc3Bhbj4gU2lnbiBVcDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydsb2dpbiddXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gTG9naW48L2E+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0PGJyPlxyXG5cdDxkaXY+XHJcblx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcblx0PC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
