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
		<header>
			<nav class="navbar">
				<div class="container-fluid">
					<div class="navbar-header">
					</div>
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
			</nav>
		</header>
	<br>
	<div>
		<router-outlet></router-outlet>
	</div>
  `
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx5QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRSw0Q0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5Rix1Q0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxtQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxrQ0FBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQWdDbEU7SUFFQyxZQUNTLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUUxQixZQUFZO1FBRVgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7QUFFRixDQUFDO0FBeENEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1FBQ2hDLFVBQVUsRUFBRSxDQUFDLHlDQUF1QixFQUFFLG1EQUF1QjtZQUM1RCx5Q0FBa0IsRUFBRSxrQ0FBZSxFQUFFLGdDQUFjLENBQUM7UUFDcEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDtLQUNGLENBQUM7O2dCQUFBO0FBQ1csb0JBQVksZUFVeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Zhdm9yaXRlUmVjaXBlQ29tcG9uZW50fSBmcm9tICcuL2Zhdm9yaXRlLXJlY2lwZS9mYXZvcml0ZS1yZWNpcGUnO1xyXG5pbXBvcnQge0luZ3JlZGllbnRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50L2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHZXRSZWNpcGVDb21wb25lbnR9IGZyb20gXCIuL2dldC1yZWNpcGUuY29tcG9uZW50L2dldC1yZWNpcGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50L3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gIGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnRcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuXHRwcmVjb21waWxlOiBbRmF2b3JpdGVSZWNpcGVDb21wb25lbnQsIEluZ3JlZGllbnRMaXN0Q29tcG9uZW50LCBcclxuXHRcdEdldFJlY2lwZUNvbXBvbmVudCwgU2lnbnVwQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuXHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28vc25mY19jaXJjbGVfbG9nby5qcGdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGNsYXNzPVwidG9wLXNwYWNlciBsb2dvXCI+IFx0XHJcblx0XHQ8aGVhZGVyPlxyXG5cdFx0XHQ8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3JlY2lwZXMnXVwiPlJlY2lwZXM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2Zhdm9yaXRlLXJlY2lwZXMnXVwiPkZhdm9yaXRlIFJlY2lwZXM8L2E+PC9saT4gXHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9pbmdyZWRpZW50LWxpc3QnXVwiPlNob3BwaW5nIExpc3Q8L2E+PC9saT4gXHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9zaWdudXAnXVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJy9sb2dpbiddXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1pblwiPjwvc3Bhbj4gTG9naW48L2E+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0PGJyPlxyXG5cdDxkaXY+XHJcblx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcblx0PC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XHJcblxyXG5cdG9uQ2xpY2tJbWFnZSgpXHJcblx0e1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVjaXBlcyddKTtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
