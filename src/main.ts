import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-root>
   
  



  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
