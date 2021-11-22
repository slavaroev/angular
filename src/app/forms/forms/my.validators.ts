import { FormControl } from "@angular/forms";

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} | null {
    if (['q@mail.ru', 'w@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }
}
