// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-agro-chemicalss-plant-growth-regulators',
//   templateUrl: './agro-chemicalss-plant-growth-regulators.page.html',
//   styleUrls: ['./agro-chemicalss-plant-growth-regulators.page.scss'],
// })
// export class AgroChemicalssPlantGrowthRegulatorsPage implements OnInit {


//   pgr = {
//     type: '',
//     title: '',
//     applicationRatio:null,
//     stock: null,
//     specification: '',
//     price1L: null,
//     price5L: null,
//     price10L: null,
//     address: '',
//     mobile: '',
//     acceptTerms: false
//   };
//   specifications: string[] = [];
//   selectedImages: File[] = [];
//   previewImages: string[] = [];

//   constructor(private http: HttpClient) {}

//   // Add specification to the list
//   addSpecification() {
//     if (this.pgr.specification) {
//       this.specifications.push(this.pgr.specification);
//       this.pgr.specification = ''; // Clear the input after adding
//     }
//   }

//   // Handle file selection
//   // onFileChange(event: any) {
//   //   if (event.target.files.length > 0) {
//   //     this.selectedFiles = Array.from(event.target.files);
//   //   }
//   // }

//   onFileChange(event: any): void {
//     const files = event.target.files;
//     this.selectedImages = []; // Reset previously selected images

//     // Read and preview the selected images
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();

//       reader.onload = (e: any) => {
//         this.selectedImages.push(e.target.result); // Add image URL for preview
//       };

//       reader.readAsDataURL(file); // Read the image as Data URL
//     }
//   }


//   // Handle form submission
//   onSubmit() {
//     if (this.pgr.acceptTerms) {
//       console.log('Form Data:', this.pgr);
//       console.log('Selected Files:', this.selectedImages);
//       console.log('Specifications:', this.specifications);
//       // Perform any further processing, like API submission here
//     } else {
//       alert('Please accept the terms and conditions to proceed.');
//     }
//   }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agro-chemicalss-plant-growth-regulators',
  templateUrl: './agro-chemicalss-plant-growth-regulators.page.html',
  styleUrls: ['./agro-chemicalss-plant-growth-regulators.page.scss'],
})
export class AgroChemicalssPlantGrowthRegulatorsPage implements OnInit {

  pgr: {
    type: string,
    title: string,
    applicationRatio: number | null,
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
    applicationRatio: null,
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
    if (this.pgr.specification) {
      this.specifications.push(this.pgr.specification);
      this.pgr.specification = ''; // Clear the input after adding
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
    if (this.pgr.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Agro Chemicals');
      formData.append('subcategory', 'Plant Growth Regulators');
      formData.append('title', this.pgr.title || '');
      formData.append('stock', this.pgr.stock !== null ? this.pgr.stock.toString() : '');
      formData.append('address', this.pgr.address || '');
      formData.append('mobile', this.pgr.mobile || '');
      formData.append('acceptTerms', this.pgr.acceptTerms ? '1' : '0');

      // Unique attributes for Plant Growth Regulators
      formData.append('type', this.pgr.type || '');
      formData.append('applicationRatio', this.pgr.applicationRatio !== null ? this.pgr.applicationRatio.toString() : '');
      formData.append('price1L', this.pgr.price1L !== null ? this.pgr.price1L.toString() : '');
      formData.append('price5L', this.pgr.price5L !== null ? this.pgr.price5L.toString() : '');
      formData.append('price10L', this.pgr.price10L !== null ? this.pgr.price10L.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_pgr.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pgr.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('PGR advertisement successfully submitted.');
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

