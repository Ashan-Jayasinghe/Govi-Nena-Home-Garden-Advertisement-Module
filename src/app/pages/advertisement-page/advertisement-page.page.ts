import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.page.html',
  styleUrls: ['./advertisement-page.page.scss'],
})
export class AdvertisementPagePage implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    profileImage: ''  // This will either be a URL or empty if not set
  };
  
  constructor(private toastCtrl: ToastController,private http: HttpClient,private navCtrl: NavController, private router: Router) { }

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

  ngOnInit() {
     // Fetch user details like name and profile image from backend or localStorage after login
     this.loadUserProfile();
  }
  goToDetailsPage() {
    this.navCtrl.navigateForward('/post-ad-home-page');
  } 

  ionViewWillEnter() {
    // This is called every time the page becomes active again
    this.loadUserProfile();  // Refresh profile data when the user returns to this page
  }

  loadUserProfile() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.user.name = response.user.name;
          this.user.email = response.user.email;
          this.user.profileImage = response.user.profile_image;  // Assign the profile image URL

        } else {
          this.presentToast('Failed to load profile information.', 'danger');
        }
      },
      error: (error) => {
        console.error('Error fetching profile:', error);
        this.presentToast('Error loading profile information.', 'danger');
      }
    });
  }

  goToProfile() {
    this.router.navigate(['/profile']);  // Redirect to profile page
  }

// Navigate to the advertisements page based on the selected category
goToAdvertisements(category: string) {
  this.router.navigate(['/advertisements', { category }]);
}

}


