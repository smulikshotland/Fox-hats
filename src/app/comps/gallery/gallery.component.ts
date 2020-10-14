import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private listService: ListService) { }
  hats = []

  ngOnInit(): void {
    this.hats = this.listService.arr1
    // console.log(this.hats);
    // console.log(this.listService.arr1);
    
  }


}


