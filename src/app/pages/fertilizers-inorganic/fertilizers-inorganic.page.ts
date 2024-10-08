


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fertilizers-inorganic',
  templateUrl: './fertilizers-inorganic.page.html',
  styleUrls: ['./fertilizers-inorganic.page.scss'],
})
export class FertilizersInorganicPage implements OnInit {

  inorganic: {
    type: string,
    title: string,
    npkRatio: string | null,  // NPK ratio is important for inorganic fertilizers
    method: string,  // Method of application for inorganic fertilizers
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
    npkRatio: null,
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
    if (this.inorganic.specification) {
      this.specifications.push(this.inorganic.specification);
      this.inorganic.specification = ''; // Clear the input after adding
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
    if (this.inorganic.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Fertilizers');
      formData.append('subcategory', 'Inorganic Fertilizers');
      formData.append('title', this.inorganic.title || '');
      formData.append('stock', this.inorganic.stock !== null ? this.inorganic.stock.toString() : '');
      formData.append('address', this.inorganic.address || '');
      formData.append('mobile', this.inorganic.mobile || '');
      formData.append('acceptTerms', this.inorganic.acceptTerms ? '1' : '0');

      // Unique attributes for Inorganic Fertilizers
      formData.append('type', this.inorganic.type || '');
      formData.append('npkRatio', this.inorganic.npkRatio || ''); // Specific for inorganic fertilizers
      formData.append('method', this.inorganic.method || ''); // Method of application
      formData.append('price1L', this.inorganic.price1L !== null ? this.inorganic.price1L.toString() : '');
      formData.append('price5L', this.inorganic.price5L !== null ? this.inorganic.price5L.toString() : '');
      formData.append('price10L', this.inorganic.price10L !== null ? this.inorganic.price10L.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_inorganic.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_inorganic.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Inorganic fertilizer advertisement successfully submitted.');
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
