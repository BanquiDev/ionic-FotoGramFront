import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  slidesOpts = {
    allowSlideNext:false,
    allowSlidePrevious:false
  }
  
  @Input() post: Post = {};

  

  constructor() { }

  ngOnInit() {}

  
}
