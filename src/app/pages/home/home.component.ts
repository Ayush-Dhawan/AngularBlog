import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private postService : PostService){
    this.postService.loadData().subscribe(val => console.log(val))
  }

}
