import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-demo',
    template: '<h2>Hello {{yourName}}</h2>'
})

export class DemoComponent {
    @Input() yourName: string = 'Word';
    setName(name: string) {
        this.yourName = name;
    }
}