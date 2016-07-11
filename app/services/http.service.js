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
var http_1 = require("@angular/http");
require('rxjs/Rx');
var recipe_1 = require("../shared/recipe");
var recipe_list_1 = require("../mock/recipe-list");
var customer_input_1 = require("../mock/customer-input");
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    /**
    * Creates the proper header to gain access to arango.
    * True authentication yet to be started.
    */
    HttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('webdev:a%5i*ot!'));
    };
    /**
    * Main Search query based on the ingredients the recipe contains.
    * takes the inputed search term pushed from the get_recipe.component
    */
    HttpService.prototype.getPosts = function (input) {
        var _this = this;
        var k = 0;
        var headers = new http_1.Headers();
        var recipeObject;
        var url = 'http://stage.webservices.sacfood.coop:8529/_db/snfc/snfcEndPoints/foodservice/recipes-ingredients/' + input;
        this.createAuthorizationHeader(headers);
        // returns the query 
        return this._http.get(url, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .map(function (recipes) {
            var result = [];
            if (recipes) {
                recipes.forEach(function (recipe) {
                    result.push(new recipe_1.Recipe(recipe.Recipe, recipe.PLU, recipe.IngredientCount, recipe.Ingredients));
                    k++;
                });
            }
            // clears the results from previous search
            _this.clearResults();
            // saves the customers input to local cache
            customer_input_1.CUSTOMERINPUT[0] = input;
            // sorts the results based on the name of the recipe
            result.sort(function (a, b) {
                if (a.Recipe < b.Recipe)
                    return -1;
                else if (a.Recipe > b.Recipe)
                    return 1;
                else
                    return 0;
            });
            // saves the current set of json objects
            _this.saveResults(result);
            // if larger than 1 result conduct duplicate check
            if (k > 1) {
                _this.deleteDuplicate(k);
            }
            return _this.returnResults();
        });
    };
    /**
    * saves the results of the current search to local storage.
    */
    HttpService.prototype.saveResults = function (input) {
        Array.prototype.push.apply(recipe_list_1.RECIPE_LIST, input);
    };
    /**
    * nulls the previously searched results starting at element 0 to 1000
    */
    HttpService.prototype.clearResults = function () {
        recipe_list_1.RECIPE_LIST.splice(0, 1000);
    };
    /**
    * after the query has been sorted, This method loops through the
    * object array and deletes any duplicate recipes.
    */
    HttpService.prototype.deleteDuplicate = function (k) {
        var j = 0;
        do {
            if (recipe_list_1.RECIPE_LIST[j].Recipe === recipe_list_1.RECIPE_LIST[j + 1].Recipe) {
                recipe_list_1.RECIPE_LIST.splice(j, 1);
                k--;
            }
            j++;
        } while (j < k - 1);
    };
    /**
    * Saves the the index of the selected recipes along with the boolean
    * value that tests whether or not a item had been selected.
    */
    HttpService.prototype.saveSelectedRecipe = function (i, test) {
        customer_input_1.CUSTOMERINPUT[1] = i;
        customer_input_1.CUSTOMERINPUT[2] = test;
    };
    /**
    * returns the customers search term to the input field.
    */
    HttpService.prototype.returnCustomerInput = function () {
        return customer_input_1.CUSTOMERINPUT[0]; // Search term
    };
    /**
    * returns the index of the recipe the customer had selected.
    */
    HttpService.prototype.returnSelectedRecipeIndex = function () {
        return customer_input_1.CUSTOMERINPUT[1]; // Index of selected recipe
    };
    /**
    * returns the test of whether a customer has selected a recipe.
    */
    HttpService.prototype.returnSelectionTest = function () {
        return customer_input_1.CUSTOMERINPUT[2]; // Selection test boolean
    };
    /**
    * returns saved recipe search.
    */
    HttpService.prototype.returnResults = function () {
        return recipe_list_1.RECIPE_LIST;
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;

//# sourceMappingURL=data:application/json;base64,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Q0FBQywyQkFBMkI7SUFDckQsQ0FBQztJQUVEOztNQUVFO0lBQ0YseUNBQW1CLEdBQW5CO1FBRUMsTUFBTSxDQUFDLDhCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7SUFDbkQsQ0FBQztJQUVEOztNQUVFO0lBQ0YsbUNBQWEsR0FBYjtRQUVDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDO0lBQ3BCLENBQUM7SUFySkY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXdKYixrQkFBQztBQUFELENBdkpBLEFBdUpDLElBQUE7QUF2SlksbUJBQVcsY0F1SnZCLENBQUEiLCJmaWxlIjoic2VydmljZXMvaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7UkVDSVBFX0xJU1R9IGZyb20gXCIuLi9tb2NrL3JlY2lwZS1saXN0XCI7XHJcbmltcG9ydCB7Q1VTVE9NRVJJTlBVVH0gZnJvbSBcIi4uL21vY2svY3VzdG9tZXItaW5wdXRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIFxyXG57XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHQvKipcclxuXHQqIENyZWF0ZXMgdGhlIHByb3BlciBoZWFkZXIgdG8gZ2FpbiBhY2Nlc3MgdG8gYXJhbmdvLlxyXG5cdCogVHJ1ZSBhdXRoZW50aWNhdGlvbiB5ZXQgdG8gYmUgc3RhcnRlZC5cclxuXHQqL1xyXG5cdGNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoaGVhZGVyczpIZWFkZXJzKSBcclxuXHRcdHtcclxuXHQgICAgXHRoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICtcclxuXHQgICAgICBcdFx0YnRvYSgnd2ViZGV2OmElNWkqb3QhJykpOyBcclxuXHQgIFx0fVxyXG5cdC8qKlxyXG5cdCogTWFpbiBTZWFyY2ggcXVlcnkgYmFzZWQgb24gdGhlIGluZ3JlZGllbnRzIHRoZSByZWNpcGUgY29udGFpbnMuIFxyXG5cdCogdGFrZXMgdGhlIGlucHV0ZWQgc2VhcmNoIHRlcm0gcHVzaGVkIGZyb20gdGhlIGdldF9yZWNpcGUuY29tcG9uZW50XHJcblx0Ki8gXHJcblx0Z2V0UG9zdHMoaW5wdXQ6c3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IFxyXG5cdFx0e1xyXG5cdFx0bGV0IGs6bnVtYmVyID0gMDtcclxuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdGxldCByZWNpcGVPYmplY3Q6IEFycmF5PFJlY2lwZT47XHJcblx0XHR2YXIgdXJsPSAnaHR0cDovL3N0YWdlLndlYnNlcnZpY2VzLnNhY2Zvb2QuY29vcDo4NTI5L19kYi9zbmZjL3NuZmNFbmRQb2ludHMvZm9vZHNlcnZpY2UvcmVjaXBlcy1pbmdyZWRpZW50cy8nICsgaW5wdXQ7XHJcbiAgICBcdHRoaXMuY3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcihoZWFkZXJzKTtcclxuXHJcbiAgICBcdC8vIHJldHVybnMgdGhlIHF1ZXJ5IFxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCx7aGVhZGVyczpoZWFkZXJzfSlcclxuXHRcdFxyXG5cdFx0Ly8gbWFwcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRvIGEganNvbiBvYmplY3RcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdC8vIG1hcHMgdGhlIGxhcmdlIG9iamVjdCBpbnRvIG11bHRpcGxlIHNtYWxsZXIgb2JqZWN0cyBjb250YWluZWQgaW4gdGhlIFxyXG5cdFx0Ly8gcmVjaXBlIG1vZGVsXHJcblx0XHQubWFwKChyZWNpcGVzOiBBcnJheTxhbnk+KSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQ6QXJyYXk8UmVjaXBlPiA9IFtdO1xyXG5cdFx0XHRpZiAocmVjaXBlcykgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZWNpcGVzLmZvckVhY2goKHJlY2lwZSkgPT4gXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goXHJcblx0XHRcdFx0XHRcdG5ldyBSZWNpcGUocmVjaXBlLlJlY2lwZSxcclxuXHRcdFx0XHRcdFx0XHRyZWNpcGUuUExVLFxyXG5cdFx0XHRcdFx0XHRcdHJlY2lwZS5JbmdyZWRpZW50Q291bnQsXHJcblx0XHRcdFx0XHRcdFx0cmVjaXBlLkluZ3JlZGllbnRzXHJcblx0XHRcdFx0XHRcdFx0KSk7XHJcblx0XHRcdFx0IGsrKztcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBjbGVhcnMgdGhlIHJlc3VsdHMgZnJvbSBwcmV2aW91cyBzZWFyY2hcclxuXHRcdHRoaXMuY2xlYXJSZXN1bHRzKClcclxuXHRcdC8vIHNhdmVzIHRoZSBjdXN0b21lcnMgaW5wdXQgdG8gbG9jYWwgY2FjaGVcclxuXHRcdENVU1RPTUVSSU5QVVRbMF0gPSBpbnB1dDtcclxuXHRcdC8vIHNvcnRzIHRoZSByZXN1bHRzIGJhc2VkIG9uIHRoZSBuYW1lIG9mIHRoZSByZWNpcGVcclxuXHRcdHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsYikgXHJcblx0XHR7XHJcblx0XHRcdGlmIChhLlJlY2lwZSA8IGIuUmVjaXBlKVxyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0ZWxzZSBpZiAoYS5SZWNpcGUgPiBiLlJlY2lwZSlcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gc2F2ZXMgdGhlIGN1cnJlbnQgc2V0IG9mIGpzb24gb2JqZWN0c1xyXG5cdFx0dGhpcy5zYXZlUmVzdWx0cyhyZXN1bHQpO1xyXG5cdFx0Ly8gaWYgbGFyZ2VyIHRoYW4gMSByZXN1bHQgY29uZHVjdCBkdXBsaWNhdGUgY2hlY2tcclxuXHRcdGlmKGs+MSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWxldGVEdXBsaWNhdGUoayk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmV0dXJuUmVzdWx0cygpO1xyXG5cdFx0fSkgXHJcblx0fVxyXG5cdC8qKlxyXG5cdCogc2F2ZXMgdGhlIHJlc3VsdHMgb2YgdGhlIGN1cnJlbnQgc2VhcmNoIHRvIGxvY2FsIHN0b3JhZ2UuXHJcblx0Ki9cclxuXHRzYXZlUmVzdWx0cyhpbnB1dDogYW55KSBcclxuXHR7XHJcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShSRUNJUEVfTElTVCwgaW5wdXQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBudWxscyB0aGUgcHJldmlvdXNseSBzZWFyY2hlZCByZXN1bHRzIHN0YXJ0aW5nIGF0IGVsZW1lbnQgMCB0byAxMDAwIFxyXG5cdCovXHJcblx0Y2xlYXJSZXN1bHRzKClcclxuXHR7XHJcblx0XHRSRUNJUEVfTElTVC5zcGxpY2UoMCwgMTAwMCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCogYWZ0ZXIgdGhlIHF1ZXJ5IGhhcyBiZWVuIHNvcnRlZCwgVGhpcyBtZXRob2QgbG9vcHMgdGhyb3VnaCB0aGUgXHJcblx0KiBvYmplY3QgYXJyYXkgYW5kIGRlbGV0ZXMgYW55IGR1cGxpY2F0ZSByZWNpcGVzLlxyXG5cdCovXHJcblx0ZGVsZXRlRHVwbGljYXRlKGs6bnVtYmVyKVxyXG5cdHtcclxuXHRcdGxldCBqOm51bWJlcj0wO1xyXG5cdFx0ZG9cclxuXHRcdHtcclxuXHRcdFx0aWYoUkVDSVBFX0xJU1Rbal0uUmVjaXBlID09PSBSRUNJUEVfTElTVFtqKzFdLlJlY2lwZSlcclxuXHRcdFx0e1x0XHJcblx0XHRcdFx0UkVDSVBFX0xJU1Quc3BsaWNlKGosIDEpO1xyXG5cdFx0XHRcdGstLTtcclxuXHRcdFx0fVxyXG5cdFx0XHRqKys7XHJcblx0XHR9d2hpbGUoaiA8IGstMSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogU2F2ZXMgdGhlIHRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgcmVjaXBlcyBhbG9uZyB3aXRoIHRoZSBib29sZWFuXHJcblx0KiB2YWx1ZSB0aGF0IHRlc3RzIHdoZXRoZXIgb3Igbm90IGEgaXRlbSBoYWQgYmVlbiBzZWxlY3RlZC5cclxuXHQqL1xyXG5cdHNhdmVTZWxlY3RlZFJlY2lwZShpOm51bWJlciwgdGVzdDpib29sZWFuKVxyXG5cdHtcclxuXHRcdENVU1RPTUVSSU5QVVRbMV0gPSBpO1xyXG5cdFx0Q1VTVE9NRVJJTlBVVFsyXSA9IHRlc3Q7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIHJldHVybnMgdGhlIGN1c3RvbWVycyBzZWFyY2ggdGVybSB0byB0aGUgaW5wdXQgZmllbGQuXHJcblx0Ki9cclxuXHRyZXR1cm5DdXN0b21lcklucHV0KClcclxuXHR7XHJcblx0XHRyZXR1cm4gQ1VTVE9NRVJJTlBVVFswXTsgLy8gU2VhcmNoIHRlcm1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHJlY2lwZSB0aGUgY3VzdG9tZXIgaGFkIHNlbGVjdGVkLlxyXG5cdCovXHJcblx0cmV0dXJuU2VsZWN0ZWRSZWNpcGVJbmRleCgpIFxyXG5cdHtcclxuXHRcdHJldHVybiBDVVNUT01FUklOUFVUWzFdOyAvLyBJbmRleCBvZiBzZWxlY3RlZCByZWNpcGVcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyB0aGUgdGVzdCBvZiB3aGV0aGVyIGEgY3VzdG9tZXIgaGFzIHNlbGVjdGVkIGEgcmVjaXBlLlxyXG5cdCovXHJcblx0cmV0dXJuU2VsZWN0aW9uVGVzdCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIENVU1RPTUVSSU5QVVRbMl07IC8vIFNlbGVjdGlvbiB0ZXN0IGJvb2xlYW5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyBzYXZlZCByZWNpcGUgc2VhcmNoLlxyXG5cdCovXHJcblx0cmV0dXJuUmVzdWx0cygpIFxyXG5cdHtcclxuXHRcdHJldHVybiBSRUNJUEVfTElTVDtcclxuXHR9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
