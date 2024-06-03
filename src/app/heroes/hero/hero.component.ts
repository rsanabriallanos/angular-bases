import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:  string = "ironman"
  public age:   number = 45;

  get capitalizedName() : string {
    // return "Hola mundo".toUpperCase();
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name : string) : void {
    this.name = name;
  }

  changeAge(age : number) : void {
    this.age = age;
  }

  reset() : void {
    this.name = "ironman";
    this.age = 45;
  }


}
