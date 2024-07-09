import { Component ,Input} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  faStar = faStar;

  @Input() rating: number = 0;
  @Input() readonly: boolean = false;

  setRating(value: number){
    if (this.readonly){return;
    }


    this.rating = value;
  }

}
