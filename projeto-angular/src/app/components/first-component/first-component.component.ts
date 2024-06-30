import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Bruno'
  age: number = 19
  job = 'Development'
  hobbies = ['Correr', ' Jogar', ' Série']
  car = {
    name: 'Golf',
    year: 2019,
  }

}
