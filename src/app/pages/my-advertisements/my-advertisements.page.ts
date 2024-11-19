import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-advertisements',
  templateUrl: './my-advertisements.page.html',
  styleUrls: ['./my-advertisements.page.scss'],
})
export class MyAdvertisementsPage implements OnInit {

  advertisements: any[] = [];
  activeAds: any[] = [];
  expiredAds: any[] = [];
  deactivatedAds: any[] = [];

  constructor(private http: HttpClient, private toastController: ToastController, private router: Router) {}

  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

  // Load and categorize advertisements
  loadAdvertisements() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_my_advertisements.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.advertisements = response.data;
          this.categorizeAds();
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

  // Separate advertisements into active and expired categories
  categorizeAds() {
    this.activeAds = this.advertisements.filter(ad => !(ad.isExpired) && ad.is_active);
    this.expiredAds = this.advertisements.filter(ad => ad.isExpired);
    this.deactivatedAds = this.advertisements.filter(ad => !(ad.isExpired) && !(ad.is_active));
  }



  toggleActivation(ad: any) {
    const updatedStatus = !ad.is_active;
    console.log(ad.advertisement_id);
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/toggle_ad_status.php', {
      id: ad.advertisement_id,
      is_active: updatedStatus
    }, { 
      headers: { 'X-HTTP-Method-Override': 'PUT' },
      withCredentials: true }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          ad.is_active = updatedStatus;
          this.categorizeAds(); // Refresh local ads categorization
          this.presentToast(`Advertisement ${updatedStatus ? 'activated' : 'deactivated'} successfully.`);
        } else {
          this.presentToast('Failed to update advertisement status.', 'danger');
        }
      },
      error: (error) => {
        console.error('Error updating advertisement status:', error);
        this.presentToast('Error updating advertisement status.', 'danger');
      }
    });
  }

  updateAdvertisement(ad: any) {
    this.router.navigate(['/update-advertisement'], { state: { advertisement: ad } });
    console.log(ad);
  }

  deleteAdvertisement(ad: any) {
    this.http.delete(`http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/delete_advertisement.php`, {
      body: { id: ad.advertisement_id || ad.id },
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.advertisements = this.advertisements.filter(a => a.id !== ad.id);
          this.categorizeAds(); // Update categorization after deletion
          this.presentToast('Advertisement deleted successfully.');
        } else {
          this.presentToast('Failed to delete advertisement.', 'danger');
        }
      },
      error: (error) => {
        console.error('Error deleting advertisement:', error);
        this.presentToast('Failed to delete advertisement.', 'danger');
      }
    });
  }

  viewDetails(ad: any) {
    this.router.navigate(['/advertisement-view', ad.id], {
      state: { advertisement: ad }
    });
  }

  ngOnInit() {
    this.loadAdvertisements();
  }
}
