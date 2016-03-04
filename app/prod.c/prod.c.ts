import {Component, OnInit} from 'angular2/core';
import {ProdService} from '../services/prod.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'my-prod',
    templateUrl: './app/prod.c/prod.c.html',
    inputs: ['count'],
    providers: [ProdService]
})
export class ProdComponent implements OnInit {
    public workorders: string[];
    
    constructor(
        private _prodService: ProdService,
        private _routeParams: RouteParams) { }
    
    getWorkorders(cc: number) {
        this._prodService.getRandomWorkOrders(cc).then(wos => this.workorders = wos.sort());
    }
    
    ngOnInit() {
        let cc = +this._routeParams.get('count'); //convert a string to a num with (+)
        if(!cc) { cc = 15; }
        this.getWorkorders(cc);
    }
    
}