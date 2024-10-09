import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.page.html',
  styleUrls: ['./my-advertisements.page.scss'],
})
export class MyAdvertisementsPage implements OnInit {


  advertisements: any[] = [];  // Array to hold the advertisements

  constructor(private http: HttpClient, private toastController: ToastController) {}

  // Helper method to show a toast notification
  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  // Load user advertisements when the component initializes
  loadAdvertisements() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_my_advertisements.php', {
      withCredentials: true  // Ensure cookies are sent with the request
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.advertisements = response.data;  // Assign fetched ads to the local array
        } else {
          this.presentToast('Failed to load advertisements.', 'danger');
        }
      },
      error: (error) => {
        console.error('Error fetching advertisements:', error);
        this.presentToast('Error loading advertisements.', 'danger');
      }
    });
  }

  // Method to handle viewing details of an advertisement
  viewDetails(ad: any) {
    // Logic to navigate to advertisement details page
    console.log('Viewing details for ad:', ad);
    // You can use Angular Router to navigate to a details page if needed
  }

  ngOnInit() {
    this.loadAdvertisements();  // Fetch the advertisements when the component initializes
  }
}







