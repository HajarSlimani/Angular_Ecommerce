import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products = [
    { id: 1, name: 'Produit 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produit 2', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produit 3', price: 300, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Produit 4', price: 400, image: 'https://via.placeholder.com/150' },
  ];

  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}