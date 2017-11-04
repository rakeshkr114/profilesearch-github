import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id='1e1b2131c798517266a7';
    private client_secret='1db6408881788fe0aa2c7b42cb23a9871ea323fa';

    constructor(private _http:Http){
        console.log('Github service ready...');
        this.username="rakeshkr114";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res=>res.json());
    }
}