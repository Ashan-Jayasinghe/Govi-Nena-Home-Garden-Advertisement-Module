import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegitablefruits-vegetables',
  templateUrl: './vegetables-fruits-vegetables.page.html',
  styleUrls: ['./vegetables-fruits-vegetables.page.scss'],
})
export class VegetablesFruitsVegetablesPage implements OnInit {
  vegetables: {
    userName: string; // Added userName field
    type: string;
    variety: string;
    title: string;
    stock: number | null;
    description: string;
    unit: string;
    amount: number | null;
    price: number | null;
    address: string;
    mobile: string;
    acceptTerms: boolean;
  } = {
    userName: '',
    type: '',
    variety: '',
    title: '',
    stock: null,
    description: '',
    unit: '',
    amount: null,
    price: null,
    address: '',
    mobile: '',
    acceptTerms: false,
  };

  //specifications: string[] = [];
  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = ''; // To display image error

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private router: Router
  ) {}

  // Helper method to show a toast notification
  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom',
    });
    await toast.present();
  }

  // Load user info to automatically set userName
  loadUserInfo() {
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
            this.vegetables.userName = response.user.name; // Automatically set the user name
          } else {
            this.presentToast('Failed to load user information.', 'danger');
          }
        },
        error: (error) => {
          console.error('Error fetching user information:', error);
          this.presentToast('Error loading user information.', 'danger');
        },
      });
  }

  // // Add specification to the list
  // addSpecification() {
  //   if (this.vegetables.specification) {
  //     this.specifications.push(this.vegetables.specification);
  //     this.vegetables.specification = ''; // Clear the input after adding
  //   } else {
  //     this.presentToast('Please enter a specification before adding.', 'danger');
  //   }
  // }

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

    files.forEach((file) => {
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
    if (!this.vegetables.acceptTerms) {
      this.presentToast(
        'Please accept the terms and conditions to proceed.',
        'danger'
      );
      return;
    }

    if (
      !this.vegetables.type ||
      !this.vegetables.variety ||
      !this.vegetables.title ||
      this.vegetables.amount === null ||
      !this.vegetables.unit ||
      this.vegetables.price === null ||
      !this.vegetables.mobile
    ) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.vegetables.mobile)) {
      this.presentToast(
        'Please enter a valid 10-digit mobile number.',
        'danger'
      );
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Planting Materials');
    formData.append('subcategory', 'Vegetables');
    formData.append('userName', this.vegetables.userName || '');
    formData.append('title', this.vegetables.title || '');
    formData.append(
      'stock',
      this.vegetables.stock !== null ? this.vegetables.stock.toString() : ''
    );
    formData.append('address', this.vegetables.address || '');
    formData.append('mobile', this.vegetables.mobile || '');
    formData.append('acceptTerms', this.vegetables.acceptTerms ? '1' : '0');

    // Unique attributes for Vegetables
    formData.append('type', this.vegetables.type || '');
    formData.append('variety', this.vegetables.variety || '');
    formData.append('unit', this.vegetables.unit || '');
    formData.append(
      'amount',
      this.vegetables.amount !== null ? this.vegetables.amount.toString() : ''
    );
    formData.append(
      'price',
      this.vegetables.price !== null ? this.vegetables.price.toString() : ''
    );

    // Add specifications as JSON
    formData.append('description', this.vegetables.description || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend
    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_vegetables.php',
        formData,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.presentToast(
            'Vegetables advertisement successfully submitted.',
            'success'
          );
          this.router.navigate(['/advertisement-confirmation']);
        },
        error: (error) => {
          console.error('Error:', error);
          this.presentToast(
            'An error occurred while submitting the form. Please try again.',
            'danger'
          );
        },
      });
  }

  ngOnInit() {
    this.loadUserInfo(); // Automatically load user info when the component is initialized
  }
}
