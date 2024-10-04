import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-machineries-other',
  templateUrl: './machineries-other.page.html',
  styleUrls: ['./machineries-other.page.scss'],
})
export class MachineriesOtherPage implements OnInit {


    
      
    othermachines: {
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
          if (this.othermachines.specification) {
            this.specifications.push(this.othermachines.specification);
            this.othermachines.specification = ''; // Clear the input after adding
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
          if (this.othermachines.acceptTerms) {
            const formData = new FormData();
      
            // Common attributes
            formData.append('category', 'Machineries');
            formData.append('subcategory', 'Other Machines');
            formData.append('title', this.othermachines.title || '');
            formData.append('stock', this.othermachines.stock || '');
            formData.append('address', this.othermachines.address || '');
            formData.append('mobile', this.othermachines.mobile || '');
            formData.append('acceptTerms', this.othermachines.acceptTerms ? '1' : '0');
      
            // Unique attributes for Other Machines
            formData.append('condition', this.othermachines.condition || '');
            formData.append('rentorsell', this.othermachines.rentorsell || '');
            formData.append('manufacturer', this.othermachines.manufacturer || '');
            formData.append('price', this.othermachines.price !== null ? this.othermachines.price.toString() : '');
      
            // Add specifications as JSON
            formData.append('specifications', JSON.stringify(this.specifications));
      
            // Add images
            this.selectedImages.forEach((image, index) => {
              formData.append('images[]', image, image.name);
            });
      
            // Send form data to backend (replace with actual endpoint)
            this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_othermachines.php', formData)
              .subscribe({
                next: (response) => {
                  console.log('Response:', response);
                  alert('Other Machines advertisement successfully submitted.');
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
  


