import { Component } from '@angular/core';
import { Img } from '../img';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  img_link = Img;
}
