import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EditComment, Comment} from "../../models/posts.models";
import {CommentService} from "../../services/comment-service/comment.service";
import {ActivatedRoute} from "@angular/router";
import {findIndex} from "rxjs";

@Component({
  selector: 'comment-card',
  templateUrl: 'comment.card.component.html',
  styleUrls: ['comment.card.component.css'],
  providers: [CommentService]
})
export class CommentCard implements OnInit{
  editComment: EditComment = {
  _id:'',
  body: '',
};

@Input()
  comments: Comment[] = [];
  @Input()
  // @ts-ignore
  comment: Comment;
  constructor(private commentService: CommentService, private route: ActivatedRoute) {
  }

  @ViewChild('heroEditInput')
  set commentEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {

  }

  deleteComment(comment: Comment): void {
    const postId = String(this.route.snapshot.paramMap.get('id'));
    this.commentService
      .deleteComment(postId, comment._id)
      .subscribe();
    // @ts-ignore
    this.comments = this.comments.filter(c => c !== comment);
  }

  edit(editComment: EditComment) {
    this.update(editComment);
  }

  update(editComment: EditComment) {
    const postId = String(this.route.snapshot.paramMap.get('id'));
      this.commentService
        .updateComment(postId, editComment._id, this.editComment)
        .subscribe(comment => {
          const ix = comment ? this.comments.findIndex(c => c._id === comment._id) : -1;
          if (ix > -1) {
            // @ts-ignore
            this.comments[ix] = comment;
          }
        });
      // @ts-ignore
    this.editComment = undefined;
    }
}
