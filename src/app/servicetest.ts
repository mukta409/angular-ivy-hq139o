import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceTest {
  Test1(name: any) {
    console.log('Dependency Injection Service Test1 ' + name);
  }
  constructor() {}
}
