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
const allergen_list_1 = require("../mock/allergen-list");
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
    saveAllergenInfo(item) {
        for (let i = 0; i < allergen_list_1.ALLERGEN_LIST.length; i++) {
            if (item == allergen_list_1.ALLERGEN_LIST[i]) {
                allergen_list_1.ALLERGEN_LIST.splice(i, 1);
                return 0;
            }
        }
        allergen_list_1.ALLERGEN_LIST.push(item);
        console.log(allergen_list_1.ALLERGEN_LIST);
    }
    returnAllergenInfo() {
        return allergen_list_1.ALLERGEN_LIST;
    }
};
HttpService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], HttpService);
exports.HttpService = HttpService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUU1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLHlCQUFxQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3hDLDhCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELGlDQUE0Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3JELGdDQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBR3BEO0lBRUMsWUFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBQ25DOzs7TUFHRTtJQUNGLHlCQUF5QixDQUFDLE9BQWU7UUFFcEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUTtZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSjs7O01BR0U7SUFDRixRQUFRLENBQUMsS0FBWTtRQUVwQixJQUFJLENBQUMsR0FBVSxDQUFDLENBQUM7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLFlBQTJCLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUUsb0dBQW9HLEdBQUcsS0FBSyxDQUFDO1FBQ25ILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxxQkFBcUI7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzthQUcxQyxHQUFHLENBQUMsQ0FBQyxRQUFRO1lBRWIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFHRixHQUFHLENBQUMsQ0FBQyxPQUFtQjtZQUN4QixJQUFJLE1B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O0lBQ0YsbUJBQW1CO1FBRWxCLE1BQU0sQ0FBQyw4QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCO0lBQ25ELENBQUM7SUFFRDs7TUFFRTtJQUNGLGFBQWE7UUFFWixNQUFNLENBQUMseUJBQVcsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBUTtRQUV4QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM1QyxDQUFDO1lBQ0EsRUFBRSxDQUFDLENBQUUsSUFBSSxJQUFJLDZCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztnQkFDQSw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQztRQUNELDZCQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0I7UUFFakIsTUFBTSxDQUFDLDZCQUFhLENBQUM7SUFDdEIsQ0FBQztBQUVGLENBQUM7QUExS0Q7SUFBQyxpQkFBVSxFQUFFOztlQUFBO0FBQ0EsbUJBQVcsY0F5S3ZCLENBQUEiLCJmaWxlIjoic2VydmljZXMvaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XHJcbmltcG9ydCB7UkVDSVBFX0xJU1R9IGZyb20gXCIuLi9tb2NrL3JlY2lwZS1saXN0XCI7XHJcbmltcG9ydCB7Q1VTVE9NRVJJTlBVVH0gZnJvbSBcIi4uL21vY2svY3VzdG9tZXItaW5wdXRcIjtcclxuaW1wb3J0IHtBTExFUkdFTl9MSVNUfSBmcm9tIFwiLi4vbW9jay9hbGxlcmdlbi1saXN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSBcclxue1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblx0LyoqXHJcblx0KiBDcmVhdGVzIHRoZSBwcm9wZXIgaGVhZGVyIHRvIGdhaW4gYWNjZXNzIHRvIGFyYW5nby5cclxuXHQqIFRydWUgYXV0aGVudGljYXRpb24geWV0IHRvIGJlIHN0YXJ0ZWQuXHJcblx0Ki9cclxuXHRjcmVhdGVBdXRob3JpemF0aW9uSGVhZGVyKGhlYWRlcnM6SGVhZGVycykgXHJcblx0XHR7XHJcblx0ICAgIFx0aGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArXHJcblx0ICAgICAgXHRcdGJ0b2EoJ3dlYmRldjphJTVpKm90IScpKTsgXHJcblx0ICBcdH1cclxuXHQvKipcclxuXHQqIE1haW4gU2VhcmNoIHF1ZXJ5IGJhc2VkIG9uIHRoZSBpbmdyZWRpZW50cyB0aGUgcmVjaXBlIGNvbnRhaW5zLiBcclxuXHQqIHRha2VzIHRoZSBpbnB1dGVkIHNlYXJjaCB0ZXJtIHB1c2hlZCBmcm9tIHRoZSBnZXRfcmVjaXBlLmNvbXBvbmVudFxyXG5cdCovIFxyXG5cdGdldFBvc3RzKGlucHV0OnN0cmluZyk6IE9ic2VydmFibGU8YW55PiBcclxuXHRcdHtcclxuXHRcdGxldCBrOm51bWJlciA9IDA7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRsZXQgcmVjaXBlT2JqZWN0OiBBcnJheTxSZWNpcGU+O1xyXG5cdFx0dmFyIHVybD0gJ2h0dHA6Ly9zdGFnZS53ZWJzZXJ2aWNlcy5zYWNmb29kLmNvb3A6ODUyOS9fZGIvc25mYy9zbmZjRW5kUG9pbnRzL2Zvb2RzZXJ2aWNlL3JlY2lwZXMtaW5ncmVkaWVudHMvJyArIGlucHV0O1xyXG4gICAgXHR0aGlzLmNyZWF0ZUF1dGhvcml6YXRpb25IZWFkZXIoaGVhZGVycyk7XHJcblxyXG4gICAgXHQvLyByZXR1cm5zIHRoZSBxdWVyeSBcclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwse2hlYWRlcnM6aGVhZGVyc30pXHJcblx0XHRcclxuXHRcdC8vIG1hcHMgdGhlIHJlc3BvbnNlIG9iamVjdCB0byBhIGpzb24gb2JqZWN0XHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHQvLyBtYXBzIHRoZSBsYXJnZSBvYmplY3QgaW50byBtdWx0aXBsZSBzbWFsbGVyIG9iamVjdHMgY29udGFpbmVkIGluIHRoZSBcclxuXHRcdC8vIHJlY2lwZSBtb2RlbFxyXG5cdFx0Lm1hcCgocmVjaXBlczogQXJyYXk8YW55PikgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0OkFycmF5PFJlY2lwZT4gPSBbXTtcclxuXHRcdFx0aWYgKHJlY2lwZXMpIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmVjaXBlcy5mb3JFYWNoKChyZWNpcGUpID0+IFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFxyXG5cdFx0XHRcdFx0XHRuZXcgUmVjaXBlKHJlY2lwZS5SZWNpcGUsXHJcblx0XHRcdFx0XHRcdFx0cmVjaXBlLlBMVSxcclxuXHRcdFx0XHRcdFx0XHRyZWNpcGUuSW5ncmVkaWVudENvdW50LFxyXG5cdFx0XHRcdFx0XHRcdHJlY2lwZS5JbmdyZWRpZW50c1xyXG5cdFx0XHRcdFx0XHRcdCkpO1xyXG5cdFx0XHRcdCBrKys7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gY2xlYXJzIHRoZSByZXN1bHRzIGZyb20gcHJldmlvdXMgc2VhcmNoXHJcblx0XHR0aGlzLmNsZWFyUmVzdWx0cygpXHJcblx0XHQvLyBzYXZlcyB0aGUgY3VzdG9tZXJzIGlucHV0IHRvIGxvY2FsIGNhY2hlXHJcblx0XHRDVVNUT01FUklOUFVUWzBdID0gaW5wdXQ7XHJcblx0XHQvLyBzb3J0cyB0aGUgcmVzdWx0cyBiYXNlZCBvbiB0aGUgbmFtZSBvZiB0aGUgcmVjaXBlXHJcblx0XHRyZXN1bHQuc29ydChmdW5jdGlvbihhLGIpIFxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoYS5SZWNpcGUgPCBiLlJlY2lwZSlcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdGVsc2UgaWYgKGEuUmVjaXBlID4gYi5SZWNpcGUpXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9KTtcclxuXHRcdC8vIHNhdmVzIHRoZSBjdXJyZW50IHNldCBvZiBqc29uIG9iamVjdHNcclxuXHRcdHRoaXMuc2F2ZVJlc3VsdHMocmVzdWx0KTtcclxuXHRcdC8vIGlmIGxhcmdlciB0aGFuIDEgcmVzdWx0IGNvbmR1Y3QgZHVwbGljYXRlIGNoZWNrXHJcblx0XHRpZihrPjEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVsZXRlRHVwbGljYXRlKGspO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnJldHVyblJlc3VsdHMoKTtcclxuXHRcdH0pIFxyXG5cdH1cclxuXHQvKipcclxuXHQqIHNhdmVzIHRoZSByZXN1bHRzIG9mIHRoZSBjdXJyZW50IHNlYXJjaCB0byBsb2NhbCBzdG9yYWdlLlxyXG5cdCovXHJcblx0c2F2ZVJlc3VsdHMoaW5wdXQ6IGFueSkgXHJcblx0e1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoUkVDSVBFX0xJU1QsIGlucHV0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogbnVsbHMgdGhlIHByZXZpb3VzbHkgc2VhcmNoZWQgcmVzdWx0cyBzdGFydGluZyBhdCBlbGVtZW50IDAgdG8gMTAwMCBcclxuXHQqL1xyXG5cdGNsZWFyUmVzdWx0cygpXHJcblx0e1xyXG5cdFx0UkVDSVBFX0xJU1Quc3BsaWNlKDAsIDEwMDApO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQqIGFmdGVyIHRoZSBxdWVyeSBoYXMgYmVlbiBzb3J0ZWQsIFRoaXMgbWV0aG9kIGxvb3BzIHRocm91Z2ggdGhlIFxyXG5cdCogb2JqZWN0IGFycmF5IGFuZCBkZWxldGVzIGFueSBkdXBsaWNhdGUgcmVjaXBlcy5cclxuXHQqL1xyXG5cdGRlbGV0ZUR1cGxpY2F0ZShrOm51bWJlcilcclxuXHR7XHJcblx0XHRsZXQgajpudW1iZXI9MDtcclxuXHRcdGRvXHJcblx0XHR7XHJcblx0XHRcdGlmKFJFQ0lQRV9MSVNUW2pdLlJlY2lwZSA9PT0gUkVDSVBFX0xJU1RbaisxXS5SZWNpcGUpXHJcblx0XHRcdHtcdFxyXG5cdFx0XHRcdFJFQ0lQRV9MSVNULnNwbGljZShqLCAxKTtcclxuXHRcdFx0XHRrLS07XHJcblx0XHRcdH1cclxuXHRcdFx0aisrO1xyXG5cdFx0fXdoaWxlKGogPCBrLTEpO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIFNhdmVzIHRoZSB0aGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIHJlY2lwZXMgYWxvbmcgd2l0aCB0aGUgYm9vbGVhblxyXG5cdCogdmFsdWUgdGhhdCB0ZXN0cyB3aGV0aGVyIG9yIG5vdCBhIGl0ZW0gaGFkIGJlZW4gc2VsZWN0ZWQuXHJcblx0Ki9cclxuXHRzYXZlU2VsZWN0ZWRSZWNpcGUoaTpudW1iZXIsIHRlc3Q6Ym9vbGVhbilcclxuXHR7XHJcblx0XHRDVVNUT01FUklOUFVUWzFdID0gaTtcclxuXHRcdENVU1RPTUVSSU5QVVRbMl0gPSB0ZXN0O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiByZXR1cm5zIHRoZSBjdXN0b21lcnMgc2VhcmNoIHRlcm0gdG8gdGhlIGlucHV0IGZpZWxkLlxyXG5cdCovXHJcblx0cmV0dXJuQ3VzdG9tZXJJbnB1dCgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIENVU1RPTUVSSU5QVVRbMF07IC8vIFNlYXJjaCB0ZXJtXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSByZWNpcGUgdGhlIGN1c3RvbWVyIGhhZCBzZWxlY3RlZC5cclxuXHQqL1xyXG5cdHJldHVyblNlbGVjdGVkUmVjaXBlSW5kZXgoKSBcclxuXHR7XHJcblx0XHRyZXR1cm4gQ1VTVE9NRVJJTlBVVFsxXTsgLy8gSW5kZXggb2Ygc2VsZWN0ZWQgcmVjaXBlXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIHJldHVybnMgdGhlIHRlc3Qgb2Ygd2hldGhlciBhIGN1c3RvbWVyIGhhcyBzZWxlY3RlZCBhIHJlY2lwZS5cclxuXHQqL1xyXG5cdHJldHVyblNlbGVjdGlvblRlc3QoKVxyXG5cdHtcclxuXHRcdHJldHVybiBDVVNUT01FUklOUFVUWzJdOyAvLyBTZWxlY3Rpb24gdGVzdCBib29sZWFuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIHJldHVybnMgc2F2ZWQgcmVjaXBlIHNlYXJjaC5cclxuXHQqL1xyXG5cdHJldHVyblJlc3VsdHMoKSBcclxuXHR7XHJcblx0XHRyZXR1cm4gUkVDSVBFX0xJU1Q7XHJcblx0fVxyXG5cclxuXHRzYXZlQWxsZXJnZW5JbmZvKGl0ZW06YW55KVxyXG5cdHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBBTExFUkdFTl9MSVNULmxlbmd0aDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCBpdGVtID09IEFMTEVSR0VOX0xJU1RbaV0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRBTExFUkdFTl9MSVNULnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0QUxMRVJHRU5fTElTVC5wdXNoKGl0ZW0pO1xyXG5cdFx0Y29uc29sZS5sb2coQUxMRVJHRU5fTElTVCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5BbGxlcmdlbkluZm8oKVxyXG5cdHtcclxuXHRcdHJldHVybiBBTExFUkdFTl9MSVNUO1xyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
