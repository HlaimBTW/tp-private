import { Component, ElementRef } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  showComment = false;
  constructor(private el: ElementRef) {}

  Clicked = false;
  notClicked = true;
  posts = Posts;

  change_icon() {
    this.Clicked = !this.Clicked;
  }

  show_comment() {
    this.showComment = !this.showComment;
  }
}
