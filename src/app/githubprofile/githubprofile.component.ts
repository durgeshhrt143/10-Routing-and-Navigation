import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.scss']
})
export class GithubprofileComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) {
    console.log('construtor call');
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.route.paramMap.subscribe(param => {

      let get = param.get('id');
      let getAll = param.getAll('username');
      let has = param.has('id');

      console.log(`get:${get} getAll:${getAll} has:${has} param:`, param);
    })
  }
  ngOnDestroy() {
    console.log('ngOnDestroy call');
  }

}
