import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../../services/post-service/posts.service";
import {Post} from "../../models/posts.models";
import { Router, ActivatedRoute } from '@angular/router';
import {Store} from '@ngrx/store'
import {Observable, Subscription} from "rxjs";
import { map } from 'rxjs/operators';
import {State} from "../../store/posts/post.reducer";
// import {Input} from "@angular/core";
import * as fromApp from '../../store/app.reducer';
import {getPostsList} from "../../store/posts/post.actions";

// import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'posts-page',
  templateUrl: 'news.feed.page.html',
  providers: [PostsService],
  styleUrls: ['news.feed.page.css']
})
export class NewsFeedPage implements OnInit{

  // @ts-ignore
  postsList: Post[] = [];
  // @ts-ignore
  subscription: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>,
  ) {}


  ngOnInit() {

    this.getPosts()
  }
  public getPosts() {
    this.store.dispatch(getPostsList());
    this.subscription = this.store
      .select('postsList')
      .pipe(map(postState => postState))
      .subscribe((posts: Post[]) => {
        this.postsList = posts;
        console.log(this.postsList)
      });

  }
}




