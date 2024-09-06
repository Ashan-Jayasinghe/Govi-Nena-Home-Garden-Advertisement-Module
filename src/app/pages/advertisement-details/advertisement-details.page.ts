import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.page.html',
  styleUrls: ['./advertisement-details.page.scss'],
})
export class AdvertisementDetailsPage implements OnInit {
  ad: any;

  ads = [
    {
      id: 1,
      title: 'Tjc Mango Sooriyawewa 1000 Mango Rs 100000',
      subtitle: 'Delivery Fast 2024 December 3',
      imageUrl: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      variant: 'Mango',
      date: '2024/December/03',
      address: 'No. 42, Galle Road, Sooriyawewa, Southern Province, Sri Lanka',
      phone: '+94 72 234 5748',
      price: 100000.00,
      description: 'Got it! Here\'s a description you can use for your mango stock on your e-commerce site: Fresh Sooriyawewa Mangoes. Experience the tropical delight of Sooriyawewa mangoes, known for their rich flavor and juicy sweetness. Grown in the fertile soils of Sooriyawewa...'
    }
    // Add more demo data if needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const adId = +params['id'];
      this.ad = this.ads.find(ad => ad.id === adId);
    });
  }
}
