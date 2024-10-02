import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-machineries-planting-machines',
  templateUrl: './machineries-planting-machines.page.html',
  styleUrls: ['./machineries-planting-machines.page.scss'],
})
export class MachineriesPlantingMachinesPage implements OnInit {
  
    
  plantingmachines: {
        condition: string,
        rentorsell: string,
        title: string,
        stock: string,
        manufacturer: string,
        specification: string,
        price: number | null,
        address: string,
        mobile: string,
        acceptTerms: boolean
      } = {
        condition: '',
        rentorsell: '',
        title: '',
        stock: '',
        manufacturer: '',
        specification: '',
        price: null,
        address: '',
        mobile: '',
        acceptTerms: false
      };
    
      specifications: string[] = [];
      selectedImages: File[] = [];
      previewImages: string[] = [];
    
      constructor(private http: HttpClient) {}
    
      // Add specification to the list
      addSpecification() {
        if (this.plantingmachines.specification) {
          this.specifications.push(this.plantingmachines.specification);
          this.plantingmachines.specification = ''; // Clear the input after adding
        }
      }
    
      // Handle file selection and preview
      onFileChange(event: any): void {
        const files = Array.from(event.target.files) as File[]; // Ensure type is 'File'
        this.selectedImages = files; // Store selected files
        this.previewImages = []; // Reset preview images
    
        files.forEach(file => {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.previewImages.push(e.target.result); // Add image URL for preview
          };
          reader.readAsDataURL(file); // Read the image as Data URL for preview
        });
      }
    
      // Handle form submission
      onSubmit() {
        if (this.plantingmachines.acceptTerms) {
          const formData = new FormData();
    
          // Common attributes
          formData.append('category', 'Machineries');
          formData.append('subcategory', 'Planting Machines');
          formData.append('title', this.plantingmachines.title || '');
          formData.append('stock', this.plantingmachines.stock || '');
          formData.append('address', this.plantingmachines.address || '');
          formData.append('mobile', this.plantingmachines.mobile || '');
          formData.append('acceptTerms', this.plantingmachines.acceptTerms ? '1' : '0');
    
          // Unique attributes for Planting Machines
          formData.append('condition', this.plantingmachines.condition || '');
          formData.append('rentorsell', this.plantingmachines.rentorsell || '');
          formData.append('manufacturer', this.plantingmachines.manufacturer || '');
          formData.append('price', this.plantingmachines.price !== null ? this.plantingmachines.price.toString() : '');
    
          // Add specifications as JSON
          formData.append('specifications', JSON.stringify(this.specifications));
    
          // Add images
          this.selectedImages.forEach((image, index) => {
            formData.append('images[]', image, image.name);
          });
    
          // Send form data to backend (replace with actual endpoint)
          this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_plantingmachines.php', formData)
            .subscribe({
              next: (response) => {
                console.log('Response:', response);
                alert('Planting Machines advertisement successfully submitted.');
              },
              error: (error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form. Please try again.');
              }
            });
        } else {
          alert('Please accept the terms and conditions to proceed.');
        }
      }
    
      ngOnInit() {}
    }
