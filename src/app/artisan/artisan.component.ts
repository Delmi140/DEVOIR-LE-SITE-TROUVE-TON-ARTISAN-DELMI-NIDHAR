import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit{
  productId: any;
 
  
  
 
 constructor(private activated: ActivatedRoute,) {}
 
 ngOnInit(): void {
   this.productId = this.activated.snapshot.paramMap.get('id')
 
 }
}


