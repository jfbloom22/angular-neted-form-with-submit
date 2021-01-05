import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactForm: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phoneNumber: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(contactForm) {
    //check console
    console.log(contactForm);
  }
}
