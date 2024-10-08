

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fertilizers-organic',
  templateUrl: './fertilizers-organic.page.html',
  styleUrls: ['./fertilizers-organic.page.scss'],
})
export class FertilizersOrganicPage implements OnInit {

  organic: {
    type: string,
    title: string,
    npk: string | null, // NPK ratio for organic fertilizers
    method: string, // Method of application for organic fertilizers
    stock: number | null,
    specification: string,
    price1L: number | null,
    price5L: number | null,
    price10L: number | null,
    address: string,
    mobile: string,
    acceptTerms: boolean
  } = {
    type: '',
    title: '',
    npk: null,
    method: '',
    stock: null,
    specification: '',
    price1L: null,
    price5L: null,
    price10L: null,
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
    if (this.organic.specification) {
      this.specifications.push(this.organic.specification);
      this.organic.specification = ''; // Clear the input after adding
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
    if (this.organic.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Fertilizers');
      formData.append('subcategory', 'Organic Fertilizers');
      formData.append('title', this.organic.title || '');
      formData.append('stock', this.organic.stock !== null ? this.organic.stock.toString() : '');
      formData.append('address', this.organic.address || '');
      formData.append('mobile', this.organic.mobile || '');
      formData.append('acceptTerms', this.organic.acceptTerms ? '1' : '0');

      // Unique attributes for Organic Fertilizers
      formData.append('type', this.organic.type || '');
      formData.append('npk', this.organic.npk || ''); // NPK ratio specific to organic fertilizers
      formData.append('method', this.organic.method || ''); // Application method for organic fertilizers
      formData.append('price1L', this.organic.price1L !== null ? this.organic.price1L.toString() : '');
      formData.append('price5L', this.organic.price5L !== null ? this.organic.price5L.toString() : '');
      formData.append('price10L', this.organic.price10L !== null ? this.organic.price10L.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_organic.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_organic.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Organic fertilizer advertisement successfully submitted.');
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


