import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    profileImage: null as File | null  // Now handles both null and File types
  };
  selectedFile: File | null = null;
  userAdvertisements: any[] = [];

  constructor(private http: HttpClient, private toastCtrl: ToastController, private router: Router) { }

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.user.profileImage = file;  // Now this will not throw an error
    }
  }
  

  // Load user's profile and advertisements on init
  ngOnInit() {
    this.loadUserProfile();
    //this.loadUserAdvertisements();
  }

  // Load user profile from the server
  loadUserProfile() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.user.name = response.user.name;
          this.user.email = response.user.email;
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

  // Load user advertisements from the server
  // loadUserAdvertisements() {
  //   this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_advertisements.php', {
  //     withCredentials: true
  //   }).subscribe({
  //     next: (response: any) => {
  //       if (response.status === 'success') {
  //         this.userAdvertisements = response.ads;
  //       } else {
  //         this.presentToast('Failed to load advertisements.', 'danger');
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Error fetching advertisements:', error);
  //       this.presentToast('Error loading advertisements.', 'danger');
  //     }
  //   });
  // }

  // Update user profile (name, email, profile image)
  updateUser(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', this.user.name);
    formData.append('email', this.user.email);

    if (this.user.profileImage) {
      formData.append('profileImage', this.user.profileImage);  // Attach image if selected
    }

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/update_profile.php', formData, {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.presentToast('Profile updated successfully!', 'success');
          

        } else {
          this.presentToast(response.message, 'danger');
        }
      },
      error: (error) => {
        console.error('Error updating profile:', error);
        this.presentToast('this email already used', 'danger');
      }
    });
  }

  // Update user password
  updatePassword() {
    const formData = new FormData();
    formData.append('password', this.user.password);

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/update_password.php', formData, {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.presentToast('Password updated successfully!', 'success');
        } else {
          this.presentToast(response.message, 'danger');
        }
      },
      error: (error) => {
        console.error('Error updating password:', error);
        this.presentToast('Failed to update password.', 'danger');
      }
    });
  }

  // Handle profile image selection
  // onImageSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.user.profileImage = file;
  //   }
  // }

  // Add Logout functionality
  logout() {
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/logout.php', {}, { withCredentials: true })
      .subscribe({
        next: async (response: any) => {
          if (response.status === 'success') {
            // Display a success message
            const toast = await this.toastCtrl.create({
              message: 'Logged out successfully!',
              duration: 2000,
              color: 'success',
              position: 'top'
            });
            await toast.present();

            // Redirect to login page
            this.router.navigate(['/login']);
          }
        },
        error: async () => {
          const toast = await this.toastCtrl.create({
            message: 'Error logging out. Please try again.',
            duration: 2000,
            color: 'danger',
            position: 'top'
          });
          await toast.present();
        }
      });
  }
}
