import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubfollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        { path: 'followers/:id/:username', component: GithubprofileComponent },
        { path: 'followers', component: GithubfollowersComponent },
        { path: 'posts', component: PostsComponent },
        { path: '', component: HomeComponent },
        { path: '**', component: NotfoundComponent },

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
