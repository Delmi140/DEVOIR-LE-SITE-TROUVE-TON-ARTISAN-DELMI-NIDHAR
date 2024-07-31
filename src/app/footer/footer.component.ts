import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  faStar = faStar;
  faLocationDot = faLocationDot;
  faPhone = faPhone;

}
