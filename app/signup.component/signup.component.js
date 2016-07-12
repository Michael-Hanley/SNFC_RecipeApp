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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBdUMzQztJQUVDLHlCQUFZLEVBQWU7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzVCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQzFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBQyxpQkFBaUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9DRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUMsMmxEQWlDUjtTQUNELENBQUM7O3VCQUFBO0lBZUYsc0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHVCQUFlLGtCQWMzQixDQUFBO0FBQ0Qsa0JBQWtCLFdBQW1CLEVBQUUsa0JBQTBCO0lBQ2hFLE1BQU0sQ0FBQyxVQUFDLEtBQW1CO1FBQzFCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDO2dCQUNOLG1CQUFtQixFQUFFLElBQUk7YUFDekIsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDLENBQUE7QUFDRixDQUFDIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6YFxyXG5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTMgY29sLXhzLTBcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cclxuXHRcdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cInJlZ2lzdGVyRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChyZWdpc3RlckZvcm0pXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGVAZG9tYWluLmNvbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWF4bGVuZ3RoPVwiMTAwXCIgaWQ9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0W25nRm9ybUNvbnRyb2xdPVwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydlbWFpbCddXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3R0b20tc3BhY2VyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5FbnRlciBQYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiAgbWF4bGVuZ3RoPVwiMTAwXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFtuZ0Zvcm1Db250cm9sXT1cInJlZ2lzdGVyRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiICNjb25maXJtUGFzc3dvcmQ9J25nRm9ybScgaWQ9XCJjb25maXJtUGFzc3dvcmRcIiAgbWF4bGVuZ3RoPVwiMTAwXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0W25nRm9ybUNvbnRyb2xdPVwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiPlxyXG5cdFx0XHRcdFx0ICAgIDxicj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2ICpuZ0lmPVwiY29uZmlybVBhc3N3b3JkLmNvbnRyb2wudG91Y2hlZFwiPlxyXG5cdFx0XHRcdFx0ICAgIFx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwicmVnaXN0ZXJGb3JtLmhhc0Vycm9yKCdtaXNtYXRjaGVkUGFzc3dvcmRzJylcIj5QYXNzd29yZHMgZG8gbm90IG1hdGNoLjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGJyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBib3gtc2hhZG93LS0yZHBcIiBbZGlzYWJsZWRdPVwiIXJlZ2lzdGVyRm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudHtcclxuXHRyZWdpc3RlckZvcm06IENvbnRyb2xHcm91cDtcclxuXHRjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHsgXHJcblx0XHR0aGlzLnJlZ2lzdGVyRm9ybSA9IGZiLmdyb3VwKHtcclxuXHRcdFx0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuXHRcdH0sIHsgdmFsaWRhdG9yOiBhcmVFcXVhbCgncGFzc3dvcmQnLCdjb25maXJtUGFzc3dvcmQnKX0pO1xyXG5cdH1cclxuXHRvblN1Ym1pdCh2YWx1ZTogT2JqZWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gYXJlRXF1YWwocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuXHRyZXR1cm4gKGdyb3VwOiBDb250cm9sR3JvdXApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuXHRcdGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuXHRcdGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xyXG5cclxuXHRcdGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
