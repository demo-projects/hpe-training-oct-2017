import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <h1>Sign In</h1>
    <form>
      <div>
        <input type="text" placeholder="username">
      </div>
      <div>
        <input type="password" placeholder="password">
      </div>
      <button>sign in</button>
    </form>
  `,
  styles: []
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
