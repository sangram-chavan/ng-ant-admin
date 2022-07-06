import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzModalRef} from "ng-zorro-antd/modal";
import {Observable, of} from "rxjs";
import {fnCheckForm} from "@utils/tools";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit {
  validateForm!: FormGroup;
  passwordVisible = false;
  compirePasswordVisible = false;

  constructor(private modalRef: NzModalRef, private fb: FormBuilder,) {
  }

  get newPassword() {
    return this.validateForm.get('newPassword');
  }

  protected getCurrentValue(): Observable<any> {
    if (!fnCheckForm(this.validateForm)) {
      return of(false);
    }
    return of(this.validateForm.value);
  }

  confirmationValidator = (control: FormControl): { [s: string]: any } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['newPassword'].value) {
      return { message: '两次输入密码不一致', error: true };
    }
    return {};
  };

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls['sureNewPassword'].updateValueAndValidity());
  }

  initForm(): void {
    this.validateForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      sureNewPassword: [null, [Validators.required, this.confirmationValidator]],

    });
  }

  ngOnInit(): void {
    this.initForm();
  }

}
