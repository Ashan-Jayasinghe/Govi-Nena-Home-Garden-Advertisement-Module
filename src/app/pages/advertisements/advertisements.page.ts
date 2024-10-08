import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.page.html',
  styleUrls: ['./advertisements.page.scss'],
})
export class AdvertisementsPage implements OnInit {
  selectedCategory: string = '';  // Category chosen
  advertisements: any[] = [];     // Store the fetched ads

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
// Get the selected category from the URL
this.selectedCategory = this.route.snapshot.paramMap.get('category') || '';

// Fetch advertisements based on category
this.fetchAdvertisements(); 
}

  // Fetch advertisements from the backend
fetchAdvertisements(){
  this.http.get(`http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_ads.php?category=${this.selectedCategory}`)
  .subscribe({
    next: (response: any) => {
      if (response.status === 'success') {
        this.advertisements = response.ads;
      } else {
        this.presentToast('No advertisements found for this category.', 'danger');
      }
    },
    error: (error) => {
      console.error('Error fetching ads:', error);
      this.presentToast('Failed to load advertisements.', 'danger');
    }
  });
}

// Display a toast message for feedback
async presentToast(message: string, color: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    color,
    position: 'top'
  });
  toast.present();
}

// Function to view ad details (can be linked to another page)
viewDetails(ad: any) {
  console.log('Ad details:', ad);
  // Here, you can implement the logic to navigate to ad details page
}
}
