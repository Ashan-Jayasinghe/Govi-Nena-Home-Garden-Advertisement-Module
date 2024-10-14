import { Component, OnInit } from '@angular/core';
import { SavedAdsService } from '../../services/saved-ads.service'; // Adjust the path based on your app structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-ads',
  templateUrl: './saved-ads.page.html',
  styleUrls: ['./saved-ads.page.scss'],
})
export class SavedAdsPage implements OnInit {
  savedAds: any[] = [];
  filteredSavedAds: any[] = [];  // Filtered list of saved ads
  subcategories: string[] = [];  // List of subcategories for filter buttons
  selectedSubcategory: string | null = null;  // Currently selected subcategory for filtering
  errorMessage: string = '';

  constructor(private savedAdsService: SavedAdsService, private router: Router) { }

  ngOnInit() {
    this.loadSavedAds();
  }

  // Load saved ads from the service
  loadSavedAds() {
    this.savedAdsService.getSavedAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.savedAds = response.data;  // Adjusted to reflect the 'data' in the response
          this.filteredSavedAds = this.savedAds;  // Initially, show all saved ads

          // Extract unique subcategories for filter buttons
          this.subcategories = [...new Set(this.savedAds
            .filter(ad => ad.subcategory && ad.subcategory.trim() !== '')
            .map(ad => ad.subcategory))];
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        this.errorMessage = 'Failed to load saved ads.';
        console.error('Error fetching saved ads:', error);
      },
      complete: () => {
        console.log('Saved ads loading complete.');
      }
    });
  }

  // Filter saved ads by subcategory
  filterBySubcategory(subcategory: string) {
    this.selectedSubcategory = subcategory;
    this.filteredSavedAds = this.savedAds.filter(ad => ad.subcategory === subcategory);
  }

  // Clear the filter and show all saved ads
  clearFilter() {
    this.selectedSubcategory = null;
    this.filteredSavedAds = this.savedAds;
  }

  // View details of the selected ad
  viewDetails(ad: any) {
    this.router.navigate(['/advertisement-view', ad.id], {
      state: { advertisement: ad }  // Pass the ad data in state for viewing details
    });
  }

  // Go back to the home page
  goHome() {
    this.router.navigate(['/advertisement-page']);
  }
}
