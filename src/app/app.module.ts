import { routes } from './app.routes';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(router: Router) {
    router.events
      .subscribe(e => console.log(e));
  }

}
