import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  results: Observable<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.results = this.userService.getUsers();
  }

}
