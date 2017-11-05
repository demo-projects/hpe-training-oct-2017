import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SignInComponent}
    ])
  ],
  declarations: [LoginComponent, SignInComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
