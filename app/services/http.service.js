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
const http_1 = require("@angular/http");
require('rxjs/Rx');
const recipe_1 = require("../shared/recipe");
const recipe_list_1 = require("../mock/recipe-list");
const customer_input_1 = require("../mock/customer-input");
let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    /**
    * Creates the proper header to gain access to arango.
    * True authentication yet to be started.
    */
    createAuthorizationHeader(headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('webdev:a%5i*ot!'));
    }
    /**
    * Main Search query based on the ingredients the recipe contains.
    * takes the inputed search term pushed from the get_recipe.component
    */
    getPosts(input) {
        let k = 0;
        let headers = new http_1.Headers();
        let recipeObject;
        var url = 'http://stage.webservices.sacfood.coop:8529/_db/snfc/snfcEndPoints/foodservice/recipes-ingredients/' + input;
        this.createAuthorizationHeader(headers);
        // returns the query 
        return this._http.get(url, { headers: headers })
            .map((response) => {
            return response.json();
        })
            .map((recipes) => {
            let result = [];
            if (recipes) {
                recipes.forEach((recipe) => {
                    result.push(new recipe_1.Recipe(recipe.Recipe, recipe.PLU, recipe.IngredientCount, recipe.Ingredients));
                    k++;
                });
            }
            // clears the results from previous search
            this.clearResults();
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
            this.saveResults(result);
            // if larger than 1 result conduct duplicate check
            if (k > 1) {
                this.deleteDuplicate(k);
            }
            return this.returnResults();
        });
    }
    /**
    * saves the results of the current search to local storage.
    */
    saveResults(input) {
        Array.prototype.push.apply(recipe_list_1.RECIPE_LIST, input);
    }
    /**
    * nulls the previously searched results starting at element 0 to 1000
    */
    clearResults() {
        recipe_list_1.RECIPE_LIST.splice(0, 1000);
    }
    /**
    * after the query has been sorted, This method loops through the
    * object array and deletes any duplicate recipes.
    */
    deleteDuplicate(k) {
        let j = 0;
        do {
            if (recipe_list_1.RECIPE_LIST[j].Recipe === recipe_list_1.RECIPE_LIST[j + 1].Recipe) {
                recipe_list_1.RECIPE_LIST.splice(j, 1);
                k--;
            }
            j++;
        } while (j < k - 1);
    }
    /**
    * Saves the the index of the selected recipes along with the boolean
    * value that tests whether or not a item had been selected.
    */
    saveSelectedRecipe(i, test) {
        customer_input_1.CUSTOMERINPUT[1] = i;
        customer_input_1.CUSTOMERINPUT[2] = test;
    }
    /**
    * returns the customers search term to the input field.
    */
    returnCustomerInput() {
        return customer_input_1.CUSTOMERINPUT[0]; // Search term
    }
    /**
    * returns the index of the recipe the customer had selected.
    */
    returnSelectedRecipeIndex() {
        return customer_input_1.CUSTOMERINPUT[1]; // Index of selected recipe
    }
    /**
    * returns the test of whether a customer has selected a recipe.
    */
    returnSelectionTest() {
        return customer_input_1.CUSTOMERINPUT[2]; // Selection test boolean
    }
    /**
    * returns saved recipe search.
    */
    returnResults() {
        return recipe_list_1.RECIPE_LIST;
    }
};
HttpService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], HttpService);
exports.HttpService = HttpService;

