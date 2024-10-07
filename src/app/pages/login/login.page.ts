import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';  // Import ToastController
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginData: {
    email: string,
    password: string
  } = {
    email: '',
    password: ''
  };

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

  // Handle form submission
  onSubmit() {
    const formData = new FormData();
    formData.append('email', this.loginData.email || '');
    formData.append('password', this.loginData.password || '');

    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/login.php', formData, {
        withCredentials: true // This ensures PHPSESSID is sent with requests
      })
      .subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            this.presentToast('Login successful!', 'success');
            // Redirect to the dashboard or home page after successful login
            this.router.navigate(['/advertisement-page']);
          } else {
            this.presentToast(response.message, 'danger');
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.presentToast('An error occurred. Please try again.', 'danger');
        }
      });
  }

  ngOnInit() {
    // On initialization, check if PHPSESSID cookie exists via a test request (optional)
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/check-session.php', {
        withCredentials: true // Ensures PHPSESSID is sent with requests
      })
      .subscribe({
        next: (response: any) => {
          if (response.status === 'authenticated') {
            // User is already logged in, redirect to the advertisement page
            this.router.navigate(['/advertisement-page']);
          }
        },
        error: (error) => {
          console.log('Session not found, user is not logged in');
        }
      });
  }

}
