import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';  // Import the ToastController
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  

// Define the signup data model
signupData: {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  acceptTerms: boolean
} = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
};

  passwordMismatch: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

constructor(private http: HttpClient, private toastCtrl: ToastController,  private router: Router) {}

// // Check if the passwords match
// onPasswordChange() {
//   this.passwordMismatch = this.signupData.password !== this.signupData.confirmPassword;
// }

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



validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  this.emailInvalid = !emailPattern.test(this.signupData.email);
}

validatePassword() {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  this.passwordInvalid = !passwordPattern.test(this.signupData.password);
}

onPasswordChange() {
  this.passwordMismatch = this.signupData.password !== this.signupData.confirmPassword;
  this.validatePassword();
}

onEmailChange() {
  this.validateEmail();
}


// Handle form submission
onSubmit() {
  // if (this.signupData.acceptTerms) {
  //   // Ensure password and confirm password match
  //   if (this.passwordMismatch) {
  //     this.presentToast('Passwords do not match', 'danger');
  //     return;
  //   }

  //   const formData = new FormData();

  //   // Append the data fields to the form data
  //   formData.append('name', this.signupData.name || '');
  //   formData.append('email', this.signupData.email || '');
  //   formData.append('password', this.signupData.password || '');
  //   formData.append('acceptTerms', this.signupData.acceptTerms ? '1' : '0');

  //   // Send form data to backend (replace with actual endpoint)
  //   this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/signup.php', formData)
  //     .subscribe({
  //       next: (response) => {
  //         console.log('Response:', response);
  //         this.presentToast('Signup successful', 'success');
  //       },
  //       error: (error) => {
  //         console.error('Error:', error);
  //         this.presentToast('Signup failed. Please try again.', 'danger');
  //       }
  //     });
  // } else {
  //   this.presentToast('Please accept the terms and conditions to proceed.', 'warning');
  // }


 
    if (this.signupData.acceptTerms) {
      // Ensure password and confirm password match
      // if (this.passwordMismatch) {
      //   this.presentToast('Passwords do not match', 'danger');
      //   return;
      // }

      this.validateEmail();
      this.validatePassword();
  
      if (this.emailInvalid) {
        this.presentToast('Please enter a valid email address.', 'danger');
        return;
      }
  
      if (this.passwordInvalid) {
        this.presentToast('Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.', 'danger');
        return;
      }
  
      if (this.passwordMismatch) {
        this.presentToast('Passwords do not match', 'danger');
        return;
      }
  
      if (!this.signupData.acceptTerms) {
        this.presentToast('Please accept the terms and conditions to proceed.', 'warning');
        return;
      }
  
      const formData = new FormData();
  
      // Append the data fields to the form data
      formData.append('name', this.signupData.name || '');
      formData.append('email', this.signupData.email || '');
      formData.append('password', this.signupData.password || '');
      formData.append('acceptTerms', this.signupData.acceptTerms ? '1' : '0');
  
      // Send form data to backend (replace with actual endpoint)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/signup.php', formData)
        .subscribe({
          next: (response: any) => {
            // Check if the backend sends a specific error like "email already exists"
            if (response.status === 'error' && response.message === 'Email already exists') {
              this.presentToast('Email already exists. Please use a different email.', 'danger');
            } else {
              // If successful
              this.presentToast('Signup successful! Redirecting to login...', 'success');
              this.router.navigate(['/login']);
           
            }
          },
          error: (error) => {
            console.error('Error:', error);
            this.presentToast('Signup failed. Please try again.', 'danger');
          }
        });
    } else {
      this.presentToast('Please accept the terms and conditions to proceed.', 'warning');
    }
  
  
}
 

  ngOnInit() {
  }

}







  
