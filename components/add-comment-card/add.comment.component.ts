import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Comment} from '../../models/posts.models';
import {CommentService} from '../../services/comment-service/comment.service'


@Component({
  selector: 'add-comment-card',
  templateUrl: 'add.comment.component.html',
  providers: [CommentService],
  styleUrls: ['add.comment.component.css']
})
export class AddCommentComponent implements OnInit {
  comments: Comment[] = [];
  // @ts-ignore
  comment: Comment = {
    body:''
  };
  submitted = false;

  constructor(private postsService: CommentService, private route: ActivatedRoute) {}

  addComment(): void {
    const newComment = {
      body: this.comment.body
    }
    const postId = String(this.route.snapshot.paramMap.get('id'));
    // @ts-ignore
    this.postsService.addComment(postId, newComment).subscribe({
      next: (res) => {
        console.log(res)
        this.submitted = true;
      }
    })
  }

  ngOnInit(): void {}
}


