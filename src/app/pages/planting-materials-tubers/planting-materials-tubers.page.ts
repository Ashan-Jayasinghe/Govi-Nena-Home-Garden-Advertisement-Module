
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planting-materials-tubers',
  templateUrl: './planting-materials-tubers.page.html',
  styleUrls: ['./planting-materials-tubers.page.scss'],
})
export class PlantingMaterialsTubersPage implements OnInit {

  tuber: {
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
    if (this.tuber.specification) {
      this.specifications.push(this.tuber.specification);
      this.tuber.specification = ''; // Clear the input after adding
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
    if (this.tuber.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Planting Materials');
      formData.append('subcategory', 'Tubers');
      formData.append('title', this.tuber.title || '');
      formData.append('stock', this.tuber.stock !== null ? this.tuber.stock.toString() : '');
      formData.append('address', this.tuber.address || '');
      formData.append('mobile', this.tuber.mobile || '');
      formData.append('acceptTerms', this.tuber.acceptTerms ? '1' : '0');

      // Unique attributes for Tubers
      formData.append('type', this.tuber.type || '');
      formData.append('variety', this.tuber.variety || '');
      formData.append('price1kg', this.tuber.price1kg !== null ? this.tuber.price1kg.toString() : '');
      formData.append('price5kg', this.tuber.price5kg !== null ? this.tuber.price5kg.toString() : '');
      formData.append('price10kg', this.tuber.price10kg !== null ? this.tuber.price10kg.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_tubers.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_tubers.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Tuber advertisement successfully submitted.');
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
