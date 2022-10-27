import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces";
import {urls} from "../../configs";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  // http:httpClient;
  constructor(private userServices: UserService) {
  }

  ngOnInit(): void {
    this.userServices.getAll().subscribe(value => this.users=value)
  }

  // getAllUsers():void{
  //   this.httpClient.get<IUser[]>(urls.users).subscribe(value => this.users = value)
  // }
}


