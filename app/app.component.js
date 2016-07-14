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
    constructor(router) {
        this.router = router;
    }
    onClickImage() {
        this.router.navigate(['/recipes']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        directives: [router_1.ROUTER_DIRECTIVES],
        precompile: [favorite_recipe_1.FavoriteRecipeComponent, ingredient_list_component_1.IngredientListComponent,
            get_recipe_component_1.GetRecipeComponent, signup_component_1.SignupComponent, login_component_1.LoginComponent],
        template: `
	<img src="./assets/logo/snfc_circle_logo.jpg" height="100" width="100" class="top-spacer logo"> 	
		<nav class="navbar"  role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseNav" aria-expanded="false">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="collapse navbar-collapse" id="collapseNav">
					<ul class="nav navbar-nav">
						<li><a [routerLink]="['/recipes']">Recipes</a></li>
						<li><a [routerLink]="['/favorite-recipes']">Favorite Recipes</a></li> 
						<li><a [routerLink]="['/ingredient-list']">Shopping List</a></li> 
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a [routerLink]="['/signup']"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
						<li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
					</ul>
				</div>
			</div>
		</nav>
	<br>
	<div>
		<router-outlet></router-outlet>
	</div>
  `
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRSw0Q0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5Rix1Q0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxtQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxrQ0FBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQXFDbEU7SUFFQyxZQUNTLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUUxQixZQUFZO1FBRVgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7QUFFRixDQUFDO0FBN0NEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1FBQ2hDLFVBQVUsRUFBRSxDQUFDLHlDQUF1QixFQUFFLG1EQUF1QjtZQUM1RCx5Q0FBa0IsRUFBRSxrQ0FBZSxFQUFFLGdDQUFjLENBQUM7UUFDcEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJUO0tBQ0YsQ0FBQzs7Z0JBQUE7QUFDVyxvQkFBWSxlQVV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RmF2b3JpdGVSZWNpcGVDb21wb25lbnR9IGZyb20gJy4vZmF2b3JpdGUtcmVjaXBlL2Zhdm9yaXRlLXJlY2lwZSc7XHJcbmltcG9ydCB7SW5ncmVkaWVudExpc3RDb21wb25lbnR9IGZyb20gXCIuL2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dldFJlY2lwZUNvbXBvbmVudH0gZnJvbSBcIi4vZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSAgZnJvbSBcIi4vbG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG5cdHByZWNvbXBpbGU6IFtGYXZvcml0ZVJlY2lwZUNvbXBvbmVudCwgSW5ncmVkaWVudExpc3RDb21wb25lbnQsIFxyXG5cdFx0R2V0UmVjaXBlQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIExvZ2luQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZTogYFxyXG5cdDxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby9zbmZjX2NpcmNsZV9sb2dvLmpwZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgY2xhc3M9XCJ0b3Atc3BhY2VyIGxvZ29cIj4gXHRcclxuXHRcdDxuYXYgY2xhc3M9XCJuYXZiYXJcIiAgcm9sZT1cIm5hdmlnYXRpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZU5hdlwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3JlY2lwZXMnXVwiPlJlY2lwZXM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2Zhdm9yaXRlLXJlY2lwZXMnXVwiPkZhdm9yaXRlIFJlY2lwZXM8L2E+PC9saT4gXHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9pbmdyZWRpZW50LWxpc3QnXVwiPlNob3BwaW5nIExpc3Q8L2E+PC9saT4gXHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9zaWdudXAnXVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9sb2dpbiddXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gTG9naW48L2E+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uYXY+XHJcblx0PGJyPlxyXG5cdDxkaXY+XHJcblx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcblx0PC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XHJcblxyXG5cdG9uQ2xpY2tJbWFnZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVjaXBlcyddKTtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
