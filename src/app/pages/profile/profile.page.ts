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
    id: null as number | null,
    name: '',
    email: '',
    profileImage: null as File | null, // Now handles both null and File types
  };
  currentPassword = ''; // New field for current password
  newPassword = ''; // New field for new password

  selectedFile: File | null = null;
  userAdvertisements: any[] = [];

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  // Display a toast message for feedback
  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.user.profileImage = file; // Now this will not throw an error
    }
  }

  // Load user's profile and advertisements on init
  ngOnInit() {
    this.loadUserProfile();
    //this.loadUserAdvertisements();
  }

  // Load user profile from the server
  loadUserProfile() {
    this.http
      .get(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php',
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            this.user.name = response.user.name;
            this.user.email = response.user.email;
            this.user.id = response.user.id;
            this.user.profileImage = response.user.profile_image;
            console.log(this.user.id);
          } else {
            this.presentToast('Failed to load profile information.', 'danger');
          }
        },
        error: (error) => {
          console.error('Error fetching profile:', error);
          this.presentToast('Error loading profile information.', 'danger');
        },
      });
  }

  // Update user profile (name, email, profile image)
  updateUser(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', this.user.name);
    formData.append('email', this.user.email);

    if (this.user.profileImage) {
      formData.append('profileImage', this.user.profileImage); // Attach image if selected
    }

    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/update_profile.php',
        formData,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            this.presentToast('Profile updated successfully!', 'success');

            // Clear the password fields
            this.currentPassword = ''; // Clear current password
            this.newPassword = ''; // Clear new password
          } else {
            this.presentToast(response.message, 'danger');
          }
        },
        error: (error) => {
          console.error('Error updating profile:', error);
          this.presentToast('this email already used', 'danger');
        },
      });
  }

  // Update user password
  updatePassword(event: Event) {
    event.preventDefault();
    if (!this.currentPassword || !this.newPassword) {
      this.presentToast('Please fill in all password fields.', 'danger');
      return;
    }

    const formData = new FormData();
    formData.append('currentPassword', this.currentPassword);
    formData.append('newPassword', this.newPassword);

    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/update_password.php',
        formData,
        { withCredentials: true }
      )
      .subscribe({
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
        },
      });
  }

  // Add Logout functionality
  logout() {
    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/logout.php',
        {},
        { withCredentials: true }
      )
      .subscribe({
        next: async (response: any) => {
          if (response.status === 'success') {
            // Display a success message
            this.presentToast('Logged out successfully!', 'success');
            // Redirect to login page
            this.router.navigate(['/login']);
          }
        },
        error: async () => {
          this.presentToast('Error logging out. Please try again.', 'danger');
        },
      });
  }
}
