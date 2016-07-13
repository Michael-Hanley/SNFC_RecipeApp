import {Component} from '@angular/core';
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators} from "@angular/forms";
import OffClickDirective from "../shared/off-click.directive";
@Component({
	directives: [REACTIVE_FORM_DIRECTIVES, OffClickDirective],
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
				</div>
				<button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
			<form>

	`,
})

export class LoginComponent{
	myForm: FormGroup;
	showDiv:boolean = false;

	constructor() {
		this.myForm = new FormGroup({
			'email': new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?")]),
			'password': new FormControl('', Validators.required),
		});
	}

	toggleDiv($event)
	{
      $event.stopPropagation();
      console.log("toggle div");
      this.showDiv = !this.showDiv;
    }
    
    clickedOutside()
	{
        console.log("clicked outside");
        this.showDiv = true;
    }

	onSubmit()
	{
		console.log(this.myForm);
	}
}