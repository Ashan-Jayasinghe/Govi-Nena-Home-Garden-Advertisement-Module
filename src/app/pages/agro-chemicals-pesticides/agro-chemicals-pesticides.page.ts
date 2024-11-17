import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agro-chemicals-pesticides',
  templateUrl: './agro-chemicals-pesticides.page.html',
  styleUrls: ['./agro-chemicals-pesticides.page.scss'],
})
export class AgroChemicalsPesticidesPage implements OnInit {

  pesticides: {
    userName: string;  // Added userName field
    type: string;
    title: string;
    applicationRatio: string;
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
    applicationRatio: '',
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
          this.pesticides.userName = response.user.name;  // Automatically set the user name
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
    if (!this.pesticides.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    // Validate required fields
    if (!this.pesticides.type || !this.pesticides.title || this.pesticides.price === null || this.pesticides.amount===null|| !this.pesticides.unit|| !this.pesticides.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.pesticides.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Agro Chemicals');
    formData.append('subcategory', 'Pesticides');
    formData.append('title', this.pesticides.title || '');
    formData.append('stock', this.pesticides.stock !== null ? this.pesticides.stock.toString() : '');
    formData.append('address', this.pesticides.address || '');
    formData.append('mobile', this.pesticides.mobile || '');
    formData.append('acceptTerms', this.pesticides.acceptTerms ? '1' : '0');
    formData.append('description', this.pesticides.description || '');

    // Unique attributes for Pesticides
    formData.append('type', this.pesticides.type || '');
    formData.append('applicationRatio', this.pesticides.applicationRatio || '');
    formData.append('unit', this.pesticides.unit ||'');
    formData.append('amount', this.pesticides.amount !== null ? this.pesticides.amount.toString() : '');
    formData.append('price', this.pesticides.price !== null ? this.pesticides.price.toString() : '');

    // Add userName
    formData.append('userName', this.pesticides.userName || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (replace with actual endpoint)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pesticides.php', formData, {
      withCredentials: true  // Ensure that cookies are sent with the request
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Pesticides advertisement successfully submitted.', 'success');
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
