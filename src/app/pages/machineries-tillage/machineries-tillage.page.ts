import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-machineries-tillage',
  templateUrl: './machineries-tillage.page.html',
  styleUrls: ['./machineries-tillage.page.scss'],
})
export class MachineriesTillagePage implements OnInit {

  tillages: {
    userName: string;  // Added userName field
    condition: string;
    rentorsell: string;
    title: string;
    stock: string;
    manufacturer: string;
    description: string; // Added description
    price: number | null;
    address: string;
    mobile: string;
    acceptTerms: boolean;
  } = {
    userName: '',
    condition: '',
    rentorsell: '',
    title: '',
    stock: '',
    manufacturer: '',
    description: '', // Initialize description
    price: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = '';

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

  // Handle file selection and preview
  onFileChange(event: any): void {
    const files = Array.from(event.target.files) as File[];
    if (files.length > 4) {
      this.imageError = 'You can upload a maximum of 4 images.';
      this.presentToast('You can upload a maximum of 4 images.', 'danger');
      return;
    }

    this.selectedImages = files;
    this.previewImages = [];
    this.imageError = '';

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImages.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  // Validate mobile number (must be exactly 10 digits)
  isValidMobile(mobile: string): boolean {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  }

  // Load user info to automatically set userName
  loadUserInfo() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.tillages.userName = response.user.name; // Automatically set the user name
        } else {
          this.presentToast('Failed to load user information.', 'danger');
        }
      },
      error: (error) => {
        console.error('Error fetching user information:', error);
        this.presentToast('Error loading user information.', 'danger');
      }
    });
  }

  // Handle form submission
  onSubmit() {
    if (!this.tillages.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    if (!this.tillages.condition || !this.tillages.rentorsell || !this.tillages.title || this.tillages.price === null || !this.tillages.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.tillages.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Machineries');
    formData.append('subcategory', 'Tillages');
    formData.append('userName', this.tillages.userName || '');
    formData.append('title', this.tillages.title || '');
    formData.append('stock', this.tillages.stock || '');
    formData.append('address', this.tillages.address || '');
    formData.append('mobile', this.tillages.mobile || '');
    formData.append('acceptTerms', this.tillages.acceptTerms ? '1' : '0');
    formData.append('description', this.tillages.description || ''); // Include description

    // Unique attributes for Tillages
    formData.append('condition', this.tillages.condition || '');
    formData.append('rentorsell', this.tillages.rentorsell || '');
    formData.append('manufacturer', this.tillages.manufacturer || '');
    formData.append('price', this.tillages.price !== null ? this.tillages.price.toString() : '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_tillages.php', formData, {
      withCredentials: true
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Tillages advertisement successfully submitted.', 'success');
      },
      error: (error) => {
        console.error('Error:', error);
        this.presentToast('An error occurred while submitting the form. Please try again.', 'danger');
      }
    });
  }

  ngOnInit() {
    this.loadUserInfo(); // Automatically load user info when the component is initialized
  }
}
