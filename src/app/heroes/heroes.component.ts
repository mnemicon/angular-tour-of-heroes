import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
/* import { MessageService } from '../message.service'; POISTO OSASSA 5.*/
/* import { HEROES } from '../mock-heroes'; POISTO OSASSA 4 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
/*   heroes = HEROES; POISTO OSASSA 4. */
/*   selectedHero?: Hero;  POISTO OSASSA 5. */ 
  heroes: Hero[] = [];

/*   constructor(private heroService: HeroService, private messageService: MessageService) { } */  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
/*   onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }   POISTO OSASSA 5. */  

  getHeroes(): void {
/*     this.heroes = this.heroService.getHeroes();  MUUTETTU OSASSA 4. */  
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

/*   hero: Hero = {
    id: 1,
    name: 'Windshield'
  }; */
}