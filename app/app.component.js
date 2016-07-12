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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCxnQ0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUMxRSwwQ0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5RixxQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSxnQ0FBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQWdDbEU7SUFBQTtJQUEyQixDQUFDO0lBOUI1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQyx5Q0FBdUIsRUFBRSxtREFBdUIsRUFBRSx5Q0FBa0I7Z0JBQ2hGLGtDQUFlLEVBQUUsZ0NBQWMsQ0FBQztZQUNoQyxRQUFRLEVBQUUsNjdCQXVCVDtTQUNGLENBQUM7O29CQUFBO0lBQ3lCLG1CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7RmF2b3JpdGVSZWNpcGVDb21wb25lbnR9IGZyb20gJy4vZmF2b3JpdGUtcmVjaXBlL2Zhdm9yaXRlLXJlY2lwZSc7XHJcbmltcG9ydCB7SW5ncmVkaWVudExpc3RDb21wb25lbnR9IGZyb20gXCIuL2luZ3JlZGllbnQtbGlzdC5jb21wb25lbnQvaW5ncmVkaWVudC1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dldFJlY2lwZUNvbXBvbmVudH0gZnJvbSBcIi4vZ2V0LXJlY2lwZS5jb21wb25lbnQvZ2V0LXJlY2lwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSAgZnJvbSBcIi4vbG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudFwiOyBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG5cdHByZWNvbXBpbGU6IFtGYXZvcml0ZVJlY2lwZUNvbXBvbmVudCwgSW5ncmVkaWVudExpc3RDb21wb25lbnQsIEdldFJlY2lwZUNvbXBvbmVudCxcclxuXHRcdFNpZ251cENvbXBvbmVudCwgTG9naW5Db21wb25lbnRdLFxyXG4gIHRlbXBsYXRlOiBgXHJcblx0PGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvL3NuZmNfY2lyY2xlX2xvZ28uanBnXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBjbGFzcz1cInRvcC1zcGFjZXIgbG9nb1wiPiBcdFxyXG5cdFx0PGhlYWRlcj5cclxuXHRcdFx0PG5hdiBjbGFzcz1cIm5hdmJhclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ3JlY2lwZXMnXVwiPlJlY2lwZXM8L2E+PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnZmF2b3JpdGUtcmVjaXBlcyddXCI+RmF2b3JpdGUgUmVjaXBlczwvYT48L2xpPiBcclxuXHRcdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnaW5ncmVkaWVudC1saXN0J11cIj5TaG9wcGluZyBMaXN0PC9hPjwvbGk+IFxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydzaWdudXAnXVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPiBTaWduIFVwPC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ2xvZ2luJ11cIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLWluXCI+PC9zcGFuPiBMb2dpbjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQ8YnI+XHJcblx0PGRpdj5cclxuXHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuXHQ8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
