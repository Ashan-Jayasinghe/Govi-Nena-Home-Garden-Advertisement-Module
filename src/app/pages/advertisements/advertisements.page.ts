// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AdvertisementService } from '../../services/services/advertisement.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-advertisements',
//   templateUrl: './advertisements.page.html',
//   styleUrls: ['./advertisements.page.scss'],
// })
// export class AdvertisementsPage implements OnInit {

//   category: string = '';  
//   subcategory: string | null = null;  
//   advertisements: any[] = []; // Array to hold advertisements
//   filteredAdvertisements: any[] = []; // Filtered advertisements to be shown
//   subcategories: string[] = []; // List of subcategories for the category
//   selectedSubcategory: string | null = null; // Currently selected subcategory for filtering

// // // User object to hold the profile data
// // user = {
// //   id: null as number | null,
// //   name: '',
// //   email: '',
// //   profileImage: null as File | null
// // };


//   constructor(
//     private route: ActivatedRoute,
//     private advertisementService: AdvertisementService,
//     private router: Router,
//     private http: HttpClient
//   ) { }

//   ngOnInit() {
//     //this.loadUserProfile(); // Load the user profile when the page is initialized


//     this.route.queryParams.subscribe(params => {
//       this.category = params['category'] || '';  
//       this.subcategory = params['subcategory'] || null;  
//       this.fetchAdvertisements(); // Fetch advertisements
//     });
//   }


//     // Method to load the user profile from the backend
//     // loadUserProfile() {
//     //   this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
//     //     withCredentials: true
//     //   }).subscribe({
//     //     next: (response: any) => {
//     //       if (response.status === 'success') {
//     //         this.user.id = response.user.id;  // Store the user ID
//     //         this.user.name = response.user.name;
//     //         this.user.email = response.user.email;
//     //         this.user.profileImage = response.user.profileImage || null;
//     //       } else {
//     //         console.log('Failed to load user profile');
//     //       }
//     //     },
//     //     error: (error) => {
//     //       console.error('Error fetching user profile:', error);
//     //     }
//     //   });
//     // }


//   fetchAdvertisements() {
//     this.advertisementService.getAdvertisementsByCategory(this.category, this.subcategory).subscribe((data) => {
//       this.advertisements = data;
//       this.filteredAdvertisements = this.advertisements; // Initially, show all ads

//       // Extract unique subcategories for filter buttons
//       this.subcategories = [...new Set(this.advertisements
//         .filter(ad => ad.subcategory && ad.subcategory.trim() !== '')
//         .map(ad => ad.subcategory))];

//       console.log('Advertisements:', this.advertisements); // Log fetched advertisements
//       console.log('Subcategories:', this.subcategories); // Log subcategories for debugging
//     });
//   }

//   // Filter the advertisements by subcategory
//   filterBySubcategory(subcategory: string) {
//     console.log('Selected Subcategory:', subcategory); // Log which subcategory is selected
//     this.selectedSubcategory = subcategory;
    
//     // Apply filter for subcategory
//     this.filteredAdvertisements = this.advertisements.filter(ad => ad.subcategory === subcategory);
//     console.log('Filtered Advertisements:', this.filteredAdvertisements); // Log filtered ads
//   }

//   // Clear the filter and show all advertisements
//   clearFilter() {
//     this.selectedSubcategory = null; // Clear the selected subcategory
//     this.filteredAdvertisements = this.advertisements; // Show all advertisements again
//   }

//   viewDetails(ad: any) {
//     console.log(ad);
//     this.router.navigate(['/advertisement-view', ad.id], {
//       state: { advertisement: ad } // Pass the advertisement data in state
//     });
//   }
//   savePost(ad: any) {
//     const body = { ad_id: ad.advertisement_id };  // Send the ad_id

//     // Directly make an HTTP POST request to save the ad
//     this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/save_ad.php', body, {
//         withCredentials: true  // Ensure credentials (like session cookies) are sent with the request
//     }).subscribe({
//         next: (response: any) => {
//             console.log('Ad saved successfully', response);
//         },
//         error: (error) => {
//             console.error('Failed to save ad', error);
//         }
//     });
// }

  
// }




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
  
    fetchAdvertisements() {
      this.advertisementService.getAdvertisementsByCategory(this.category, this.subcategory).subscribe((data) => {
        // Assuming data includes a 'created_at' or 'timestamp' field
        this.advertisements = data;
    
        // Sort advertisements by 'created_at' (or 'timestamp') in descending order (newest first)
        this.advertisements.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    
        // Initially show all ads
        this.filteredAdvertisements = this.advertisements;
    
        // Extract unique subcategories for filter buttons
        this.subcategories = [...new Set(this.advertisements
          .filter(ad => ad.subcategory && ad.subcategory.trim() !== '')
          .map(ad => ad.subcategory))];
    
        console.log('Advertisements:', this.advertisements); // Log fetched advertisements
        console.log('Subcategories:', this.subcategories); // Log subcategories for debugging
      });
    }
    
  onEnterPressed() {
    // Call the filtering logic when the Enter key is pressed
    this.filterAdvertisements();
  }
  
  // filterAdvertisements() {
  //   this.filteredAdvertisements = this.advertisements.filter(ad => {
  //     const matchesSubcategory = this.selectedSubcategory ? ad.subcategory === this.selectedSubcategory : true;
  
  //     // Ensure the search query is checked against multiple fields
  //     const matchesQuery = this.searchQuery ? (
  //       (ad.title && ad.title.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
  //       (ad.category && ad.category.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
  //       (ad.subcategory && ad.subcategory.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
  //       (ad.description && ad.description.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
  //       (ad.type && ad.type.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
  //       (ad.variety && ad.variety.toLowerCase().includes(this.searchQuery.toLowerCase()))
  //     ) : true;
  
  //     return matchesSubcategory && matchesQuery;
  //   });
  // }
  
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
    const body = { ad_id: ad.advertisement_id };  // Send the ad_id

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/save_ad.php', body, {
        withCredentials: true  // Ensure credentials (like session cookies) are sent with the request
    }).subscribe({
        next: (response: any) => {
            console.log('Ad saved successfully', response);
            this.presentToast('Ad saved successfully', 'warning');
            setTimeout(() => {
              this.router.navigateByUrl('/saved-ads');
            }, 1000);

        },
        error: (error) => {
            console.error('Failed to save ad', error);
            this.presentToast('Failed to save ad', 'danger');
        }
    });
  }
}