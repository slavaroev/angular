import {
  FormControl,
  ValidationErrors
} from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
  static restritedEmails(control: FormControl): ValidationErrors | null {
    if (['q@mail.ru', 'w@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null;
  }

  static uniqEmails(control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'e@mail.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
