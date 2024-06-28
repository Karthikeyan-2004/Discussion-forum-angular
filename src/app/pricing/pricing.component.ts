import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [
    { name: 'Basic Plan', price: '$10/month' },
    { name: 'Standard Plan', price: '$20/month' },
    { name: 'Premium Plan', price: '$30/month' }
  ];

  cart: { name: string, price: string }[] = [];

  addToCart(plan: { name: string, price: string }) {
    this.cart.push(plan);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
}
