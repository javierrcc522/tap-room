import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select class="select" (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Empty Kegs</option>
      <option value="incompleteKegs" selected="selected">Kegs</option>
    </select>
    <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.name}} {{currentKeg.brewery}} <img src='{{currentKeg.graphic}}'>
        <button class="button" (click)="editKeg(currentKeg)">Edit!</button>
        <button class="button-delete" (click)="deleteKeg(currentKeg)">Delete!</button>
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteButtonClickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteKegs";

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      console.log("This keg is empty!");
    } else {
      console.log("This keg is still going. Better sell more beer!");
    }
  }

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  deleteKeg(kegToDelete: Keg) {
    this.deleteButtonClickSender.emit(kegToDelete);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleEmpty(clickedKeg: Keg, setCompleteness: boolean) {
    clickedKeg.empty = setCompleteness;
  }


}
