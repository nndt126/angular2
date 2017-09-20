import { Component, ViewChild } from '@angular/core';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-demo></my-demo>
  <button (click)="changeName()" >Change name</button>
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
  @ViewChild(DemoComponent)
  private demoComponent: DemoComponent;
  changeName() {
    this.demoComponent.setName('Changed name');
  }
}
