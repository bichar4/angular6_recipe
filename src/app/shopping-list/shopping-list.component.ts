
import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  ingredients:Ingredient[] = [
    new Ingredient('apple',5),
    new Ingredient('tomato',5)

  ]
  constructor() { }

  ngOnInit() {
  }

}
