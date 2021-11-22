import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MyValidators } from "./my.validators";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      console.log(formData);
    }
  }

  setCapital() {
    const capitalMap = {
      ru: 'Moscow',
      by: 'Minsk',
      ua: 'Kyev'
    };
    const cityKey: string = this.form.get('address')?.get('country')?.value;
    // @ts-ignore
    const city = capitalMap[cityKey];
    this.form.patchValue({address: { city }});
  }

  addSkills() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
}
