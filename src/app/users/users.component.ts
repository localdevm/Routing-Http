import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users

  constructor(private dataservice: PostsService) { }

  ngOnInit() {
    
  }

  private getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data
    },
  error => {
    this.users = error
  })

  }
}
