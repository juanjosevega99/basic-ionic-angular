import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  
  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(recipeId)
    })
  }

}
