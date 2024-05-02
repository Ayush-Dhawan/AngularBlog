import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredPosts !: Array<Object>;
  constructor(private postService : PostService){
    this.postService.loadData().subscribe(val => this.featuredPosts = val)
  }

}
