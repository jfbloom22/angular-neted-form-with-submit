import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-child-form",
  templateUrl: "./child-form.component.html",
  styleUrls: ["./child-form.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class ChildFormComponent implements OnInit {
  childForm: any;

  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit() {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      "address",
      new FormGroup({
        streetName: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        pinCode: new FormControl(null, [Validators.required])
      })
    );
  }
}
