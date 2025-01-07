import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaviconsService {

  constructor() { }
  navIconsArr=[
    {
      id:1,
      path:'../../assets/images/notificationIcon.webp'
    },
    {
      id:2,
      path:'../../assets/images/global.png'
    },
    {
      id:3,
      path:'../../assets/images/user.jpg'
    }
  ]
}
