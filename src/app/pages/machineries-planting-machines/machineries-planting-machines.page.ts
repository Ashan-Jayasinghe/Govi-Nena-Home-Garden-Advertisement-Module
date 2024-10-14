import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-machineries-planting-machines',
  templateUrl: './machineries-planting-machines.page.html',
  styleUrls: ['./machineries-planting-machines.page.scss'],
})
export class MachineriesPlantingMachinesPage implements OnInit {
  
    
  plantingmachines: {
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
        userName:'',
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
      // Add specification to the list
      // addSpecification() {
      //   if (this.plantingmachines.specification) {
      //     this.specifications.push(this.plantingmachines.specification);
      //     this.plantingmachines.specification = ''; // Clear the input after adding
      //   }
      // }
    
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

     // Load user info to automatically set userName
  loadUserInfo() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.plantingmachines.userName = response.user.name;  // Automatically set the user name
         // this.irrigationSystems.userId = response.user.id;      // Automatically set the user ID

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

        if (!this.plantingmachines.acceptTerms) {
          this.presentToast('Please accept the terms and conditions to proceed.', 'danger');
          return;
        }
    
        if (!this.plantingmachines.condition || !this.plantingmachines.rentorsell || !this.plantingmachines.title || this.plantingmachines.price === null || !this.plantingmachines.mobile) {
          this.presentToast('Please fill in all the required fields.', 'danger');
          return;
        }
    
        // Validate mobile number
        if (!this.isValidMobile(this.plantingmachines.mobile)) {
          this.presentToast('Please enter a valid 10-digit mobile number.', 'danger');
          return;
        }
        const formData = new FormData();
    
          // Common attributes
          formData.append('category', 'Machineries');
          formData.append('subcategory', 'Planting Machines');
          formData.append('title', this.plantingmachines.title || '');
          formData.append('stock', this.plantingmachines.stock || '');
          formData.append('address', this.plantingmachines.address || '');
          formData.append('mobile', this.plantingmachines.mobile || '');
          formData.append('acceptTerms', this.plantingmachines.acceptTerms ? '1' : '0');
          formData.append('description', this.plantingmachines.description || '');

          // Unique attributes for Planting Machines
          formData.append('condition', this.plantingmachines.condition || '');
          formData.append('rentorsell', this.plantingmachines.rentorsell || '');
          formData.append('manufacturer', this.plantingmachines.manufacturer || '');
          formData.append('price', this.plantingmachines.price !== null ? this.plantingmachines.price.toString() : '');
    
          // Add specifications as JSON
          //formData.append('specifications', JSON.stringify(this.specifications));
          formData.append('userName', this.plantingmachines.userName || '');

          // Add images
          this.selectedImages.forEach((image, index) => {
            formData.append('images[]', image, image.name);
          });
    
         // Send form data to backend (replace with actual endpoint)
        this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_plantingmachines.php', formData, {
        withCredentials: true  // Ensure that cookies are sent with the request
        }).subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.presentToast(' Planting Machines advertisement successfully submitted.', 'success');
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
