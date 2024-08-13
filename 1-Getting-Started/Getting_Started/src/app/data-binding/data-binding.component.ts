import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  addItem() {
    this.listOfItems.push({ item: this.item, deadline: this.deadline });
    console.log(this.listOfItems);
  }
  listOfItems: { item: string; deadline: Date }[] = [];
  item: string = '';
  deadline: any;
}
