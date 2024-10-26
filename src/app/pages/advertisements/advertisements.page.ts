import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../../services/services/advertisement.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';  // Import ToastController

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
  searchQuery: string = ''; // Variable to hold the search query
  selectedSortingOption: string = ''; // Variable to hold the selected sorting option (Low to High, High to Low)
  savedAdIds: number[] = []; // Array to hold saved advertisement IDs

  constructor(
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService,
    private router: Router,
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || '';  
      this.subcategory = params['subcategory'] || null;  
      this.fetchAdvertisements(); // Fetch advertisements
      this.fetchSavedAds(); // Fetch saved ads separately

    });
  }

    // Display a toast message for feedback
    async presentToast(message: string, color: string) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
        color,
        position: 'top'
      });
      toast.present();
    }

    // Fetch saved advertisements for the user
    fetchSavedAds() {
      this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_saved_ads.php', { withCredentials: true })
        .subscribe({
          next: (response: any) => {
            this.savedAdIds = response.data.map((ad: any) => ad.id);
            this.updateSavedAdStatus();
          },
          error: (error) => {
            console.error("Failed to fetch saved ads:", error);
            this.presentToast('Failed to load saved ads', 'danger');
          }
        });
    }
  

    fetchAdvertisements() {
    
      this.advertisementService.getAdvertisementsByCategory(this.category, this.subcategory).subscribe({
        next: (data) => {
          this.advertisements = data;
    
          // Sort advertisements by 'created_at' to show the latest ads first
          this.advertisements.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    
          // Initialize ads and update saved statuses
          this.advertisements.forEach(ad => ad.isSaved = false);
          this.filteredAdvertisements = [...this.advertisements]; // Show all ads initially
          this.updateSavedAdStatus(); // Update saved status
    
          // Set unique subcategories for the filter buttons
          this.subcategories = [...new Set(this.advertisements
            .filter(ad => ad.subcategory && ad.subcategory.trim() !== '')
            .map(ad => ad.subcategory))];
        },
        error: (error) => {
          console.error('Error fetching advertisements:', error);
        }
      });
    }
    
    
  onEnterPressed() {
    // Call the filtering logic when the Enter key is pressed
    this.filterAdvertisements();
  }
  

  // Update the saved status for each ad based on savedAdIds
  updateSavedAdStatus() {
    this.advertisements.forEach(ad => {
      ad.isSaved = this.savedAdIds.includes(ad.id); // Mark as saved if ad ID is in savedAdIds
    });
  }

// Toggle save/unsave functionality
toggleSave(ad: any) {
  if (ad.isSaved) {
    this.unsavePost(ad);
  } else {
    this.savePost(ad);
  }
}

  // filterAdvertisements
  filterAdvertisements() {
    // Split the search query into individual words (ignore extra spaces)
    const searchTerms = this.searchQuery ? this.searchQuery.toLowerCase().split(/\s+/) : [];
  
    this.filteredAdvertisements = this.advertisements.filter(ad => {
      const matchesSubcategory = this.selectedSubcategory ? ad.subcategory === this.selectedSubcategory : true;
  
      // Helper function to check if any of the search terms match a given field
      const checkMatch = (field: string | null | undefined) => {
        return field ? searchTerms.some(term => field.toLowerCase().includes(term)) : false;
      };
  
      // Check if any of the search terms match the advertisement fields
      const matchesQuery = searchTerms.length > 0 ? (
        checkMatch(ad.title) ||
        checkMatch(ad.category) ||
        checkMatch(ad.subcategory) ||
        checkMatch(ad.description) ||
        checkMatch(ad.type) ||
        checkMatch(ad.variety)
      ) : true; // If no search terms, match all
  
      return matchesSubcategory && matchesQuery;
    });
    this.applySorting(); // Apply sorting after filtering
  }
  
// Apply sorting based on selected option (Low to High or High to Low)
applySorting() {
  // Helper function to extract the price value from the advertisement
  const getPrice = (ad: any) => {
    return Number(ad.price) || Number(ad.price_1L) || Number(ad.price_1kg) || 0; // Default to 0 if no price is available
  };

  if (this.selectedSortingOption === 'lowToHigh') {
    this.filteredAdvertisements.sort((a, b) => getPrice(a) - getPrice(b));
  } else if (this.selectedSortingOption === 'highToLow') {
    this.filteredAdvertisements.sort((a, b) => getPrice(b) - getPrice(a));
  }
}

  // Filter the advertisements by subcategory
  filterBySubcategory(subcategory: string) {
    this.selectedSubcategory = subcategory;
    this.filterAdvertisements();
  }

  // Clear the filter and show all advertisements
  clearFilter() {
    this.selectedSubcategory = null; // Clear the selected subcategory
    this.searchQuery = ''; // Clear search query
    this.filteredAdvertisements = this.advertisements; // Show all advertisements again
  }

  viewDetails(ad: any) {
    console.log(ad);
    this.router.navigate(['/advertisement-view', ad.id], {
      state: { advertisement: ad } // Pass the advertisement data in state
    });
  }

  savePost(ad: any) {
    const body = { ad_id: ad.advertisement_id };  // Make sure 'ad.advertisement_id' is the correct identifier

    console.log("Saving ad with ID:", ad.advertisement_id);  // Log the ad ID before sending the request

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/save_ad.php', body, {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        console.log("Save response:", response);  // Log the response from the backend

        if (response.status === 'success') {
          ad.isSaved = true; // Mark ad as saved
          this.savedAdIds.push(ad.advertisement_id); // Add ad ID to saved list
          this.presentToast('Ad saved successfully', 'success');
        } else {
          this.presentToast('Failed to save ad: ' + response.message, 'danger');
        }
      },
      error: (error) => {
        console.error("Failed to save ad:", error);  // Log the error response
        this.presentToast('Failed to save ad', 'danger');
      }
    });
}

unsavePost(ad: any) {
    const body = { ad_id: ad.advertisement_id };  // Make sure 'ad.advertisement_id' is the correct identifier

    console.log("Unsaving ad with ID:", ad.advertisement_id);  // Log the ad ID before sending the request

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/unsave_ad.php', body, {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        console.log("Unsave response:", response);  // Log the response from the backend

        if (response.status === 'success') {
          ad.isSaved = false; // Mark ad as unsaved
          this.savedAdIds = this.savedAdIds.filter(id => id !== ad.advertisement_id); // Remove ad ID from saved list
          this.presentToast('Ad unsaved successfully', 'success');
        } else {
          this.presentToast('Failed to unsave ad: ' + response.message, 'danger');
        }
      },
      error: (error) => {
        console.error("Failed to unsave ad:", error);  // Log the error response
        this.presentToast('Failed to unsave ad', 'danger');
      }
    });
}


}