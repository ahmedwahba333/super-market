import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() product:Card ={
  createdAt: "",
  name: "",
  image: "",
  rate: 0,
  count: 0,
  description: "",
  price: 0,
  reviews: [],
  id: 0
}
constructor(private router:Router){

}

redirectToAddToCart(){
  this.router.navigate(["/add-to-cart",this.product.id])
}
}
