import { Component, VERSION } from '@angular/core';
import { ServiceTest } from './servicetest';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceTest],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
