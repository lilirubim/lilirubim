import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    const backend = 'https://fakestoreapi.com/users';
    this.httpClient.get<User[]>(backend).subscribe(usersBackend => this.users = usersBackend);
  }

}
