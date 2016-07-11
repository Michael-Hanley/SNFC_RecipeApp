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
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var SignupComponent = (function () {
    function SignupComponent(fb) {
        this.registerForm = fb.group({
            email: ['', common_2.Validators.required],
            password: ['', common_2.Validators.required],
            confirmPassword: ['', common_2.Validators.required]
        }, { validator: areEqual('password', 'confirmPassword') });
    }
    SignupComponent.prototype.onSubmit = function (value) {
        console.log(value.value);
    };
    SignupComponent = __decorate([
        core_1.Component({
            template: "\n\n\n\t\t<div class=\"col-lg-4 col-sm-3 col-xs-0\"></div>\n\t\t<div class=\"col-lg-4 col-sm-6 col-xs-12\">\n\t\t\t<form [ngFormModel]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t<input type=\"email\" placeholder=\"Example@domain.com\" class=\"form-control\" maxlength=\"100\" id=\"email\" \n\t\t\t\t\t[ngFormControl]=\"registerForm.controls['email']\">\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"bottom-spacer\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Enter Password</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" id=\"password\"  maxlength=\"100\" placeholder=\"Password\"\n\t\t\t\t\t\t[ngFormControl]=\"registerForm.controls['password']\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"confirmPassword\">Confirm Password</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" #confirmPassword='ngForm' id=\"confirmPassword\"  maxlength=\"100\" placeholder=\"Confirm Password\"\n\t\t\t\t\t\t[ngFormControl]=\"registerForm.controls['confirmPassword']\">\n\t\t\t\t\t    <br>\n\t\t\t\t\t    <div *ngIf=\"confirmPassword.control.touched\">\n\t\t\t\t\t    \t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"registerForm.hasError('mismatchedPasswords')\">Passwords do not match.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-primary box-shadow--2dp\" [disabled]=\"!registerForm.valid\">Submit</button>\n\t\t\t</form>\n\t\t</div>\n\n\t",
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
function areEqual(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBdUMzQztJQUVDLHlCQUFZLEVBQWU7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQzFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9DRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsMmxEQWlDUjtTQUNELENBQUM7O3VCQUFBO0lBZUYsc0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHVCQUFlLGtCQWMzQixDQUFBO0FBQ0Qsa0JBQWtCLFdBQW1CLEVBQUUsa0JBQTBCO0lBQ2hFLE1BQU0sQ0FBQyxVQUFDLEtBQW1CO1FBQzFCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDO2dCQUNOLG1CQUFtQixFQUFFLElBQUk7YUFDekIsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDLENBQUE7QUFDRixDQUFDIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTpgXHJcblxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tMyBjb2wteHMtMFwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG5cdFx0XHQ8Zm9ybSBbbmdGb3JtTW9kZWxdPVwicmVnaXN0ZXJGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KHJlZ2lzdGVyRm9ybSlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRXhhbXBsZUBkb21haW4uY29tXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBtYXhsZW5ndGg9XCIxMDBcIiBpZD1cImVtYWlsXCIgXHJcblx0XHRcdFx0XHRbbmdGb3JtQ29udHJvbF09XCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJvdHRvbS1zcGFjZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPkVudGVyIFBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiICBtYXhsZW5ndGg9XCIxMDBcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0W25nRm9ybUNvbnRyb2xdPVwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjb25maXJtUGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgI2NvbmZpcm1QYXNzd29yZD0nbmdGb3JtJyBpZD1cImNvbmZpcm1QYXNzd29yZFwiICBtYXhsZW5ndGg9XCIxMDBcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRbbmdGb3JtQ29udHJvbF09XCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCI+XHJcblx0XHRcdFx0XHQgICAgPGJyPlxyXG5cdFx0XHRcdFx0ICAgIDxkaXYgKm5nSWY9XCJjb25maXJtUGFzc3dvcmQuY29udHJvbC50b3VjaGVkXCI+XHJcblx0XHRcdFx0XHQgICAgXHQ8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCJyZWdpc3RlckZvcm0uaGFzRXJyb3IoJ21pc21hdGNoZWRQYXNzd29yZHMnKVwiPlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YnI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJveC1zaGFkb3ctLTJkcFwiIFtkaXNhYmxlZF09XCIhcmVnaXN0ZXJGb3JtLnZhbGlkXCI+U3VibWl0PC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50e1xyXG5cdHJlZ2lzdGVyRm9ybTogQ29udHJvbEdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikgeyBcclxuXHRcdHRoaXMucmVnaXN0ZXJGb3JtID0gZmIuZ3JvdXAoe1xyXG5cdFx0XHRlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdFx0cGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG5cdFx0fSwgeyB2YWxpZGF0b3I6IGFyZUVxdWFsKCdwYXNzd29yZCcsJ2NvbmZpcm1QYXNzd29yZCcpfSk7XHJcblx0fVxyXG5cdG9uU3VibWl0KHZhbHVlOiBPYmplY3QpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cclxufVxyXG5mdW5jdGlvbiBhcmVFcXVhbChwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG5cdHJldHVybiAoZ3JvdXA6IENvbnRyb2xHcm91cCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG5cdFx0bGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG5cdFx0bGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XHJcblxyXG5cdFx0aWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
