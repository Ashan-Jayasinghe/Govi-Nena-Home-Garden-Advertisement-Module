import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables-fruits-fruits',
  templateUrl: './vegetables-fruits-fruits.page.html',
  styleUrls: ['./vegetables-fruits-fruits.page.scss'],
})
export class VegetablesFruitsFruitsPage implements OnInit {
  fruits: {
    userName: string; // Added userName field
    type: string;
    variety: string;
    title: string;
    stock: number | null;
    description: string;
    price1kg: number | null;
    price5kg: number | null;
    price10kg: number | null;
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
    price1kg: null,
    price5kg: null,
    price10kg: null,
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
            this.fruits.userName = response.user.name; // Automatically set the user name
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
  //   if (this.fruits.specification) {
  //     this.specifications.push(this.fruits.specification);
  //     this.fruits.specification = ''; // Clear the input after adding
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
    if (!this.fruits.acceptTerms) {
      this.presentToast(
        'Please accept the terms and conditions to proceed.',
        'danger'
      );
      return;
    }

    if (
      !this.fruits.type ||
      !this.fruits.variety ||
      !this.fruits.title ||
      this.fruits.price1kg === null ||
      !this.fruits.mobile
    ) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.fruits.mobile)) {
      this.presentToast(
        'Please enter a valid 10-digit mobile number.',
        'danger'
      );
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Planting Materials');
    formData.append('subcategory', 'fruits');
    formData.append('userName', this.fruits.userName || '');
    formData.append('title', this.fruits.title || '');
    formData.append(
      'stock',
      this.fruits.stock !== null ? this.fruits.stock.toString() : ''
    );
    formData.append('address', this.fruits.address || '');
    formData.append('mobile', this.fruits.mobile || '');
    formData.append('acceptTerms', this.fruits.acceptTerms ? '1' : '0');

    // Unique attributes for fruits
    formData.append('type', this.fruits.type || '');
    formData.append('variety', this.fruits.variety || '');
    formData.append(
      'price1kg',
      this.fruits.price1kg !== null
        ? this.fruits.price1kg.toString()
        : ''
    );
    formData.append(
      'price5kg',
      this.fruits.price5kg !== null
        ? this.fruits.price5kg.toString()
        : ''
    );
    formData.append(
      'price10kg',
      this.fruits.price10kg !== null
        ? this.fruits.price10kg.toString()
        : ''
    );

    // Add specifications as JSON
    formData.append('description', this.fruits.description || '');

    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend
    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_fruits.php',
        formData,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.presentToast(
            'Fruits advertisement successfully submitted.',
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
