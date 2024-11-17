import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agro-chemicalss-plant-growth-regulators',
  templateUrl: './agro-chemicalss-plant-growth-regulators.page.html',
  styleUrls: ['./agro-chemicalss-plant-growth-regulators.page.scss'],
})
export class AgroChemicalssPlantGrowthRegulatorsPage implements OnInit {

  pgr: {
    userName: string;  // Added userName field
    type: string;
    title: string;
    applicationRatio: number | null;
    stock: number | null;
    description: string;
    unit: string;
    amount: number | null;
    price: number | null;
    address: string;
    mobile: string;
    acceptTerms: boolean;
  } = {
    userName: '',  // Initialize userName as empty
    type: '',
    title: '',
    applicationRatio: null,
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

  constructor(private http: HttpClient, private toastController: ToastController, private router:Router) {}  // Inject ToastController

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
          this.pgr.userName = response.user.name;  // Automatically set the user name
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
    if (!this.pgr.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    // Validate required fields
    if (!this.pgr.type || !this.pgr.title || this.pgr.price === null || this.pgr.amount === null || !this.pgr.unit || !this.pgr.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.pgr.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Agro Chemicals');
    formData.append('subcategory', 'Plant Growth Regulators');
    formData.append('title', this.pgr.title || '');
    formData.append('stock', this.pgr.stock !== null ? this.pgr.stock.toString() : '');
    formData.append('address', this.pgr.address || '');
    formData.append('mobile', this.pgr.mobile || '');
    formData.append('acceptTerms', this.pgr.acceptTerms ? '1' : '0');
    formData.append('description', this.pgr.description || '');

    // Unique attributes for Plant Growth Regulators
    formData.append('type', this.pgr.type || '');
    formData.append('applicationRatio', this.pgr.applicationRatio !== null ? this.pgr.applicationRatio.toString() : '');
    formData.append('unit', this.pgr.unit ||'');
    formData.append('amount', this.pgr.amount !== null ? this.pgr.amount.toString() : '');
    formData.append('price', this.pgr.price !== null ? this.pgr.price.toString() : '');

    // Add userName
    formData.append('userName', this.pgr.userName || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (replace with actual endpoint)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pgr.php', formData, {
      withCredentials: true  // Ensure that cookies are sent with the request
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Plant Growth Regulators advertisement successfully submitted.', 'success');
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
