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
const common_1 = require("@angular/common");
const common_2 = require("@angular/common");
let LoginComponent = class LoginComponent {
    constructor(fb) {
        this.loginForm = fb.group({
            email: ['', common_2.Validators.required],
            password: ['', common_2.Validators.required],
        });
    }
    onSubmit(value) {
        console.log(value);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        template: `


		<div class="col-lg-4 col-sm-3 col-xs-0"></div>
		<div class="col-lg-4 col-sm-6 col-xs-12">
			<form [ngFormModel]="loginForm" (ngSubmit)="onSubmit(loginForm)">
				<div class="form-group">
					<label for="email">User Name</label>
					<input type="email" placeholder="Example@domain.com" class="form-control" maxlength="100" id="email" 
					[ngFormControl]="loginForm.controls['email']">
				</div>
				<br>
				<div class="bottom-spacer">
					<div class="form-group">
						<label for="password">Enter Password</label>
						<input class="form-control" type="password" id="password"  maxlength="100" placeholder="Password"
						[ngFormControl]="loginForm.controls['password']">
					</div>
				</div>
				<button class="btn btn-primary box-shadow--2dp" [disabled]="!loginForm.valid">Submit</button>
			</form>
		</div>

	`,
    }), 
    __metadata('design:paramtypes', [common_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx5QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx5QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQThCM0M7SUFFQyxZQUFZLEVBQWU7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUdGLENBQUM7QUF6Q0Q7SUFBQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCUjtLQUNELENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBYzFCLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50L2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTpgXHJcblxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tMyBjb2wteHMtMFwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG5cdFx0XHQ8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibG9naW5Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGxvZ2luRm9ybSlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+VXNlciBOYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkV4YW1wbGVAZG9tYWluLmNvbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbWF4bGVuZ3RoPVwiMTAwXCIgaWQ9XCJlbWFpbFwiIFxyXG5cdFx0XHRcdFx0W25nRm9ybUNvbnRyb2xdPVwibG9naW5Gb3JtLmNvbnRyb2xzWydlbWFpbCddXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3R0b20tc3BhY2VyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5FbnRlciBQYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiAgbWF4bGVuZ3RoPVwiMTAwXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFtuZ0Zvcm1Db250cm9sXT1cImxvZ2luRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBib3gtc2hhZG93LS0yZHBcIiBbZGlzYWJsZWRdPVwiIWxvZ2luRm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0YCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudHtcclxuXHRsb2dpbkZvcm06IENvbnRyb2xHcm91cDtcclxuXHRjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHsgXHJcblx0XHR0aGlzLmxvZ2luRm9ybSA9IGZiLmdyb3VwKHtcclxuXHRcdFx0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCh2YWx1ZTogT2JqZWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
