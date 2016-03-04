import {Injectable} from 'angular2/core';

@Injectable()
export class ProdService {
    getRandomWorkOrders(cc: number) {
        return Promise.resolve(this.genWO(cc));
    }
    
    private genWO(cc: number) {
        if (cc < 1)
        { return []; }
        let arr: string[] = [];
        for (var i = 0; i < cc; i++) {
            arr[i] = "WO-" + Math.trunc(Math.random() * 899999 + 100000);
        }
        return arr;
    }
}

// 100000 - 999999