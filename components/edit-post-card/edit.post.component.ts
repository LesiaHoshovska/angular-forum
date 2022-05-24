import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {EditPost} from '../../models/posts.models';
import { PostsService } from '../../services/post-service/posts.service';

@Component({
  selector: 'edit-post-card',
  templateUrl: 'edit.post.component.html',
  providers: [PostsService],
  styleUrls: ['edit.post.component.css']
})
export class EditPostComponent implements OnInit {
  post: EditPost = {
    _id: '',
    title: 'Your post title',
    body:'Your post body'
  };

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.postsService.getPost(id)
      .subscribe(post => this.post = post);
  }

  updatePost(): void {
    this.postsService.updatePost(this.post._id, this.post).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/posts']);
      }
    })
  }
}

