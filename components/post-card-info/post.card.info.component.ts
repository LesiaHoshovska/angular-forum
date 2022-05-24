import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Post, Comment } from '../../models/posts.models';
import { PostsService } from '../../services/post-service/posts.service';


@Component({
  selector: 'post-card-info',
  templateUrl: 'post.card.info.component.html',
  providers: [PostsService],
  styleUrls: ['post.card.info.component.css']
})
export class PostCardInfoComponent implements OnInit{
  // @ts-ignore
  post: Post ;
  // @ts-ignore
  commentsList: Comment[];


  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.postsService.getPost(id)
      .subscribe(post => {this.post = post;
      this.commentsList = this.post.commentIds});
  }

  deletePost(): void {
    this.postsService
      .deletePost(this.post._id)
      .subscribe( {
        next: (res) => {
          console.log(res)
          this.router.navigate(['/posts']);
        }
      });
  }

}
