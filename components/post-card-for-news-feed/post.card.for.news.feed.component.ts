import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/posts.models';
import { PostsService } from '../../services/post-service/posts.service';


@Component({
  selector: 'post-card-for-news-feed',
  templateUrl: 'post.card.for.news.feed.component.html',
  providers: [PostsService],
  styleUrls: ['post.card.for.news.feed.component.css']
})
export class PostCardForNewsFeedComponent implements OnInit {

  @Input()
    // @ts-ignore
  post: Post ;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
  }

  delete(post: Post): void {
    this.postsService
      .deletePost(post._id)
      .subscribe();
  }
}
