import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cities = [
    {Id : 1, Name : 'HaNoi'},
    {Id : 2, Name : 'TpHCM'},
  ];
  onSubmit(value: any) {
    console.log(value);
  }
}
