import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'subscription-drop-down-component',
  templateUrl: 'subscription.drop.down.component.html',
  styleUrls: ['subscription.drop.down.component.css'],
})
export class SubscriptionDropDownComponent {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}

