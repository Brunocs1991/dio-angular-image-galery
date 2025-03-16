import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../services/image-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-galery',
  imports: [FormsModule, CommonModule],
  templateUrl: './image-galery.component.html',
  styleUrl: './image-galery.component.css'
})
export class ImageGaleryComponent implements OnInit {
  images: any[] = []
  searchTerm: string = ''

  constructor(private imageDataService: ImageDataService) { }

  ngOnInit(): void {
    this.images = this.imageDataService.getImages()
  }

  filterImages() {
    if (!this.searchTerm) {
      return this.images
    }
    return this.images.filter(image => image.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
}

