import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './../models/post'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  newTitle:string = '';
  newThought:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(form:NgForm): void{
    // console.log('submitted')
    const newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newPost);
  }
}
