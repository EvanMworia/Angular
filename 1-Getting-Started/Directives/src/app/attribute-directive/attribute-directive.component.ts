import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  deletePerson(i: number) {
    console.log(i);
  }
  addPerson() {
    this.listOfPeople.push({ Name: this.Name, Age: +this.Age });
    console.log(this.listOfPeople);
  }

  listOfPeople: { Name: string; Age: number }[] = [];
  Name = '';
  Age = '';
}
