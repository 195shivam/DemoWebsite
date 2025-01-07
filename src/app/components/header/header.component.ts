import { Component } from '@angular/core';
import { NaviconsService } from 'src/app/services/navicons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public navIcon: NaviconsService) {}
  handleClick($event: any) {
    // console.log($event.target.id)
    switch ($event.target.id) {
      case '1':
        alert('You have clicked on notification icon');
        break;
      case '2':
        alert('You have clicked global icon')
        break;
      case '3':
        alert('You have clicked profile icon')
    }
  }
}
