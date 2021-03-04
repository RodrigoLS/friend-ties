import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { SendPostComponent } from './components/send-post/send-post.component';
import { CommentComponent } from './components/comment/comment.component';
import { MainComponent } from './pages/main/main.component';
import { FeedComponent } from './pages/main/feed/feed.component';
import { FriendsComponent } from './pages/main/friends/friends.component';
import { SearchComponent } from './pages/main/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    PostComponent,
    SendPostComponent,
    CommentComponent,
    MainComponent,
    FeedComponent,
    FriendsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
