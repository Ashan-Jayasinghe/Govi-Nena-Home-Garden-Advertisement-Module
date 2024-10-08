
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planting-materials-seeds',
  templateUrl: './planting-materials-seeds.page.html',
  styleUrls: ['./planting-materials-seeds.page.scss'],
})
export class PlantingMaterialsSeedsPage implements OnInit {

  seeds: {
    type: string,
    variety: string,
    title: string,
    stock: number | null,
    specification: string,
    price1kg: number | null,
    price5kg: number | null,
    price10kg: number | null,
    address: string,
    mobile: string,
    acceptTerms: boolean
  } = {
    type: '',
    variety: '',
    title: '',
    stock: null,
    specification: '',
    price1kg: null,
    price5kg: null,
    price10kg: null,
    address: '',
    mobile: '',
    acceptTerms: false
  };

  specifications: string[] = [];
  selectedImages: File[] = [];
  previewImages: string[] = [];

  constructor(private http: HttpClient) { }

  // Add specification to the list
  addSpecification() {
    if (this.seeds.specification) {
      this.specifications.push(this.seeds.specification);
      this.seeds.specification = ''; // Clear the input after adding
    }
  }

  // Handle file selection and preview
  onFileChange(event: any): void {
    const files = Array.from(event.target.files) as File[]; // Ensure the type is 'File'
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
    if (this.seeds.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Planting Materials');
      formData.append('subcategory', 'Seeds');
      formData.append('title', this.seeds.title || '');
      formData.append('stock', this.seeds.stock !== null ? this.seeds.stock.toString() : '');
      formData.append('address', this.seeds.address || '');
      formData.append('mobile', this.seeds.mobile || '');
      formData.append('acceptTerms', this.seeds.acceptTerms ? '1' : '0');

      // Unique attributes for Seeds
      formData.append('type', this.seeds.type || '');
      formData.append('variety', this.seeds.variety || '');
      formData.append('price1kg', this.seeds.price1kg !== null ? this.seeds.price1kg.toString() : '');
      formData.append('price5kg', this.seeds.price5kg !== null ? this.seeds.price5kg.toString() : '');
      formData.append('price10kg', this.seeds.price10kg !== null ? this.seeds.price10kg.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_seeds.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_seeds.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Seeds advertisement successfully submitted.');
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
