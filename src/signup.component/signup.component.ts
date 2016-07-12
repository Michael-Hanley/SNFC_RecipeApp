import {Component} from '@angular/core';
import {ControlGroup} from '@angular/common';
import {FormBuilder} from "@angular/common";
import {Validators} from "@angular/common";
import {Control} from "@angular/common";

@Component({
	template:`


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
})
export class SignupComponent{
	registerForm: ControlGroup;
	constructor(fb: FormBuilder) { 
		this.registerForm = fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, { validator: areEqual('password','confirmPassword')});
	}
	onSubmit(value: Object): void {
		console.log(value.value);
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
}