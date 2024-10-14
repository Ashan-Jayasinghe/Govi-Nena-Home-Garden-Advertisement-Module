import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machineries-tractors',
  templateUrl: './machineries-tractors.page.html',
  styleUrls: ['./machineries-tractors.page.scss'],
})
export class MachineriesTractorsPage implements OnInit {

  tractors: {
    userName: string;  // Added userName field
    condition: string;
    rentorsell: string;
    title: string;
    stock: string;  // Optional
    manufacturer: string;  // Optional
    description: string;  // Added description
    price: number | null;
    power: number | null;  // Optional
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
    description: '',  // Initialize description
    price: null,
    power: null,  // Initialize power
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

  // Handle file selection and preview
  onFileChange(event: any): void {
    const files = Array.from(event.target.files) as File[];
    if (files.length > 4) {
      this.imageError = 'You can upload a maximum of 4 images.';
      this.presentToast('You can upload a maximum of 4 images.', 'danger');
      return;
    }
    
    this.selectedImages = files;  // Store selected files
    this.previewImages = [];  // Reset preview images
    this.imageError = '';  // Clear previous error if valid

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImages.push(e.target.result);  // Add image URL for preview
      };
      reader.readAsDataURL(file);  // Read the image as Data URL for preview
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
          this.tractors.userName = response.user.name;  // Automatically set the user name
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
    if (!this.tractors.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    if (!this.tractors.condition || !this.tractors.rentorsell || !this.tractors.title || this.tractors.price === null || !this.tractors.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.tractors.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Machineries');
    formData.append('subcategory', 'Tractors');
    formData.append('userName', this.tractors.userName || '');
    formData.append('title', this.tractors.title || '');
    formData.append('stock', this.tractors.stock || '');
    formData.append('address', this.tractors.address || '');
    formData.append('mobile', this.tractors.mobile || '');
    formData.append('acceptTerms', this.tractors.acceptTerms ? '1' : '0');
    formData.append('description', this.tractors.description || ''); // Include description

    // Unique attributes for Tractors
    formData.append('condition', this.tractors.condition || '');
    formData.append('rentorsell', this.tractors.rentorsell || '');
    formData.append('manufacturer', this.tractors.manufacturer || '');
    formData.append('price', this.tractors.price !== null ? this.tractors.price.toString() : '');
    formData.append('power', this.tractors.power != null ? this.tractors.power.toString() : ''); // Add power

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_tractors.php', formData, {
      withCredentials: true
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Tractors advertisement successfully submitted.', 'success');
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
