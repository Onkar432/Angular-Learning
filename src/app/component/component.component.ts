import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  displayName: string = '';

  getname(Name: string) {
    console.log(Name);
    this.displayName = Name; // Use "this" to access the class property
  }
}
