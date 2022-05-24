import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page.not.found.component'
import {UserLogInPage} from "./pages/user-login/user.login.page";
import {UserSignUpPage} from "./pages/user-signup/user.signup.page";
import {NewsFeedPage} from "./pages/news-feed/news.feed.page";
import {AddPostPage} from "./pages/add-post/add.post.page";
import {EditPostPage} from "./pages/edit-post/edit.post.page";
import {PostInfoPage} from "./pages/post-info/post.info.page";
import {AddCommentComponent} from "./components/add-comment-card/add.comment.component";
import {UserInfoPage} from "./pages/user-page/user-page.component";
import {EditUserPageComponent} from "./pages/edit-user-page/edit-user-page.component";
import {ChangePassPage} from "./pages/change-pass/change.pass.page";

const appRoutes: Routes = [
  {path: 'posts', component: NewsFeedPage},
  {path: 'log-in', component: UserLogInPage},
  {path: 'sign-up', component: UserSignUpPage},
  {path: 'user-info', component: UserInfoPage},
  {path: 'edit-user/:id', component: EditUserPageComponent},
  {path: 'change-password/:id', component: ChangePassPage},
  {path: 'add-post', component: AddPostPage},
  {path: 'edit-post/:id', component: EditPostPage},
  {path: 'post/:id', component: PostInfoPage },
  {path: 'add-comment', component: AddCommentComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
