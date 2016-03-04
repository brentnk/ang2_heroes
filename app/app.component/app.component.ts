import {Component} from 'angular2/core';
import {HeroService} from '../services/hero.service';
import {HeroesComponent} from '../heroes.component/heroes.component';
import {DashboardComponent} from '../dashboard.c/dashboard.c';
import {HeroDetailComponent} from '../hero-detail.component/hero-detail.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component/app.component.html',
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
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}