import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {AddPost, Post} from '../../models/posts.models';
import { PostsService } from '../../services/post-service/posts.service';

@Component({
  selector: 'add-post-card',
  templateUrl: 'add.post.component.html',
  providers: [PostsService],
  styleUrls: ['add.post.component.css']
})
export class AddPostComponent implements OnInit {
  posts: Post[] = [];
  post: AddPost = {
    title: 'Your post title',
    body:'Your post body'
  };
  submitted = false;

  constructor(private postsService: PostsService, private router: Router) {}

  addPost(): void {
    const newPost = {
      title: this.post.title,
      body: this.post.body
    }
   this.postsService.addPost(newPost).subscribe({
       next: (res) => {
         console.log(res)
         this.submitted = true;
         this.router.navigate(['/posts']);
       }
     })
    }

  ngOnInit(): void {}
  }


