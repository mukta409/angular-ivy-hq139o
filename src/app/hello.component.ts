import { Component, Input } from '@angular/core';
import { ServiceTest } from './servicetest';

@Component({
  selector: 'hello',
  template: '<button type="button" (click)="TestMethod()">TestMethod</button>',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor(private dependencyInjectionTest: ServiceTest) {}

  TestMethod() {
    this.dependencyInjectionTest.Test1(this.name);
  }
}
