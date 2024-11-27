import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  constructor(@Inject(UserService) private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log('Response from Get Users', res);
        this.userList = res;
      },
      error: (error) => {
        console.log('error from API', error);
      },
    });
  }
  deleteUsers(id: number) {
    if (confirm('ARE YOU SURE YOU WANT TO DELETE THIS USER?')) {
      this.userService.deleteUser(id).subscribe({
        next: (res) => {
          console.log('Response', res);
          const index = this.userList.findIndex((x) => x.id === id);
          this.userList.splice(index, 1);
        },
        error: (error) => {
          console.log('error', error);
        },
      });
    }
  }
}
