import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FavoriteRecipeComponent} from './favorite-recipe/favorite-recipe';
import {IngredientListComponent} from "./ingredient-list.component/ingredient-list.component";
import {GetRecipeComponent} from "./get-recipe.component/get-recipe.component";
import {SignupComponent} from "./signup.component/signup.component";
import {LoginComponent}  from "./login.component/login.component"; 

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
	precompile: [FavoriteRecipeComponent, IngredientListComponent, 
		GetRecipeComponent, SignupComponent, LoginComponent],
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
})
export class AppComponent {

	constructor(
		private router: Router){}

	onClickImage()
	{
		this.router.navigate(['/recipes']);
	}
	
}

