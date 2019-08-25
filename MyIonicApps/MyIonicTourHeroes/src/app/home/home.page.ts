import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Ulrich' },
  { id: 12, name: 'Lyon' },
  { id: 13, name: 'Maite' },
  { id: 14, name: 'Tommy' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}