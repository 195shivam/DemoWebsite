import { Injectable } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { CategoryService } from './category.service';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private category: CategoryService , private search:SearchService) {}
  product = [
    {
      id: 1,
      name: 'Electronic Voucher',
      image: '../../assets/images/electronicVoucher.jpg',
      quantity: 14,
      low_quantity: 10,
      category: 'e-voucher',
      points:42,
      validTill:'04-05-2025'
    },
    {
      id: 2,
      name: 'Lifestyle Voucher',
      image:
        '../../assets/images/lifeStyle.png',
      quantity: 24,
      low_quantity: 10,
      category: 'e-voucher',
      points:87,
      validTill:'02-03-2025'
    },
    {
      id: 3,
      name: "Domino's Voucher",
      image:
        '../../assets/images/dominosVoucher.png',
      quantity: 20,
      low_quantity: 30,
      category: 'e-voucher',
      points:274,
      validTill:'11-01-2025'
    },
    {
      id: 4,
      name: 'Gift Voucher',
      image:
        '../../assets/images/giftVoucher.png',
      quantity: 22,
      low_quantity: 13,
      category: 'e-voucher',
      points:1,
      validTill:'16-02-2025'
    },
    {
      id: 5,
      name: 'book my show Voucher',
      image: '../../assets/images/bookMyShow.jpg',
      quantity: 16,
      low_quantity: 4,
      category: 'e-voucher',
      points:284,
      validTill:'08-02-2025'
    },
    {
      id: 6,
      name: 'Amazon pay Voucher',
      image:
        '../../assets/images/amazonPAY.jpeg',
      quantity: 42,
      low_quantity: 24,
      category: 'e-voucher',
      points:92,
      validTill:'11-01-2025'
    },
    {
      id: 7,
      name: 'MMT Voucher',
      image:
        '../../assets/images/MMT.jpeg',
      quantity: 12,
      low_quantity: 21,
      category: 'e-voucher',
      points:19,
      validTill:'05-01-2025'
    },
    {
      id: 8,
      name: 'MMT Voucher',
      image:
        '../../assets/images/MMT.jpeg',
      quantity: 14,
      low_quantity: 8,
      category: 'e-voucher',
      points:57,
      validTill:'07-02-2025'
    },
    {
      id: 9,
      name: 'Channel Perfume',
      image:
        '../../assets/images/chaNNel.png',
      quantity: 10,
      low_quantity: 15,
      category: 'product',
      points:420,
      validTill:''
    },
    {
      id: 10,
      name: 'Beauty products',
      image:
        '../../assets/images/beautyPRoduct.jpeg',
      quantity: 11,
      low_quantity: 9,
      category: 'product',
      points:118,
      validTill:''
    },
    {
      id: 11,
      name: 'Bottle',
      image:
        '../../assets/images/bottle1.webp',
      quantity: 12,
      low_quantity: 21,
      category: 'product',
      points:260,
      validTill:''
    },
    {
      id: 12,
      name: 'Milk',
      image:
        '../../assets/images/milk.png',
      quantity: 32,
      low_quantity: 17,
      category: 'product',
      points:90,
      validTill:''
    },
    {
      id: 13,
      name: 'Bear',
      image:
        '../../assets/images/bear.jpeg',
      quantity: 25,
      low_quantity: 7,
      category: 'product',
      points:48,
      validTill:''
    },
    {
      id: 14,
      name: 'Cleaner',
      image:
        '../../assets/images/cleaner.webp',
      quantity: 0,
      low_quantity: 0,
      category: 'evergreen',
      points:97,
      validTill:''
    },
    {
      id: 15,
      name: 'battery',
      image: '../../assets/images/battery.jpg',
      quantity: 5,
      low_quantity: 13,
      category: 'evergreen',
      points:329,
      validTill:''
    },
    {
      id: 16,
      name: 'Helmet',
      image:
        '../../assets/images/helmet.webp',
      quantity: 15,
      low_quantity: 13,
      category: 'evergreen',
      points:68,
      validTill:''
    },
    {
      id: 17,
      name: 'Mobile holder',
      image:
        '../../assets/images/mobileHolder.jpg',
      quantity: 15,
      low_quantity: 11,
      category: 'evergreen',
      points:315,
      validTill:''
    },
    {
      id: 18,
      name: 'Rain Coat',
      image:
        '../../assets/images/rainCoat.jpg',
      quantity: 22,
      low_quantity: 11,
      category: 'evergreen',
      points:222,
      validTill:''
    },
    {
      id: 19,
      name: 'Water Spray Gun',
      image:
        '../../assets/images/waterSprayGun.jpg',
      quantity: 24,
      low_quantity: 11,
      category: 'evergreen',
      points:145,
      validTill:''
    },
    {
      id: 20,
      name: 'Screw Driver',
      image:
        '../../assets/images/screwDriver.jpeg',
      quantity: 29,
      low_quantity: 11,
      category: 'evergreen',
      points:240,
      validTill:''
    },
    {
      id: 21,
      name: 'Pendrive',
      image:
        '../../assets/images/pendrive.jpg',
      quantity: 19,
      low_quantity: 11,
      category: 'evergreen',
      points:100,
      validTill:''
    },
    {
      id: 22,
      name: 'Usb Cable',
      image:
        '../../assets/images/usbCable.webp',
      quantity: 24,
      low_quantity: 13,
      category: 'evergreen',
      points:0,
      validTill:''
    },
    {
      id: 23,
      name: 'Mobile Charger',
      image:
        '../../assets/images/mobileCharger.jpeg',
      quantity: 29,
      low_quantity: 11,
      category: 'evergreen',
      points:62,
      validTill:''
    },
    {
      id: 24,
      name: 'Shirt',
      image:
        '../../assets/images/shirt.webp',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:270,
      validTill:''
    },
    {
      id: 25,
      name: 'Blazer',
      image:
        '../../assets/images/blazer.webp',
      quantity: 24,
      low_quantity: 8,
      category: 'fashion & retail',
      points:300,
      validTill:''
    },
    {
      id: 26,
      name: 'Sweter',
      image: '../../assets/images/sweater.jpeg',
      quantity: 9,
      low_quantity: 8,
      category: 'fashion & retail',
      points:120,
      validTill:''
    },
    {
      id: 27,
      name: 'OverSized Sweater',
      image:
        '../../assets/images/oversizedSweater.avif',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:140,
      validTill:''
    },
    {
      id: 28,
      name: 'Hoodie',
      image:
        '../../assets/images/hoodie.webp',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:230,
      validTill:''
    },
    {
      id: 29,
      name: 'Denim Jacket',
      image: '../../assets/images/denimJacket.jpg',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:190,
      validTill:''
    },
    {
      id: 30,
      name: 'Formal Pant',
      image:
        '../../assets/images/formalPant.webp',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:260,
      validTill:''
    },
    {
      id: 31,
      name: 't-shirt',
      image: '../../assets/images/tShirt.webp',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:200,
      validTill:''
    },
    {
      id: 32,
      name: 'Shoes',
      image:
        '../../assets/images/shoes.webp',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
      points:52,
      validTill:''
    },
    {
      id: 33,
      name: 'Jeans',
      image:
        '../../assets/images/jeans.avif',
      quantity: 19,
      low_quantity: 180,
      category: 'fashion & retail',
      points:7,
      validTill:''
    },
    {
      id: 34,
      name: 'Coke',
      image:
        '../../assets/images/coke.jpg',
      quantity: 22,
      low_quantity: 18,
      category: 'product',
      points:90,
      validTill:''
    },
  ];
  suggestionProduct:any=this.product
  filterData:any=[]
  dataObs = from(this.product).pipe(

  )
}
