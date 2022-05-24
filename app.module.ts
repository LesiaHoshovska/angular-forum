import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarBasicExample} from './components/nav-bar/nav.bar.component'
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatInputModule} from "@angular/material/input";

import {AuthInterceptor} from './utils/interseptors/auth.interseptor'
import {NewsFeedPage} from "./pages/news-feed/news.feed.page";
import {SubscriptionDropDownComponent} from "./components/subscription-drop-down/subscription.drop.down.component";
import {PostCardForNewsFeedComponent} from "./components/post-card-for-news-feed/post.card.for.news.feed.component";
import {TagDropDownComponent} from "./components/tag-drop-down/tag.drop.down.component";
import {UserLogInPage} from "./pages/user-login/user.login.page";
import {UserSignUpPage} from './pages/user-signup/user.signup.page'
import {PageNotFoundComponent} from "./components/page-not-found/page.not.found.component";
import { HttpErrorHandler } from './services/error-handler/http-error-handler.service';
import { MessageService } from './services/error-handler/message.service';
import {AddPostComponent} from "./components/add-post-card/add.post.component";
import {AddPostBtnComponent} from './components/add-post-btn/add.post.btn.component'
import {AddPostPage} from "./pages/add-post/add.post.page";
import {EditPostPage} from "./pages/edit-post/edit.post.page";
import {EditPostComponent} from "./components/edit-post-card/edit.post.component";
import {PostInfoPage} from "./pages/post-info/post.info.page";
import {PostCardInfoComponent} from "./components/post-card-info/post.card.info.component";
import {CommentCard } from './components/comment-card/comment.card.component'
import {ProgressSpinner} from "./components/spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AddCommentComponent} from "./components/add-comment-card/add.comment.component";
import {UserSignUpComponent} from "./components/user-signup/user.signup.component";
import {UserLoginComponent} from "./components/user-login/user.login.component";
import {LogOutBtnComponent} from "./components/log-out-btn/log.out.btn";
import { UserCardComponent } from './components/user-card/user-card.component';
import { EditUserCardComponent } from './components/edit-user-card/edit-user-card.component';
import { ChangePassCardComponent } from './components/change-pass-card/change-pass-card.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import {UserInfoPage} from "./pages/user-page/user-page.component";
import { ChangePassPage} from './pages/change-pass/change.pass.page';
import {PostsService} from "./services/post-service/posts.service";
import * as fromApp from "./store/app.reducer"
import {PostEffects} from "./store/posts/post.effects";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarBasicExample,
    NewsFeedPage,
    SubscriptionDropDownComponent,
    PostCardForNewsFeedComponent,
    TagDropDownComponent,
    UserLogInPage,
    UserSignUpPage,
    PageNotFoundComponent,
    UserSignUpComponent,
    AddPostComponent,
    AddPostBtnComponent,
    AddPostPage,
    EditPostPage,
    EditPostComponent,
    PostInfoPage,
    PostCardInfoComponent,
    CommentCard,
    ProgressSpinner,
    AddCommentComponent,
    UserLoginComponent,
    LogOutBtnComponent,
    UserCardComponent,
    EditUserCardComponent,
    ChangePassCardComponent,
    UserInfoPage,
    EditUserPageComponent,
    ChangePassPage,

  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PostsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
