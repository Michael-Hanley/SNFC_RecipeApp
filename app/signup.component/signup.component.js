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
let SignupComponent = class SignupComponent {
    constructor(fb) {
        this.registerForm = fb.group({
            email: ['', common_2.Validators.required],
            password: ['', common_2.Validators.required],
            confirmPassword: ['', common_2.Validators.required]
        }, { validator: areEqual('password', 'confirmPassword') });
    }
    onSubmit(value) {
        console.log(value);
    }
};
SignupComponent = __decorate([
    core_1.Component({
        template: `


		<div class="col-lg-4 col-sm-3 col-xs-0"></div>
		<div class="col-lg-4 col-sm-6 col-xs-12">
			<form [ngFormModel]="registerForm" (ngSubmit)="onSubmit(registerForm)">
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" placeholder="Example@domain.com" class="form-control" maxlength="100" id="email" 
					[ngFormControl]="registerForm.controls['email']">
				</div>
				<br>
				<div class="bottom-spacer">
					<div class="form-group">
						<label for="password">Enter Password</label>
						<input class="form-control" type="password" id="password"  maxlength="100" placeholder="Password"
						[ngFormControl]="registerForm.controls['password']">
					</div>
				</div>
					<div class="form-group">
						<label for="confirmPassword">Confirm Password</label>
						<input class="form-control" type="password" #confirmPassword='ngForm' id="confirmPassword"  maxlength="100" placeholder="Confirm Password"
						[ngFormControl]="registerForm.controls['confirmPassword']">
					    <br>
					    <div *ngIf="confirmPassword.control.touched">
					    	<div class="alert alert-danger" role="alert" *ngIf="registerForm.hasError('mismatchedPasswords')">Passwords do not match.</div>
						</div>
						<br>
					</div>
				<button class="btn btn-primary box-shadow--2dp" [disabled]="!registerForm.valid">Submit</button>
			</form>
		</div>

	`,
    }), 
    __metadata('design:paramtypes', [common_1.FormBuilder])
], SignupComponent);
exports.SignupComponent = SignupComponent;
function areEqual(passwordKey, confirmPasswordKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHlCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHlCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBdUMzQztJQUVDLFlBQVksRUFBZTtRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDMUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxRQUFRLENBQUMsS0FBYTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7QUFHRixDQUFDO0FBbEREO0lBQUMsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUNSO0tBQ0QsQ0FBQzs7bUJBQUE7QUFDVyx1QkFBZSxrQkFjM0IsQ0FBQTtBQUNELGtCQUFrQixXQUFtQixFQUFFLGtCQUEwQjtJQUNoRSxNQUFNLENBQUMsQ0FBQyxLQUFtQjtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6RCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQztnQkFDTixtQkFBbUIsRUFBRSxJQUFJO2FBQ3pCLENBQUM7UUFDSCxDQUFDO0lBQ0YsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50L3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOmBcclxuXHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS0zIGNvbC14cy0wXCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhzLTEyXCI+XHJcblx0XHRcdDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJyZWdpc3RlckZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQocmVnaXN0ZXJGb3JtKVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFeGFtcGxlQGRvbWFpbi5jb21cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG1heGxlbmd0aD1cIjEwMFwiIGlkPVwiZW1haWxcIiBcclxuXHRcdFx0XHRcdFtuZ0Zvcm1Db250cm9sXT1cInJlZ2lzdGVyRm9ybS5jb250cm9sc1snZW1haWwnXVwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxicj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm90dG9tLXNwYWNlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+RW50ZXIgUGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgIG1heGxlbmd0aD1cIjEwMFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRbbmdGb3JtQ29udHJvbF09XCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiAjY29uZmlybVBhc3N3b3JkPSduZ0Zvcm0nIGlkPVwiY29uZmlybVBhc3N3b3JkXCIgIG1heGxlbmd0aD1cIjEwMFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFtuZ0Zvcm1Db250cm9sXT1cInJlZ2lzdGVyRm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIj5cclxuXHRcdFx0XHRcdCAgICA8YnI+XHJcblx0XHRcdFx0XHQgICAgPGRpdiAqbmdJZj1cImNvbmZpcm1QYXNzd29yZC5jb250cm9sLnRvdWNoZWRcIj5cclxuXHRcdFx0XHRcdCAgICBcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cInJlZ2lzdGVyRm9ybS5oYXNFcnJvcignbWlzbWF0Y2hlZFBhc3N3b3JkcycpXCI+UGFzc3dvcmRzIGRvIG5vdCBtYXRjaC48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxicj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYm94LXNoYWRvdy0tMmRwXCIgW2Rpc2FibGVkXT1cIiFyZWdpc3RlckZvcm0udmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnR7XHJcblx0cmVnaXN0ZXJGb3JtOiBDb250cm9sR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7IFxyXG5cdFx0dGhpcy5yZWdpc3RlckZvcm0gPSBmYi5ncm91cCh7XHJcblx0XHRcdGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdFx0Y29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcblx0XHR9LCB7IHZhbGlkYXRvcjogYXJlRXF1YWwoJ3Bhc3N3b3JkJywnY29uZmlybVBhc3N3b3JkJyl9KTtcclxuXHR9XHJcblx0b25TdWJtaXQodmFsdWU6IE9iamVjdCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2codmFsdWUpO1xyXG5cdH1cclxuXHJcblxyXG59XHJcbmZ1bmN0aW9uIGFyZUVxdWFsKHBhc3N3b3JkS2V5OiBzdHJpbmcsIGNvbmZpcm1QYXNzd29yZEtleTogc3RyaW5nKSB7XHJcblx0cmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcblx0XHRsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XHJcblx0XHRsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuXHJcblx0XHRpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
