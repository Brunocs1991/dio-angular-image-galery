import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageGaleryComponent } from './image-galery/image-galery.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageGaleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'image-galery';
}
