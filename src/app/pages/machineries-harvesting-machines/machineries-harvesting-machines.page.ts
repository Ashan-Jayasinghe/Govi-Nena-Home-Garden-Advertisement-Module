import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';  // Import ToastController
import { Router } from '@angular/router';
@Component({
  selector: 'app-machineries-harvesting-machines',
  templateUrl: './machineries-harvesting-machines.page.html',
  styleUrls: ['./machineries-harvesting-machines.page.scss'],
})
export class MachineriesHarvestingMachinesPage implements OnInit {

  harvestingmachines: {
    userName: string,  // Added userName field
    condition: string,
    rentorsell: string,
    title: string,
    stock: string,
    manufacturer: string,
    description: string,
    price: number | null,
    address: string,
    mobile: string,
    acceptTerms: boolean
  } = {
    userName: '',  // Initialize userName as empty
    condition: '',
    rentorsell: '',
    title: '',
    stock: '',
    manufacturer: '',
    description: '',
    price: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  //specifications: string[] = [];
  selectedImages: File[] = [];
  previewImages: string[] = [];
  imageError: string = '';  // To display image error

  constructor(private http: HttpClient, private toastController: ToastController, private router: Router) {}  // Inject ToastController

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

  // // Add specification to the list
  // addSpecification() {
  //   if (this.harvestingmachines.specification) {
  //     this.specifications.push(this.harvestingmachines.specification);
  //     this.harvestingmachines.specification = ''; // Clear the input after adding
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

    // Load user info to automatically set userName
    loadUserInfo() {
      this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
        withCredentials: true
      }).subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            this.harvestingmachines.userName = response.user.name;  // Automatically set the user name
           // this.harvestingmachines.userId = response.user.id;      // Automatically set the user ID
  
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
    if (!this.harvestingmachines.acceptTerms) {
      this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
      return;
    }

    if (!this.harvestingmachines.condition || !this.harvestingmachines.rentorsell || !this.harvestingmachines.title || this.harvestingmachines.price === null || !this.harvestingmachines.mobile) {
      this.presentToast('Please fill in all the required fields.', 'danger');
      return;
    }

    // Validate mobile number
    if (!this.isValidMobile(this.harvestingmachines.mobile)) {
      this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
      return;
    }

    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Machineries');
    formData.append('subcategory', 'Harvesting Machines');
    formData.append('title', this.harvestingmachines.title || '');
    formData.append('stock', this.harvestingmachines.stock || '');
    formData.append('address', this.harvestingmachines.address || '');
    formData.append('mobile', this.harvestingmachines.mobile || '');
    formData.append('acceptTerms', this.harvestingmachines.acceptTerms ? '1' : '0');
    formData.append('description', this.harvestingmachines.description || '');
    // Unique attributes for Harvesting Machines
    formData.append('condition', this.harvestingmachines.condition || '');
    formData.append('rentorsell', this.harvestingmachines.rentorsell || '');
    formData.append('manufacturer', this.harvestingmachines.manufacturer || '');
    formData.append('price', this.harvestingmachines.price !== null ? this.harvestingmachines.price.toString() : '');


        // Add userName
        formData.append('userName', this.harvestingmachines.userName || '');

    // Add specifications as JSON
    //formData.append('specifications', JSON.stringify(this.specifications));

    // Add images
    this.selectedImages.forEach((image, index) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (replace with actual endpoint)
    this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_harvestingmachines.php', formData, {
      withCredentials: true  // Ensure that cookies are sent with the request
    }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.presentToast('Harvesting machines advertisement successfully submitted.', 'success');
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
