import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>Add a new keg to the tap room:</h1>
  <div>
    <label>Name</label>
    <input #newName>
    <label>Brewery</label>
    <input #newBrewery>
    <label>Price</label>
    <input #newPrice>
    <label>Alcohol Content</label>
    <input #newAlcoholContent>
    <label>Total Pints</label>
    <input #newPints>
    <button (click)="submitForm(newName.value, newBrewery.value, newPrice.value, newAlcoholContent.value, newPints.value);">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brewery: string, price: number, alcoholContent: number, pints: number) {
    var newKegToAdd: Keg = new Keg(name, brewery, price, alcoholContent, pints);
    this.newKegSender.emit(newKegToAdd);
  }
}
