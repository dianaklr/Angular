import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPosts, IUser} from "../../interfaces";
import * as url from "url";
import {urls} from "../../configs";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:IPosts[];

  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    // this.postServices.getAll().subscribe(value => this.posts = value)
    this.postServices.getAll().subscribe(value => this.posts = value)
    // this.postServices.getAll().subscribe(value => this.users = value)
  }

}
