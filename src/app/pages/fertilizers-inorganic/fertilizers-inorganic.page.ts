import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fertilizers-inorganic',
  templateUrl: './fertilizers-inorganic.page.html',
  styleUrls: ['./fertilizers-inorganic.page.scss'],
})
export class FertilizersInorganicPage implements OnInit {

  inorganic: {
    userName: string;  // Added userName field
    type: string;
    title: string;
    npkRatio: string | null;  // NPK ratio is important for inorganic fertilizers
    method: string;  // Method of application for inorganic fertilizers
    stock: number | null;
    description: string;  // Optional description
    price1L: number | null;
    price5L: number | null;
    price10L: number | null;
    address: string;  // Optional address
    mobile: string;
    acceptTerms: boolean;
  } = {
    userName: '',  // Initialize userName as empty
    type: '',
    title: '',
    npkRatio: null,
    method: '',
    stock: null,
    description: '',
    price1L: null,
    price5L: null,
    price10L: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = '';  // To display image error

  constructor(private http: HttpClient, private toastController: ToastController, private router:Router) {}

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
          this.inorganic.userName = response.user.name;  // Automatically set the user name
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
    const files = Array.from(event.target.files) as File[];
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
    if (!this.inorganic.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    // Validate required fields
    if (!this.inorganic.type || !this.inorganic.title || this.inorganic.price1L === null || !this.inorganic.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.inorganic.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Fertilizers');
    formData.append('subcategory', 'Inorganic');
    formData.append('title', this.inorganic.title || '');
    formData.append('stock', this.inorganic.stock !== null ? this.inorganic.stock.toString() : '');
    formData.append('address', this.inorganic.address || '');
    formData.append('mobile', this.inorganic.mobile || '');
    formData.append('acceptTerms', this.inorganic.acceptTerms ? '1' : '0');
    formData.append('description', this.inorganic.description || '');

    // Unique attributes for Inorganic Fertilizers
    formData.append('type', this.inorganic.type || '');
    formData.append('npkRatio', this.inorganic.npkRatio || ''); // Specific for inorganic fertilizers
    formData.append('method', this.inorganic.method || ''); // Method of application
    formData.append('price1L', this.inorganic.price1L !== null ? this.inorganic.price1L.toString() : '');
    formData.append('price5L', this.inorganic.price5L !== null ? this.inorganic.price5L.toString() : '');
    formData.append('price10L', this.inorganic.price10L !== null ? this.inorganic.price10L.toString() : '');

    // Add userName
    formData.append('userName', this.inorganic.userName || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (add_inorganic.php)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_inorganic.php', formData,{
      withCredentials: true  // Ensure that cookies are sent with the request
    }).subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.presentToast('Inorganic fertilizer advertisement successfully submitted.', 'success');
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
