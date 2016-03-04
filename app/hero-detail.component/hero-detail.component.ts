import {Component, OnInit} from 'angular2/core'
import {Hero} from '../interfaces/hero.ts'
import {RouteParams} from 'angular2/router';
import {HeroService} from '../services/hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/hero-detail.component/main.html',
    styleUrls: ['./app/hero-detail.component/hero-detail.component.css'],
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    goBack() {
        window.history.back();
    }

    ngOnInit() {
        let id = +this._routeParams.get('id'); //convert a string to a num with (+)
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}