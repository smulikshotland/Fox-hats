import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() hat: any;


  constructor(private route: ActivatedRoute,
    private listService: ListService,
    private location: Location
  ) { }

 

  ngOnInit(): void {
   
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.hat = this.listService.getHat(id)
    // this.listService.getHat(id)
    //   .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }



}
