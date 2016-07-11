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
var LoginComponent = (function () {
    function LoginComponent(fb) {
        this.loginForm = fb.group({
            email: ['', common_2.Validators.required],
            password: ['', common_2.Validators.required],
        });
    }
    LoginComponent.prototype.onSubmit = function (value) {
        console.log(value.value);
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n\n\n\t\t<div class=\"col-lg-4 col-sm-3 col-xs-0\"></div>\n\t\t<div class=\"col-lg-4 col-sm-6 col-xs-12\">\n\t\t\t<form [ngFormModel]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">User Name</label>\n\t\t\t\t\t<input type=\"email\" placeholder=\"Example@domain.com\" class=\"form-control\" maxlength=\"100\" id=\"email\" \n\t\t\t\t\t[ngFormControl]=\"loginForm.controls['email']\">\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"bottom-spacer\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Enter Password</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" id=\"password\"  maxlength=\"100\" placeholder=\"Password\"\n\t\t\t\t\t\t[ngFormControl]=\"loginForm.controls['password']\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-primary box-shadow--2dp\" [disabled]=\"!loginForm.valid\">Submit</button>\n\t\t\t</form>\n\t\t</div>\n\n\t",
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQThCM0M7SUFFQyx3QkFBWSxFQUFlO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBdENGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBQyxzOUJBdUJSO1NBQ0QsQ0FBQzs7c0JBQUE7SUFnQkYscUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHNCQUFjLGlCQWMxQixDQUFBIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6YFxyXG5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTMgY29sLXhzLTBcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cclxuXHRcdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cImxvZ2luRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChsb2dpbkZvcm0pXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPlVzZXIgTmFtZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlQGRvbWFpbi5jb21cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1heGxlbmd0aD1cIjEwMFwiIGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFtuZ0Zvcm1Db250cm9sXT1cImxvZ2luRm9ybS5jb250cm9sc1snZW1haWwnXVwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxicj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm90dG9tLXNwYWNlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+RW50ZXIgUGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgIG1heGxlbmd0aD1cIjEwMFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRbbmdGb3JtQ29udHJvbF09XCJsb2dpbkZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYm94LXNoYWRvdy0tMmRwXCIgW2Rpc2FibGVkXT1cIiFsb2dpbkZvcm0udmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XHJcblx0bG9naW5Gb3JtOiBDb250cm9sR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7IFxyXG5cdFx0dGhpcy5sb2dpbkZvcm0gPSBmYi5ncm91cCh7XHJcblx0XHRcdGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25TdWJtaXQodmFsdWU6IE9iamVjdCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUudmFsdWUpO1xyXG5cdH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
