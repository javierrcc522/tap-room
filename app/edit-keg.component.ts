import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div class="row">
    <div id="edit-keg-div">
      <div *ngIf="childSelectedKeg">
        <h3>{{childSelectedKeg.name}}</h3>
        <p>Keg Empty? {{childSelectedKeg.empty}}</p>
        <p>Pints left: {{childSelectedKeg.pints}}</p><button class="button" (click)="pintsRemovedFromKeg()" (click)="childSelectedKeg.volume()">Sell a Pint</button>
        <p>Alcohol Content: {{childSelectedKeg.alcoholContent}} %</p>
        <p>Price: $ {{childSelectedKeg.price}} per pint</p>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
        <br>

        <label>Enter Keg Brewery:</label>
        <input [(ngModel)]="childSelectedKeg.brewery">
        <label>Enter Keg Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
        <label>Enter Keg Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholContent">
        <label>Enter Keg Pints:</label>
        <input [(ngModel)]="childSelectedKeg.pints">
        <button class="button" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  pintsRemovedFromKeg() {
    this.childSelectedKeg.pints -= 1;
    if(this.childSelectedKeg.pints <= 10) {
      this.childSelectedKeg.empty = true;
    }
  }
}
