import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier !');
  }
}