import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct= [
      { id: "123",
        title: "Green Jacket",
        description: "product description.....",
        price: 12,
        quantity: 0,
        nbrLike: 2,
        category: 'category1',
        picture: 'assets/jacket.jpg'},
      { id: "89",
        title: "Low Dunk Nike",
        description: "product description.....",
        price: 100,
        quantity: 10,
        nbrLike: 2,
        category: 'category1',
        picture: 'assets/shoes2.png'},
      {id: "15",
        title: "Another Nike",
        description: "product description.....",
        price: 134,
        quantity: 2,
        nbrLike: 0,
        category: 'category1',
        picture: 'assets/shoes2.png'}
    ]
  }
 like(p:Product){
    let i = this.listProduct.indexOf(p);
    this.listProduct[i].nbrLike++;
 }
}
