import {provideRouter, RouterConfig } from '@angular/router';
import {GetRecipeComponent} from "../get-recipe.component/get-recipe.component";
import {IngredientListComponent} from "../ingredient-list.component/ingredient-list.component";
import {AppComponent} from '../app.component';
import {FavoriteRecipeComponent} from '../favorite-recipe/favorite-recipe';
import {SignupComponent} from "../signup.component/signup.component";
import {LoginComponent}  from "../login.component/login.component"; 

export const routes: RouterConfig = [
	{path: '', component: GetRecipeComponent},
	{path: 'recipes', component: GetRecipeComponent},
	{path: 'favorite-recipes', component: FavoriteRecipeComponent},
	{path: 'ingredient-list', component: IngredientListComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'login', component: LoginComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];