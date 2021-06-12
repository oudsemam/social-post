import { Component, OnInit } from '@angular/core';
import { Post } from './../models/post'

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css'],
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    { title: 'title1', thought: 'thought1' },
    { title: 'title2', thought: 'thought2' },
  ];

  showThoughtForm: boolean = false;
  constructor() {}

  ngOnInit(): void {}


  addNewThought():void{
    this.showThoughtForm = true;
  }

  onSubmit(newPost: Post){
    this.showThoughtForm = false;
    this.posts.unshift(newPost);
  }

  onDelete(i:number){
    this.posts.splice(i, 1);
  }
}
