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
const forms_1 = require("@angular/forms");
const off_click_directive_1 = require("../shared/off-click.directive");
let LoginComponent = class LoginComponent {
    constructor() {
        this.showDiv = false;
        this.myForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?")]),
            'password': new forms_1.FormControl('', forms_1.Validators.required),
        });
    }
    toggleDiv($event) {
        $event.stopPropagation();
        console.log("toggle div");
        this.showDiv = !this.showDiv;
    }
    clickedOutside() {
        console.log("clicked outside");
        this.showDiv = true;
    }
    onSubmit() {
        console.log(this.myForm);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, off_click_directive_1.default],
        template: `
		<div class="col-lg-4 col-sm-3 col-xs-0"></div>
		<div class="col-lg-4 col-sm-6 col-xs-12">
			<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
				<div>
					<div class="form-group">
						<label for="Email">Email</label>
						<input type="text"
							class="form-control"
							id="email"
							formControlName="email">
						<div [hidden]="myForm.find('email').valid || myForm.find('email').pristine" class="alert alert-danger">
							Invalid Email
						</div>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password"
							class="form-control"
							id="password"
							formControlName="password">
					</div>
				</div>
				<button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
			<form>

	`,
    }), 
    __metadata('design:paramtypes', [])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx3QkFBMkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RixzQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQWdDOUQ7SUFJQztRQUZBLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFHdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDM0IsT0FBTyxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyw0SkFBNEosQ0FBQyxDQUFDLENBQUM7WUFDck8sVUFBVSxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFNO1FBRVgsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELGNBQWM7UUFFVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVKLFFBQVE7UUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBQ0YsQ0FBQztBQTNERDtJQUFDLGdCQUFTLENBQUM7UUFDVixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsRUFBRSw2QkFBaUIsQ0FBQztRQUN6RCxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJSO0tBQ0QsQ0FBQzs7a0JBQUE7QUFFVyxzQkFBYyxpQkE0QjFCLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgT2ZmQ2xpY2tEaXJlY3RpdmUgZnJvbSBcIi4uL3NoYXJlZC9vZmYtY2xpY2suZGlyZWN0aXZlXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIE9mZkNsaWNrRGlyZWN0aXZlXSxcclxuXHR0ZW1wbGF0ZTpgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTMgY29sLXhzLTBcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cclxuXHRcdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiRW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgW2hpZGRlbl09XCJteUZvcm0uZmluZCgnZW1haWwnKS52YWxpZCB8fCBteUZvcm0uZmluZCgnZW1haWwnKS5wcmlzdGluZVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0SW52YWxpZCBFbWFpbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0PGZvcm0+XHJcblxyXG5cdGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XHJcblx0bXlGb3JtOiBGb3JtR3JvdXA7XHJcblx0c2hvd0Rpdjpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0J2VtYWlsJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKFwiW0EtWmEtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLltBLVphLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OltBLVphLXowLTktXSpbQS1aYS16MC05XSk/XFwuKStbQS1aYS16MC05XSg/OltBLVphLXowLTktXSpbQS1aYS16MC05XSk/XCIpXSksXHJcblx0XHRcdCdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZURpdigkZXZlbnQpXHJcblx0e1xyXG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlIGRpdlwiKTtcclxuICAgICAgdGhpcy5zaG93RGl2ID0gIXRoaXMuc2hvd0RpdjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xpY2tlZE91dHNpZGUoKVxyXG5cdHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgb3V0c2lkZVwiKTtcclxuICAgICAgICB0aGlzLnNob3dEaXYgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHRvblN1Ym1pdCgpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
