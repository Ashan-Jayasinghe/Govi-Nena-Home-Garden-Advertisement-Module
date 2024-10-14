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
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../../services/services/advertisement.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

// // User object to hold the profile data
// user = {
//   id: null as number | null,
//   name: '',
//   email: '',
//   profileImage: null as File | null
// };


  constructor(
    private route: ActivatedRoute,
    private advertisementService: AdvertisementService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    //this.loadUserProfile(); // Load the user profile when the page is initialized


    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || '';  
      this.subcategory = params['subcategory'] || null;  
      this.fetchAdvertisements(); // Fetch advertisements
    });
  }


    // Method to load the user profile from the backend
    // loadUserProfile() {
    //   this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
    //     withCredentials: true
    //   }).subscribe({
    //     next: (response: any) => {
    //       if (response.status === 'success') {
    //         this.user.id = response.user.id;  // Store the user ID
    //         this.user.name = response.user.name;
    //         this.user.email = response.user.email;
    //         this.user.profileImage = response.user.profileImage || null;
    //       } else {
    //         console.log('Failed to load user profile');
    //       }
    //     },
    //     error: (error) => {
    //       console.error('Error fetching user profile:', error);
    //     }
    //   });
    // }


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
  savePost(ad: any) {
    const body = { ad_id: ad.advertisement_id };  // Send the ad_id

    // Directly make an HTTP POST request to save the ad
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/save_ad.php', body, {
        withCredentials: true  // Ensure credentials (like session cookies) are sent with the request
    }).subscribe({
        next: (response: any) => {
            console.log('Ad saved successfully', response);
        },
        error: (error) => {
            console.error('Failed to save ad', error);
        }
    });
}

  
}