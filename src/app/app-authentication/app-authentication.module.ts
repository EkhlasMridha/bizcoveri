import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './components/sigin/sigin.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';
import { AuthGuardService } from '../shared-services/route-guards/auth-guard.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TopToolbarModule } from '../shared-modules/top-toolbar/top-toolbar.module';
import { BizcoverTitleModule } from '../shared-modules/bizcover-title/bizcover-title.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";

const routes: Routes = [
  {
    path: 'signin',
    component: SiginComponent,
    data: {
      breadCrumb: 'SignIn',
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      breadCrumb: 'SignUp',
    },
    canActivate: [AuthGuardService],
  },
  {
    path: "signup-detail",
    component: SignupFormComponent,
    data: {
      breadCrumb: "Signup Info"
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      breadCrumb: 'Password reset',
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      breadCrumb: 'Forgot password',
    },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [
    SiginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    SignupFormComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes),
    FormsMaterialModule,
    TopToolbarModule,
    BizcoverTitleModule,
    MatFormFieldModule,
    NgxMatIntlTelInputModule
  ],
})
export class AppAuthenticationModule { }
