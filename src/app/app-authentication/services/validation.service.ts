import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor (private http: HttpClient) { }

  isUserNameAvailable(username: string) {
    return this.http.get(`identity/username/${username}`).pipe(
      debounceTime(500),
      map((nameExists: boolean) => {
        if (nameExists) {
          return {
            isExists: true,
          };
        }
        return null;
      })
    );
  }

  isEmailExists(email: string) {
    return this.http.get(`identity/email/${email}`).pipe(
      debounceTime(500),
      map((emailExists: boolean) => {
        if (emailExists) {
          return {
            isExists: true,
          };
        }
        return null;
      })
    );
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.mustMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ mustMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  shoudDisable(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      firstControl.valueChanges.subscribe((res) => {
        if (res.length < 6 || firstControl.errors) {
          secondControl.disable({ emitEvent: false, onlySelf: true });
        } else {
          secondControl.enable({ emitEvent: false, onlySelf: true });
        }
      });
    };
  }

  errorMessageHandler(name: string, owner: string) {
    switch (owner) {
      case 'firstname':
        return 'First name is required';
      case 'lastname':
        return 'Last name is required';
      case 'username':
        if (name == 'isExists') {
          return 'User name is already taken';
        } else {
          return 'Enter valid username';
        }
      case 'email':
        if (name == 'isExists') {
          return 'Already has an account with this email';
        } else {
          return 'Enter valid email';
        }
      case 'password':
        if (name == 'required') {
          return 'Password is required';
        } else {
          return 'Must contain both uppercase, lowercase letter and mini length 6, max 12';
        }
      case 'confirmPassword':
        if (name == 'required') {
          return 'Confirm password is required';
        } else {
          return 'Password must be same';
        }
      case 'phone':
        return "Enter valid phone number";
    }
  }
}

