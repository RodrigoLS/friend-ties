import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { MainComponent } from './pages/main/main.component';
import { FeedComponent } from './pages/main/feed/feed.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { FriendsComponent } from './pages/main/friends/friends.component';
import { SearchComponent } from './pages/main/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  { path: 'dashboard', component: MainComponent, children: 
    [
      { path: '', component: FeedComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'search', component: SearchComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
