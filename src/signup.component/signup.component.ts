import {Component} from '@angular/core';
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators} from "@angular/forms";

@Component({
	directives: [REACTIVE_FORM_DIRECTIVES],
	template:`
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
})
export class SignupComponent{
	myForm: FormGroup;

	constructor() {
		this.myForm = new FormGroup({
			'email': new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?")]),
			'password': new FormControl('', Validators.required),
			'confirmPassword': new FormControl('', Validators.required)
		});
	}

	onSubmit()
	{
		console.log(this.myForm);
	}
}

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