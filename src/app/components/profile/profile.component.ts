import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any[];
  constructor(private _githubservice:GithubService){
    this._githubservice.getUser().subscribe(user => {
        this.user=user;
    })
 }

  ngOnInit() {
  }

}
