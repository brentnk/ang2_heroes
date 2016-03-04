import {Component, OnInit} from 'angular2/core';
import {Hero} from '../interfaces/hero';
import {HeroDetailComponent} from '../hero-detail.component/hero-detail.component'
import {HeroService} from '../services/hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/heroes.component/heroes.component.html',
    styleUrls: ['./app/heroes.component/style.css'],
    directives: [HeroDetailComponent],
    providers: []
})

export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedhero: Hero;
    public heroes: Hero[];
    
    constructor(private _heroService: HeroService) { }
    
    onSelect(hero: Hero) { this.selectedhero = hero; }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }
} 

