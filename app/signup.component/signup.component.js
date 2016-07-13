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
let SignupComponent = class SignupComponent {
    constructor() {
        this.myForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?")]),
            'password': new forms_1.FormControl('', forms_1.Validators.required),
            'confirmPassword': new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    onSubmit() {
        console.log(this.myForm);
    }
};
SignupComponent = __decorate([
    core_1.Component({
        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
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
					<div class="form-group">
						<label for="confirmPassword">Confirm Password</label>
						<input type="password"
							class="form-control"
							id="confirmPassword"
							formControlName="confirmPassword">
						<div *ngIf="myForm.value.confirmPassword !== myForm.value.password" 
							class="alert alert-danger">
								Password do not Match
						</div>
					</div>
				</div>
				<button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
			<form>
	`,
    }), 
    __metadata('design:paramtypes', [])
], SignupComponent);
exports.SignupComponent = SignupComponent;
/*
    registerForm: ControlGroup;
    constructor(fb: FormBuilder) {
        this.registerForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: areEqual('password','confirmPassword')});
    }
    onSubmit(value: Object): void {
        console.log(value);
    }


}
function areEqual(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): { [key: string]: any } => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
} */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHdCQUEyRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBMEM1RjtJQUdDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDM0IsT0FBTyxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyw0SkFBNEosQ0FBQyxDQUFDLENBQUM7WUFDck8sVUFBVSxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEQsaUJBQWlCLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUMzRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7QUFDRixDQUFDO0FBdkREO0lBQUMsZ0JBQVMsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1FBQ3RDLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0NSO0tBQ0QsQ0FBQzs7bUJBQUE7QUFDVyx1QkFBZSxrQkFlM0IsQ0FBQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCSSIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50L3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG5cdHRlbXBsYXRlOmBcclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tMyBjb2wteHMtMFwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG5cdFx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJFbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBbaGlkZGVuXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpLnZhbGlkIHx8IG15Rm9ybS5maW5kKCdlbWFpbCcpLnByaXN0aW5lXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRJbnZhbGlkIEVtYWlsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybVBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImNvbmZpcm1QYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwiY29uZmlybVBhc3N3b3JkXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJteUZvcm0udmFsdWUuY29uZmlybVBhc3N3b3JkICE9PSBteUZvcm0udmFsdWUucGFzc3dvcmRcIiBcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmQgZG8gbm90IE1hdGNoXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50e1xyXG5cdG15Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdCdlbWFpbCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihcIltBLVphLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bQS1aYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbQS1aYS16MC05LV0qW0EtWmEtejAtOV0pP1xcLikrW0EtWmEtejAtOV0oPzpbQS1aYS16MC05LV0qW0EtWmEtejAtOV0pP1wiKV0pLFxyXG5cdFx0XHQncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG5cdFx0XHQnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCgpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG5cdH1cclxufVxyXG5cclxuLypcclxuXHRyZWdpc3RlckZvcm06IENvbnRyb2xHcm91cDtcclxuXHRjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHsgXHJcblx0XHR0aGlzLnJlZ2lzdGVyRm9ybSA9IGZiLmdyb3VwKHtcclxuXHRcdFx0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRjb25maXJtUGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuXHRcdH0sIHsgdmFsaWRhdG9yOiBhcmVFcXVhbCgncGFzc3dvcmQnLCdjb25maXJtUGFzc3dvcmQnKX0pO1xyXG5cdH1cclxuXHRvblN1Ym1pdCh2YWx1ZTogT2JqZWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gYXJlRXF1YWwocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuXHRyZXR1cm4gKGdyb3VwOiBDb250cm9sR3JvdXApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuXHRcdGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuXHRcdGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xyXG5cclxuXHRcdGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufSAqLyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
