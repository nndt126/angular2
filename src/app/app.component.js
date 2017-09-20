"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var demo_component_1 = require("./demo.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent.prototype.changeName = function () {
        this.demoComponent.setName('Changed name');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(demo_component_1.DemoComponent),
    __metadata("design:type", demo_component_1.DemoComponent)
], AppComponent.prototype, "demoComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hello {{name}}</h1>\n  <my-demo></my-demo>\n  <button (click)=\"changeName()\" >Change name</button><br/>\n  <br/>\n  /**\n   * Demo two way binding\n   */ \n  <br/>\n  <br/>\n  <input type=\"text\" [(ngModel)] = \"fname\" />\n  <input type=\"text\" [(ngModel)] = \"lname\" />\n  <br/>\n  Full name : {{fname}} {{lname}}<br/>\n  <br/>\n  /**\n   * customPipes in custom.pipe.ts\n   */\n  <p>2^10 : {{2 | customPipes:10}}</p>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map