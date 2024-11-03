import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular'; // Import ToastController
import { Router } from '@angular/router'; // Import Router for navigation
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthService
  ) {}

  // Display a toast message for feedback
  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'top',
    });
    toast.present();
  }



  // Handle form submission
  onSubmit() {
    const formData = new FormData();
    formData.append('email', this.loginData.email || '');
    formData.append('password', this.loginData.password || '');

    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/login.php',
        formData,
        {
          withCredentials: true, // This ensures PHPSESSID is sent with requests
        }
      )
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
        },
      });
  }

  ngOnInit() {
    // Check if the user is already logged in
    this.authService.checkSession().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/advertisement-page']); // Redirect to home if logged in
      }
    });
  }
}
