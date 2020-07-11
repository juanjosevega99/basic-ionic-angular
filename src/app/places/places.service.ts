import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/240px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/240px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      title: 'Eiffel Tower',
      id: '3',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/240px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      title: 'Test without comments',
      id: '4',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/240px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }
  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }
  addPlace(title: string, imageURL: string) {
    this.places.push({
      id: this.places.length + 1 + "",
      title,
      imageURL,
      comments: []
    })
  }
  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
