import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-advertisement',
  templateUrl: './update-advertisement.page.html',
  styleUrls: ['./update-advertisement.page.scss'],
})
export class UpdateAdvertisementPage implements OnInit {
  advertisement: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {
    // Retrieve the advertisement data from navigation state
    const navigation = this.router.getCurrentNavigation();
    this.advertisement = navigation?.extras?.state?.['advertisement']; // Use bracket notation here

    if (this.advertisement) {
      console.log('Received advertisement:', this.advertisement);
    } else {
      console.warn('No advertisement data received.');
    }
  }

  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }

  updateAd() {
    if (this.advertisement) {
      console.log('Updating advertisement:', this.advertisement);

      this.http
        .put(
          'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/update_advertisement.php',
          this.advertisement,
          {
            withCredentials: true, // Ensure cookies (session) are sent with the request
          }
        )
        .subscribe({
          next: (response: any) => {
            if (response.status === 'success') {
              this.presentToast(
                'Advertisement updated successfully.',
                'success'
              );
              this.router.navigate(['/my-advertisements']);
            } else {
              this.presentToast('Failed to update advertisement.', 'danger');
            }
          },
          error: (error) => {
            console.error('Error updating advertisement:', error);
            this.presentToast('Error updating advertisement.', 'danger');
          },
        });
    } else {
      console.warn('Advertisement data is missing.');
      this.presentToast('Invalid advertisement data.', 'danger');
    }
  }

  ngOnInit() {}
}
