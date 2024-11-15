import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fertilizers-organic',
  templateUrl: './fertilizers-organic.page.html',
  styleUrls: ['./fertilizers-organic.page.scss'],
})
export class FertilizersOrganicPage implements OnInit {

  organic: {
    userName: string;  // Added userName field
    type: string;
    title: string;
    npk: string | null; // NPK ratio for organic fertilizers
    method: string; // Method of application for organic fertilizers
    stock: number | null;
    description: string; // Optional description
    unit: string;
    amount: number | null;
    price: number | null;
    address: string; // Optional address
    mobile: string;
    acceptTerms: boolean;
  } = {
    userName: '',  // Initialize userName as empty
    type: '',
    title: '',
    npk: null,
    method: '',
    stock: null,
    description: '',
    unit: '',
    amount: null,
    price: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = '';  // To display image error

  constructor(private http: HttpClient, private toastController: ToastController, private router: Router) {}

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

  // Load user info to automatically set userName
  loadUserInfo() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.organic.userName = response.user.name;  // Automatically set the user name
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

  // Handle file selection and preview
  onFileChange(event: any): void {
    const files = Array.from(event.target.files) as File[]; // Ensure type is 'File'
    if (files.length > 4) {
      this.imageError = 'You can upload a maximum of 4 images.';
      this.presentToast('You can upload a maximum of 4 images.', 'danger');
      return;
    }

    this.selectedImages = files; // Store selected files
    this.previewImages = []; // Reset preview images
    this.imageError = ''; // Clear previous error if valid

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImages.push(e.target.result); // Add image URL for preview
      };
      reader.readAsDataURL(file); // Read the image as Data URL for preview
    });
  }

  // Validate mobile number (must be exactly 10 digits)
  isValidMobile(mobile: string): boolean {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  }

  // Handle form submission
  onSubmit() {
    if (!this.organic.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    // Validate required fields
    if (!this.organic.type || !this.organic.title || this.organic.amount === null || !this.organic.unit ||this.organic.price === null || !this.organic.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.organic.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Fertilizers');
    formData.append('subcategory', 'Organic');
    formData.append('title', this.organic.title || '');
    formData.append('stock', this.organic.stock !== null ? this.organic.stock.toString() : '');
    formData.append('address', this.organic.address || '');
    formData.append('mobile', this.organic.mobile || '');
    formData.append('acceptTerms', this.organic.acceptTerms ? '1' : '0');
    formData.append('description', this.organic.description || '');

    // Unique attributes for Organic Fertilizers
    formData.append('type', this.organic.type || '');
    formData.append('npk', this.organic.npk || ''); // NPK ratio specific to organic fertilizers
    formData.append('method', this.organic.method || ''); // Method of application
    formData.append('unit', this.organic.unit ||'');
    formData.append('amount', this.organic.amount !== null ? this.organic.amount.toString() : '');
    formData.append('price', this.organic.price !== null ? this.organic.price.toString() : '');

    // Add userName
    formData.append('userName', this.organic.userName || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (add_organic.php)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_organic.php', formData, {
      withCredentials: true  // Ensure that cookies are sent with the request
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Organic fertilizer advertisement successfully submitted.', 'success');
        this.router.navigate(['/advertisement-confirmation']);
      },
      error: (error) => {
        console.error('Error:', error);
        this.presentToast('An error occurred while submitting the form. Please try again.', 'danger');
      }
    });
  }

  ngOnInit() {
    this.loadUserInfo();  // Automatically load user info when the component is initialized
  }
}
