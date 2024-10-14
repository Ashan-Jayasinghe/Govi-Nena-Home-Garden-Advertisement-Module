import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-planting-materials-seedlings',
  templateUrl: './planting-materials-seedlings.page.html',
  styleUrls: ['./planting-materials-seedlings.page.scss'],
})
export class PlantingMaterialsSeedlingsPage implements OnInit {

  seedlings: {
    userName: string;  // Added userName field
    type: string;
    variety: string;
    title: string;
    stock: number | null;
    description: string;
    age: number | null;  // Age of the seedlings
    size: number | null;  // Size of the seedlings
    price: number | null;  // Price of the seedlings
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
    age: null,
    size: null,
    price: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  //specifications: string[] = [];
  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = '';  // To display image error

  constructor(private http: HttpClient, private toastController: ToastController) { }

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
          this.seedlings.userName = response.user.name;  // Automatically set the user name
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

  // Add specification to the list
  // addSpecification() {
  //   if (this.seedlings.specification) {
  //     this.specifications.push(this.seedlings.specification);
  //     this.seedlings.specification = ''; // Clear the input after adding
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

  // Handle form submission
  onSubmit() {
    if (!this.seedlings.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    if (!this.seedlings.type || !this.seedlings.variety || !this.seedlings.title || this.seedlings.price === null || !this.seedlings.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.seedlings.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Planting Materials');
    formData.append('subcategory', 'Seedlings');
    formData.append('userName', this.seedlings.userName || '');
    formData.append('title', this.seedlings.title || '');
    formData.append('stock', this.seedlings.stock !== null ? this.seedlings.stock.toString() : '');
    formData.append('address', this.seedlings.address || '');
    formData.append('mobile', this.seedlings.mobile || '');
    formData.append('acceptTerms', this.seedlings.acceptTerms ? '1' : '0');
    formData.append('description', this.seedlings.description || '');
    // Unique attributes for Seedlings
    formData.append('type', this.seedlings.type || '');
    formData.append('variety', this.seedlings.variety || '');
    formData.append('age', this.seedlings.age !== null ? this.seedlings.age.toString() : '');
    formData.append('size', this.seedlings.size !== null ? this.seedlings.size.toString() : '');
    formData.append('price', this.seedlings.price !== null ? this.seedlings.price.toString() : '');


    // Add images
    this.selectedImages.forEach((image) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (add_seedlings.php)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_seedlings.php', formData, {
      withCredentials: true
    })
    .subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Seedlings advertisement successfully submitted.', 'success');
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
