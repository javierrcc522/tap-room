import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Empty Kegs</option>
      <option value="incompleteKegs" selected="selected">Kegs</option>
    </select>
    <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness">{{currentKeg.name}} {{currentKeg.brewery}}
        <button (click)="editKeg(currentKeg)">Edit!</button>
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
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

  pintColor(currentKeg){
    if (currentKeg.pints <= 1){
      return "bg-danger";
    } else if (currentKeg.pints <= 64) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleEmpty(clickedKeg: Keg, setCompleteness: boolean) {
    clickedKeg.empty = setCompleteness;
  }


}
