import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'tag-drop-down-component',
  templateUrl: 'tag.drop.down.component.html',
  styleUrls: ['tag.drop.down.component.css'],
})
export class TagDropDownComponent {
  tags = new FormControl();
  tagsList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
