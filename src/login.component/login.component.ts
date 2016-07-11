import {Component} from '@angular/core';
import {ControlGroup} from "@angular/common";
import {FormBuilder} from "@angular/common";
import {Validators} from "@angular/common";
import {Control} from "@angular/common";

@Component({
	template:`


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
})

export class LoginComponent{
	loginForm: ControlGroup;
	constructor(fb: FormBuilder) { 
		this.loginForm = fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit(value: Object): void {
		console.log(value.value);
	}


}