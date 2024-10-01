// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-planting-materials-seedlings',
//   templateUrl: './planting-materials-seedlings.page.html',
//   styleUrls: ['./planting-materials-seedlings.page.scss'],
// })
// export class PlantingMaterialsSeedlingsPage implements OnInit {

//   seedlings = {
//     type: '',
//     variety: '',
//     title: '',
//     stock: null,
//     specification: '',
//     age: null,
//     size: null,
//     price: null,
//     address: '',
//     mobile: '',
//     acceptTerms: false
//   };
//   specifications: string[] = [];
//   selectedImages: string[] = [];

//   constructor() { }

//   // Add specification to the list
//   addSpecification() {
//     if (this.seedlings.specification) {
//       this.specifications.push(this.seedlings.specification);
//       this.seedlings.specification = ''; // Clear the input after adding
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
//     if (this.seedlings.acceptTerms) {
//       console.log('Form Data:', this.seedlings);
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
  selector: 'app-planting-materials-seedlings',
  templateUrl: './planting-materials-seedlings.page.html',
  styleUrls: ['./planting-materials-seedlings.page.scss'],
})
export class PlantingMaterialsSeedlingsPage implements OnInit {

  seedlings: {
    type: string,
    variety: string,
    title: string,
    stock: number | null,
    specification: string,
    age: number | null,  // Age of the seedlings
    size: number | null,  // Size of the seedlings
    price: number | null,  // Price of the seedlings
    address: string,
    mobile: string,
    acceptTerms: boolean
  } = {
    type: '',
    variety: '',
    title: '',
    stock: null,
    specification: '',
    age: null,
    size: null,
    price: null,
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
    if (this.seedlings.specification) {
      this.specifications.push(this.seedlings.specification);
      this.seedlings.specification = ''; // Clear the input after adding
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
    if (this.seedlings.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Planting Materials');
      formData.append('subcategory', 'Seedlings');
      formData.append('title', this.seedlings.title || '');
      formData.append('stock', this.seedlings.stock !== null ? this.seedlings.stock.toString() : '');
      formData.append('address', this.seedlings.address || '');
      formData.append('mobile', this.seedlings.mobile || '');
      formData.append('acceptTerms', this.seedlings.acceptTerms ? '1' : '0');

      // Unique attributes for Seedlings
      formData.append('type', this.seedlings.type || '');
      formData.append('variety', this.seedlings.variety || '');
      formData.append('age', this.seedlings.age !== null ? this.seedlings.age.toString() : '');
      formData.append('size', this.seedlings.size !== null ? this.seedlings.size.toString() : '');
      formData.append('price', this.seedlings.price !== null ? this.seedlings.price.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_seedlings.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_seedlings.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Seedlings advertisement successfully submitted.');
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
