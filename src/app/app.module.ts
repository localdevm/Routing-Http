import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { BoomerComponent} from './boomer/boomer.component';
import { SmokerComponent } from './smoker/smoker.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { PostsService} from './posts.service';


const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
   path: 'boomer', component: BoomerComponent
  },
  {
   path: 'smoker', component: SmokerComponent
  },
  {
    path: '**', component: NotfoundComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotfoundComponent,
    SmokerComponent,
    BoomerComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