//# sourceMappingURL=data:application/json;base64,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QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO0lBQ25ELENBQUM7SUFFRDs7TUFFRTtJQUNGLGFBQWE7UUFFWixNQUFNLENBQUMseUJBQVcsQ0FBQztJQUNwQixDQUFDO0FBR0YsQ0FBQztBQXhKRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXVKdkIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcclxuaW1wb3J0IHtSRUNJUEVfTElTVH0gZnJvbSBcIi4uL21vY2svcmVjaXBlLWxpc3RcIjtcclxuaW1wb3J0IHtDVVNUT01FUklOUFVUfSBmcm9tIFwiLi4vbW9jay9jdXN0b21lci1pbnB1dFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2UgXHJcbntcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG5cdC8qKlxyXG5cdCogQ3JlYXRlcyB0aGUgcHJvcGVyIGhlYWRlciB0byBnYWluIGFjY2VzcyB0byBhcmFuZ28uXHJcblx0KiBUcnVlIGF1dGhlbnRpY2F0aW9uIHlldCB0byBiZSBzdGFydGVkLlxyXG5cdCovXHJcblx0Y3JlYXRlQXV0aG9yaXphdGlvbkhlYWRlcihoZWFkZXJzOkhlYWRlcnMpIFxyXG5cdFx0e1xyXG5cdCAgICBcdGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgK1xyXG5cdCAgICAgIFx0XHRidG9hKCd3ZWJkZXY6YSU1aSpvdCEnKSk7IFxyXG5cdCAgXHR9XHJcblx0LyoqXHJcblx0KiBNYWluIFNlYXJjaCBxdWVyeSBiYXNlZCBvbiB0aGUgaW5ncmVkaWVudHMgdGhlIHJlY2lwZSBjb250YWlucy4gXHJcblx0KiB0YWtlcyB0aGUgaW5wdXRlZCBzZWFyY2ggdGVybSBwdXNoZWQgZnJvbSB0aGUgZ2V0X3JlY2lwZS5jb21wb25lbnRcclxuXHQqLyBcclxuXHRnZXRQb3N0cyhpbnB1dDpzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4gXHJcblx0XHR7XHJcblx0XHRsZXQgazpudW1iZXIgPSAwO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0bGV0IHJlY2lwZU9iamVjdDogQXJyYXk8UmVjaXBlPjtcclxuXHRcdHZhciB1cmw9ICdodHRwOi8vc3RhZ2Uud2Vic2VydmljZXMuc2FjZm9vZC5jb29wOjg1MjkvX2RiL3NuZmMvc25mY0VuZFBvaW50cy9mb29kc2VydmljZS9yZWNpcGVzLWluZ3JlZGllbnRzLycgKyBpbnB1dDtcclxuICAgIFx0dGhpcy5jcmVhdGVBdXRob3JpemF0aW9uSGVhZGVyKGhlYWRlcnMpO1xyXG5cclxuICAgIFx0Ly8gcmV0dXJucyB0aGUgcXVlcnkgXHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodXJsLHtoZWFkZXJzOmhlYWRlcnN9KVxyXG5cdFx0XHJcblx0XHQvLyBtYXBzIHRoZSByZXNwb25zZSBvYmplY3QgdG8gYSBqc29uIG9iamVjdFxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0Ly8gbWFwcyB0aGUgbGFyZ2Ugb2JqZWN0IGludG8gbXVsdGlwbGUgc21hbGxlciBvYmplY3RzIGNvbnRhaW5lZCBpbiB0aGUgXHJcblx0XHQvLyByZWNpcGUgbW9kZWxcclxuXHRcdC5tYXAoKHJlY2lwZXM6IEFycmF5PGFueT4pID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdDpBcnJheTxSZWNpcGU+ID0gW107XHJcblx0XHRcdGlmIChyZWNpcGVzKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJlY2lwZXMuZm9yRWFjaCgocmVjaXBlKSA9PiBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChcclxuXHRcdFx0XHRcdFx0bmV3IFJlY2lwZShyZWNpcGUuUmVjaXBlLFxyXG5cdFx0XHRcdFx0XHRcdHJlY2lwZS5QTFUsXHJcblx0XHRcdFx0XHRcdFx0cmVjaXBlLkluZ3JlZGllbnRDb3VudCxcclxuXHRcdFx0XHRcdFx0XHRyZWNpcGUuSW5ncmVkaWVudHNcclxuXHRcdFx0XHRcdFx0XHQpKTtcclxuXHRcdFx0XHQgaysrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdC8vIGNsZWFycyB0aGUgcmVzdWx0cyBmcm9tIHByZXZpb3VzIHNlYXJjaFxyXG5cdFx0dGhpcy5jbGVhclJlc3VsdHMoKVxyXG5cdFx0Ly8gc2F2ZXMgdGhlIGN1c3RvbWVycyBpbnB1dCB0byBsb2NhbCBjYWNoZVxyXG5cdFx0Q1VTVE9NRVJJTlBVVFswXSA9IGlucHV0O1xyXG5cdFx0Ly8gc29ydHMgdGhlIHJlc3VsdHMgYmFzZWQgb24gdGhlIG5hbWUgb2YgdGhlIHJlY2lwZVxyXG5cdFx0cmVzdWx0LnNvcnQoZnVuY3Rpb24oYSxiKSBcclxuXHRcdHtcclxuXHRcdFx0aWYgKGEuUmVjaXBlIDwgYi5SZWNpcGUpXHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRlbHNlIGlmIChhLlJlY2lwZSA+IGIuUmVjaXBlKVxyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBzYXZlcyB0aGUgY3VycmVudCBzZXQgb2YganNvbiBvYmplY3RzXHJcblx0XHR0aGlzLnNhdmVSZXN1bHRzKHJlc3VsdCk7XHJcblx0XHQvLyBpZiBsYXJnZXIgdGhhbiAxIHJlc3VsdCBjb25kdWN0IGR1cGxpY2F0ZSBjaGVja1xyXG5cdFx0aWYoaz4xKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlbGV0ZUR1cGxpY2F0ZShrKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yZXR1cm5SZXN1bHRzKCk7XHJcblx0XHR9KSBcclxuXHR9XHJcblx0LyoqXHJcblx0KiBzYXZlcyB0aGUgcmVzdWx0cyBvZiB0aGUgY3VycmVudCBzZWFyY2ggdG8gbG9jYWwgc3RvcmFnZS5cclxuXHQqL1xyXG5cdHNhdmVSZXN1bHRzKGlucHV0OiBhbnkpIFxyXG5cdHtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KFJFQ0lQRV9MSVNULCBpbnB1dCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIG51bGxzIHRoZSBwcmV2aW91c2x5IHNlYXJjaGVkIHJlc3VsdHMgc3RhcnRpbmcgYXQgZWxlbWVudCAwIHRvIDEwMDAgXHJcblx0Ki9cclxuXHRjbGVhclJlc3VsdHMoKVxyXG5cdHtcclxuXHRcdFJFQ0lQRV9MSVNULnNwbGljZSgwLCAxMDAwKTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0KiBhZnRlciB0aGUgcXVlcnkgaGFzIGJlZW4gc29ydGVkLCBUaGlzIG1ldGhvZCBsb29wcyB0aHJvdWdoIHRoZSBcclxuXHQqIG9iamVjdCBhcnJheSBhbmQgZGVsZXRlcyBhbnkgZHVwbGljYXRlIHJlY2lwZXMuXHJcblx0Ki9cclxuXHRkZWxldGVEdXBsaWNhdGUoazpudW1iZXIpXHJcblx0e1xyXG5cdFx0bGV0IGo6bnVtYmVyPTA7XHJcblx0XHRkb1xyXG5cdFx0e1xyXG5cdFx0XHRpZihSRUNJUEVfTElTVFtqXS5SZWNpcGUgPT09IFJFQ0lQRV9MSVNUW2orMV0uUmVjaXBlKVxyXG5cdFx0XHR7XHRcclxuXHRcdFx0XHRSRUNJUEVfTElTVC5zcGxpY2UoaiwgMSk7XHJcblx0XHRcdFx0ay0tO1xyXG5cdFx0XHR9XHJcblx0XHRcdGorKztcclxuXHRcdH13aGlsZShqIDwgay0xKTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBTYXZlcyB0aGUgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCByZWNpcGVzIGFsb25nIHdpdGggdGhlIGJvb2xlYW5cclxuXHQqIHZhbHVlIHRoYXQgdGVzdHMgd2hldGhlciBvciBub3QgYSBpdGVtIGhhZCBiZWVuIHNlbGVjdGVkLlxyXG5cdCovXHJcblx0c2F2ZVNlbGVjdGVkUmVjaXBlKGk6bnVtYmVyLCB0ZXN0OmJvb2xlYW4pXHJcblx0e1xyXG5cdFx0Q1VTVE9NRVJJTlBVVFsxXSA9IGk7XHJcblx0XHRDVVNUT01FUklOUFVUWzJdID0gdGVzdDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogcmV0dXJucyB0aGUgY3VzdG9tZXJzIHNlYXJjaCB0ZXJtIHRvIHRoZSBpbnB1dCBmaWVsZC5cclxuXHQqL1xyXG5cdHJldHVybkN1c3RvbWVySW5wdXQoKVxyXG5cdHtcclxuXHRcdHJldHVybiBDVVNUT01FUklOUFVUWzBdOyAvLyBTZWFyY2ggdGVybVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcmVjaXBlIHRoZSBjdXN0b21lciBoYWQgc2VsZWN0ZWQuXHJcblx0Ki9cclxuXHRyZXR1cm5TZWxlY3RlZFJlY2lwZUluZGV4KCkgXHJcblx0e1xyXG5cdFx0cmV0dXJuIENVU1RPTUVSSU5QVVRbMV07IC8vIEluZGV4IG9mIHNlbGVjdGVkIHJlY2lwZVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiByZXR1cm5zIHRoZSB0ZXN0IG9mIHdoZXRoZXIgYSBjdXN0b21lciBoYXMgc2VsZWN0ZWQgYSByZWNpcGUuXHJcblx0Ki9cclxuXHRyZXR1cm5TZWxlY3Rpb25UZXN0KClcclxuXHR7XHJcblx0XHRyZXR1cm4gQ1VTVE9NRVJJTlBVVFsyXTsgLy8gU2VsZWN0aW9uIHRlc3QgYm9vbGVhblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiByZXR1cm5zIHNhdmVkIHJlY2lwZSBzZWFyY2guXHJcblx0Ki9cclxuXHRyZXR1cm5SZXN1bHRzKCkgXHJcblx0e1xyXG5cdFx0cmV0dXJuIFJFQ0lQRV9MSVNUO1xyXG5cdH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
