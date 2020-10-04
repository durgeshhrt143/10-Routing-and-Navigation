import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import "rxjs/add/observable/combineLatest";
@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.scss']
})
export class GithubfollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  backToHome() {
    alert('test');
    this.router.navigate(['/post'], { queryParams: { page: 1, order: 'newest' } });
  }
  ngOnInit(): void {
    // Observable.combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
    //   combined => {
    //     let id = combined[0].get('id');
    //     let page = combined[1].get('page');
    //     let order = combined[1].get('order');

    //   }
    // )
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    })
  }

}
