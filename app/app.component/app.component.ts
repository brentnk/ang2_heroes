import {Component} from 'angular2/core';
import {HeroService} from '../services/hero.service';
import {HeroesComponent} from '../heroes.component/heroes.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component/app.component.html',
    directives: [HeroesComponent],
    providers: [HeroService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}