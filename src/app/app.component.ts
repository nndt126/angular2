import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-demo></my-demo>`,
})
export class AppComponent  { name = 'Angular'; }
