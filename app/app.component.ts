import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>The Tap Room</h1>
    <h3>Current Date: {{month}}/{{day}}/{{year}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (deleteButtonClickSender)="deleteKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

   masterKegList: Keg[] = [
    new Keg('Boneyard IPA', 'Boneyard', 5, 6, 124),
    new Keg('Modelo Negra', 'Modelo', 3, 5, 124),
    new Keg('Pilsner', 'Pfreim', 5, 6, 124)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  deleteKeg(kegToDelete) {
    if(kegToDelete === this.selectedKeg){
      this.selectedKeg = null;
    }
    this.masterKegList.splice(this.masterKegList.indexOf(kegToDelete), 1)
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
