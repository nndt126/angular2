import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-demo></my-demo>
  
  /* Demo two way binding */
  <br/>
  <input type="text" [(ngModel)] = "fname" />
  <input type="text" [(ngModel)] = "lname" />
  <br/>
  Full name : {{fname}} {{lname}}
  `,
})
export class AppComponent {
  public name = 'Angular';
}
