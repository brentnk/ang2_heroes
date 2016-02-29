import {Component} from 'angular2/core'
import {Hero} from '../interfaces/hero.ts'

@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/hero-detail.component/main.html',
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero: Hero;
 }