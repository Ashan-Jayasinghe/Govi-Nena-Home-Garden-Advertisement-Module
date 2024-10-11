import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../../services/services/advertisement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.page.html',
  styleUrls: ['./advertisements.page.scss'],
})
export class AdvertisementsPage implements OnInit {

  category: string = '';  
  subcategory: string | null = null;  
  advertisements: any[] = []; // Array to hold advertisements

  constructor(
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || '';  
      this.subcategory = params['subcategory'] || null;  
      this.fetchAdvertisements(); // Fetch advertisements
    });
  }

  fetchAdvertisements() {
    this.advertisementService.getAdvertisementsByCategory(this.category, this.subcategory).subscribe((data) => {
      this.advertisements = data; // Assign data to advertisements array
      console.log(this.advertisements); // Debug: Log fetched advertisements
    });
  }


    viewDetails(ad: any) {
      console.log(ad);
      this.router.navigate(['/advertisement-view', ad.id], {
        state: { advertisement: ad } // Pass the advertisement data in state
      });
    }
  }
  
