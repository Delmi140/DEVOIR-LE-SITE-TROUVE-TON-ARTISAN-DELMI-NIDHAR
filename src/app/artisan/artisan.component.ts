import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Iartisan } from '../artisan';
import { PostService } from '../post.service';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit{

  productId: any;

  public artisan: any  = <Iartisan> {};

  postData = {
    Nom: '',
    Objet: '',
    Message:''
  };


 




  
  
 
 constructor(private activated: ActivatedRoute,private dataService: DataService,private service:PostService ) {}
 
 ngOnInit(): void {
   this.productId = this.activated.snapshot.paramMap.get('id');

   this.dataService.getArtisans().subscribe((artisans:Iartisan [])=>{
    this.artisan = artisans.find(artisan => artisan.id === this.productId);

   }) 

 }

 createPost() {
  this.service.createPost(this.postData);
  alert('mail envoyé avec succès');
  console.log(this.postData)

}


}


