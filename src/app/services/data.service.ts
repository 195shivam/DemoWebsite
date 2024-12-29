import { Injectable } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private category: CategoryService) {}
  product = [
    {
      id: 1,
      name: 'Electronic Voucher',
      image: 'https://www.siampay.com/images/evoucher-img1.jpg',
      quantity: 14,
      low_quantity: 10,
      category: 'e-voucher',
    },
    {
      id: 2,
      name: 'Lifestyle Voucher',
      image:
        'https://www.evoucherindia.in/files/Brands/1_09-01-2020_13-18-37.png',
      quantity: 24,
      low_quantity: 10,
      category: 'e-voucher',
    },
    {
      id: 3,
      name: "Domino's Voucher",
      image:
        'https://www.dominos.co.in/theme2/front/images/corp_query/e_gift_voucher@3x.png',
      quantity: 20,
      low_quantity: 30,
      category: 'e-voucher',
    },
    {
      id: 4,
      name: 'Gift Voucher',
      image:
        'data:image/png;base64,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',
      quantity: 22,
      low_quantity: 13,
      category: 'e-voucher',
    },
    {
      id: 5,
      name: 'book my show Voucher',
      image: 'https://m.media-amazon.com/images/I/415b3x%2B%2BjbL.jpg',
      quantity: 16,
      low_quantity: 4,
      category: 'e-voucher',
    },
    {
      id: 6,
      name: 'Amazon pay Voucher',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU91pGOAFcvFlLS-OXkhztsm8xGCVdu6BDg&s',
      quantity: 42,
      low_quantity: 24,
      category: 'e-voucher',
    },
    {
      id: 7,
      name: 'MMT Voucher',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3zM7uyevI3PrSBI010NvQg2Z9gHdcy9E5A&s',
      quantity: 12,
      low_quantity: 21,
      category: 'e-voucher',
    },
    {
      id: 8,
      name: 'MMT Voucher',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3zM7uyevI3PrSBI010NvQg2Z9gHdcy9E5A&s',
      quantity: 14,
      low_quantity: 8,
      category: 'e-voucher',
    },
    {
      id: 9,
      name: 'Channel Perfume',
      image:
        'https://www.enterpriseitworld.com/wp-content/uploads/2021/05/Snap-Up-More-Customers-With-These-Product-Photography-Tips-Google-Docs.png',
      quantity: 10,
      low_quantity: 15,
      category: 'product',
    },
    {
      id: 10,
      name: 'Beauty products',
      image:
        'https://images.squarespace-cdn.com/content/v1/5840ebc85016e1ca1b980895/1509352596856-DYIIC0FSJEHRPDSV9463/image1-69.JPG',
      quantity: 11,
      low_quantity: 9,
      category: 'product',
    },
    {
      id: 11,
      name: 'Bottle',
      image:
        'https://myborosil.com/cdn/shop/files/my-borosil-stainless-steel-bottles-trek-black-personalise-32329717710986.gif?v=1717398407',
      quantity: 12,
      low_quantity: 21,
      category: 'product',
    },
    {
      id: 12,
      name: 'Coke',
      image:
        'https://www.bigbasket.com/media/uploads/p/l/251023_11-coca-cola-soft-drink-original-taste.jpg',
      quantity: 22,
      low_quantity: 18,
      category: 'product',
    },
    {
      id: 12,
      name: 'Milk',
      image:
        'https://sapinsdairy.com/wp-content/uploads/2021/12/milk-bottle.png',
      quantity: 32,
      low_quantity: 17,
      category: 'product',
    },
    {
      id: 13,
      name: 'Bear',
      image:
        'https://images.rawpixel.com/image_png_social_portrait/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczMtamlyYS0wMzgwLXBhaV8yLnBuZw.png',
      quantity: 25,
      low_quantity: 7,
      category: 'product',
    },
    {
      id: 14,
      name: 'Cleaner',
      image:
        'https://www.antmascot.com/_next/image?url=https%3A%2F%2Fd3olmw93qe7qxx.cloudfront.net%2Fimages%2Fproducts%2FL184584.jpg&w=3840&q=30',
      quantity: 0,
      low_quantity: 0,
      category: 'evergreen',
    },
    {
      id: 15,
      name: 'battery',
      image: 'https://m.media-amazon.com/images/I/715oqKNOi7L.jpg',
      quantity: 5,
      low_quantity: 13,
      category: 'evergreen',
    },
    {
      id: 16,
      name: 'Helmet',
      image:
        'https://axorhelmets.com/cdn/shop/files/Black_2_0da6ed16-e8c1-4404-a6f0-a93ed83d2860.jpg?v=1728985678',
      quantity: 15,
      low_quantity: 13,
      category: 'evergreen',
    },
    {
      id: 17,
      name: 'Mobile holder',
      image:
        'https://deq64r0ss2hgl.cloudfront.net/images/product/metal-universal-mobile-stand-32076986047604.jpg',
      quantity: 15,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 18,
      name: 'Rain Coat',
      image:
        'https://5.imimg.com/data5/UY/LV/VR/SELLER-12170353/mens-rain-coat.jpg',
      quantity: 22,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 19,
      name: 'Water Spray Gun',
      image:
        'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Multi-Spray-Water-Gun-1.jpg',
      quantity: 24,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 20,
      name: 'Screw Driver',
      image:
        'https://www.partsbaba.com/product-images/PBSH050.jpg/1139387000156767560/700x700',
      quantity: 29,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 21,
      name: 'Pendrive',
      image:
        'https://m.media-amazon.com/images/I/41PlRoh6XSL._AC_UF1000,1000_QL80_.jpg',
      quantity: 19,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 22,
      name: 'Usb Cable',
      image:
        'https://ambraneindia.com/cdn/shop/products/1_0a3c77b6-74b3-4378-8d91-76c8a6140bb7-transformed.png?v=1682313578',
      quantity: 24,
      low_quantity: 13,
      category: 'evergreen',
    },
    {
      id: 23,
      name: 'Mobile Charger',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBskhYul9j_DANvbPrAfCnSMiJLEHQ4EyW-A&s',
      quantity: 29,
      low_quantity: 11,
      category: 'evergreen',
    },
    {
      id: 24,
      name: 'Shirt',
      image:
        'https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 25,
      name: 'Blazer',
      image:
        'https://www.bonsoir.co.in/cdn/shop/files/Grey_Knitted-Blazer.jpg?crop=center&height=3500&v=1730191318&width=3427',
      quantity: 24,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 26,
      name: 'Sweter',
      image: 'https://cdni.llbean.net/is/image/wim/505183_1155_41',
      quantity: 9,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 27,
      name: 'OverSized Sweater',
      image:
        'https://img.tatacliq.com/images/i15//437Wx649H/MP000000020580506_437Wx649H_202312261513141.jpeg',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 28,
      name: 'Hoodie',
      image:
        'https://wolfattire.com/cdn/shop/files/Pink_Oversized_Hoodies_Men_800x.webp?v=1726932788',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 29,
      name: 'Denim Jacket',
      image: 'https://m.media-amazon.com/images/I/A1rAl7nAdxL._AC_UY1100_.jpg',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 30,
      name: 'Jeans',
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722862431-paige-jeans-66b0cb521552a.jpg?crop=0.8886666666666666xw:1xh;center,top&resize=980:*',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 30,
      name: 'Formal Pant',
      image:
        'https://www.jiomart.com/images/product/original/rvsmmpge4h/jeenay-synthetic-formal-pants-for-men-mens-fashion-wrinkle-free-stylish-slim-fit-men-s-wear-trouser-pant-for-office-or-party-40-us-sky-blue-product-images-rvsmmpge4h-2-202308130048.jpg?im=Resize=(1000,1000)',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 31,
      name: 't-shirt',
      image: 'https://nobero.com/cdn/shop/files/og.jpg?v=1722234051',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
    {
      id: 32,
      name: 'Shoes',
      image:
        'https://redtape.com/cdn/shop/products/8-800x800_22c88bd9-f9c2-4c61-ab55-71edce92bf57.jpg?v=1728477061',
      quantity: 19,
      low_quantity: 8,
      category: 'fashion & retail',
    },
  ];

  dataObs = from(this.product).pipe(
    filter((v) => {
      if (
        !(
          this.category.eVoucher ||
          this.category.evergreen ||
          this.category.fashion ||
          this.category.product
        )
      )
        return true;
      else if (this.category.eVoucher && v.category === 'e-voucher')
        return true;
      else if (this.category.evergreen && v.category === 'evergreen')
        return true;
      else if (this.category.fashion && v.category === 'fashion & retail')
        return true;
      else if (this.category.product && v.category === 'product') return true;
      else return false;
    })
  );
}
