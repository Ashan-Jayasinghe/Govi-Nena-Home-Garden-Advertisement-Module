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
  filteredAdvertisements: any[] = []; // Filtered advertisements to be shown
  subcategories: string[] = []; // List of subcategories for the category
  selectedSubcategory: string | null = null; // Currently selected subcategory for filtering

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
      this.advertisements = data;
      this.filteredAdvertisements = this.advertisements; // Initially, show all ads

      // Extract unique subcategories for filter buttons
      this.subcategories = [...new Set(this.advertisements
        .filter(ad => ad.subcategory && ad.subcategory.trim() !== '')
        .map(ad => ad.subcategory))];

      console.log('Advertisements:', this.advertisements); // Log fetched advertisements
      console.log('Subcategories:', this.subcategories); // Log subcategories for debugging
    });
  }

  // Filter the advertisements by subcategory
  filterBySubcategory(subcategory: string) {
    console.log('Selected Subcategory:', subcategory); // Log which subcategory is selected
    this.selectedSubcategory = subcategory;
    
    // Apply filter for subcategory
    this.filteredAdvertisements = this.advertisements.filter(ad => ad.subcategory === subcategory);
    console.log('Filtered Advertisements:', this.filteredAdvertisements); // Log filtered ads
  }

  // Clear the filter and show all advertisements
  clearFilter() {
    this.selectedSubcategory = null; // Clear the selected subcategory
    this.filteredAdvertisements = this.advertisements; // Show all advertisements again
  }

  viewDetails(ad: any) {
    console.log(ad);
    this.router.navigate(['/advertisement-view', ad.id], {
      state: { advertisement: ad } // Pass the advertisement data in state
    });
  }
}
