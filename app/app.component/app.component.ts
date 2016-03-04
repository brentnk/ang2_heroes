import {Component} from 'angular2/core';
import {HeroService} from '../services/hero.service';
import {HeroesComponent} from '../heroes.component/heroes.component';
import {DashboardComponent} from '../dashboard.c/dashboard.c';
import {HeroDetailComponent} from '../hero-detail.component/hero-detail.component';
import {ProdComponent} from '../prod.c/prod.c';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component/app.component.html',
    styleUrls: ['./app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
        ]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/genwos/',
        name: 'GenWOs',
        component: ProdComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}