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
var router_1 = require('@angular/router');
var favorite_recipe_1 = require('./favorite-recipe/favorite-recipe');
var ingredient_list_component_1 = require("./ingredient-list.component/ingredient-list.component");
var get_recipe_component_1 = require("./get-recipe.component/get-recipe.component");
var signup_component_1 = require("./signup.component/signup.component");
var login_component_1 = require("./login.component/login.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [favorite_recipe_1.FavoriteRecipeComponent, ingredient_list_component_1.IngredientListComponent, get_recipe_component_1.GetRecipeComponent,
                signup_component_1.SignupComponent, login_component_1.LoginComponent],
            template: "\n\t<img src=\"./assets/logo/snfc_circle_logo.jpg\" height=\"100\" width=\"100\" class=\"top-spacer logo\"> \t\n\t\t<header>\n\t\t\t<nav class=\"navbar\">\n\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['recipes']\">Recipes</a></li>\n\t\t\t\t\t\t<li><a [routerLink]=\"['favorite-recipes']\">Favorite Recipes</a></li> \n\t\t\t\t\t\t<li><a [routerLink]=\"['ingredient-list']\">Shopping List</a></li> \n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['signup']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n\t\t\t\t\t\t<li><a [routerLink]=\"['login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</header>\n\t<br>\n\t<div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCxnQ0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRSwwQ0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5RixxQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxnQ0FBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQWdDbEU7SUFBQTtJQUEyQixDQUFDO0lBOUI1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQyx5Q0FBdUIsRUFBRSxtREFBdUIsRUFBRSx5Q0FBa0I7Z0JBQ2hGLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQztZQUNoQyxRQUFRLEVBQUUsNjdCQXVCVDtTQUNGLENBQUM7O29CQUFBO0lBQ3lCLG1CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7RmF2b3JpdGVSZWNpcGVDb21wb25lbnR9IGZyb20gJy4vZmF2b3JpdGUtcmVjaXBlL2Zhdm9yaXRlLXJlY2lwZSc7XHJcbmltcG9ydCB7SW5ncmVkaWVudExpc3RDb21wb25lbnR9IGZyb20gXCIuL2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dldFJlY2lwZUNvbXBvbmVudH0gZnJvbSBcIi4vZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSAgZnJvbSBcIi4vbG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG5cdHByZWNvbXBpbGU6IFtGYXZvcml0ZVJlY2lwZUNvbXBvbmVudCwgSW5ncmVkaWVudExpc3RDb21wb25lbnQsIEdldFJlY2lwZUNvbXBvbmVudFxyXG5cdFx0U2lnbnVwQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuXHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28vc25mY19jaXJjbGVfbG9nby5qcGdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGNsYXNzPVwidG9wLXNwYWNlciBsb2dvXCI+IFx0XHJcblx0XHQ8aGVhZGVyPlxyXG5cdFx0XHQ8bmF2IGNsYXNzPVwibmF2YmFyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsncmVjaXBlcyddXCI+UmVjaXBlczwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydmYXZvcml0ZS1yZWNpcGVzJ11cIj5GYXZvcml0ZSBSZWNpcGVzPC9hPjwvbGk+IFxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydpbmdyZWRpZW50LWxpc3QnXVwiPlNob3BwaW5nIExpc3Q8L2E+PC9saT4gXHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ3NpZ251cCddXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+IFNpZ24gVXA8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnbG9naW4nXVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cIj48L3NwYW4+IExvZ2luPC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdDwvaGVhZGVyPlxyXG5cdDxicj5cclxuXHQ8ZGl2PlxyXG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG5cdDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
