// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient,HttpHeaders } from '@angular/common/http';
// // @Component({
// //   selector: 'app-agro-chemicals-pesticides',
// //   templateUrl: './agro-chemicals-pesticides.page.html',
// //   styleUrls: ['./agro-chemicals-pesticides.page.scss'],
// // })
// // export class AgroChemicalsPesticidesPage implements OnInit {


// //   pesticides: {
// //     type: string,
// //     title: string,
// //     applicationRatio: number | null,
// //     stock: number | null,
// //     specification: string,
// //     price1L: number | null,
// //     price5L: number | null,
// //     price10L: number | null,
// //     address: string,
// //     mobile: string,
// //     acceptTerms: boolean
// //   } = {
// //     type: '',
// //     title: '',
// //     applicationRatio: null,
// //     stock: null,
// //     specification: '',
// //     price1L: null,
// //     price5L: null,
// //     price10L: null,
// //     address: '',
// //     mobile: '',
// //     acceptTerms: false
// //   };
// //   specifications: string[] = [];
// //   selectedImages: File[] = [];

// //   constructor(private http: HttpClient) { }

// //   // Add specification to the list
// //   addSpecification() {
// //     if (this.pesticides.specification) {
// //       this.specifications.push(this.pesticides.specification);
// //       this.pesticides.specification = ''; // Clear the input after adding
// //     }
// //   }

// //   // Handle file selection
// //   // onFileChange(event: any) {
// //   //   if (event.target.files.length > 0) {
// //   //     this.selectedFiles = Array.from(event.target.files);
// //   //   }
// //   // }

// //   // onFileChange(event: any): void {
// //   //   const files = event.target.files;
// //   //   this.selectedImages = []; // Reset previously selected images

// //   //   // Read and preview the selected images
// //   //   for (let i = 0; i < files.length; i++) {
// //   //     const file = files[i];
// //   //     const reader = new FileReader();

// //   //     reader.onload = (e: any) => {
// //   //       this.selectedImages.push(e.target.result); // Add image URL for preview
// //   //     };

// //   //     reader.readAsDataURL(file); // Read the image as Data URL
// //   //   }
// //   // }

// //   onFileChange(event: any): void {
// //     const files = event.target.files;
// //     this.selectedImages = []; // Reset previously selected images
  
// //     // Read and preview the selected images
// //     for (let i = 0; i < files.length; i++) {
// //       const file = files[i];
// //       const reader = new FileReader();
  
// //       reader.onload = (e: any) => {
// //         this.selectedImages.push(e.target.result); // Add image URL for preview
// //       };
  
// //       reader.readAsDataURL(file); // Read the image as Data URL for preview
// //     }
// //   }
  


// //   // Handle form submission
// //   // onSubmit() {
// //   //   if (this.pesticides.acceptTerms) {
// //   //     console.log('Form Data:', this.pesticides);
// //   //     console.log('Selected Files:', this.selectedImages);
// //   //     console.log('Specifications:', this.specifications);
// //   //     // Perform any further processing, like API submission here
// //   //   } else {
// //   //     alert('Please accept the terms and conditions to proceed.');
// //   //   }
// //   // }

// //   // onSubmit() {
// //   //   if (this.pesticides.acceptTerms) {
// //   //     const formData = new FormData();
  
// //   //     formData.append('type', this.pesticides.type || '');  // Default to empty string if null
// //   //     formData.append('title', this.pesticides.title || '');
// //   //     formData.append('applicationRatio', this.pesticides.applicationRatio !== null ? this.pesticides.applicationRatio.toString() : '');
// //   //     formData.append('stock', this.pesticides.stock !== null ? this.pesticides.stock.toString() : '');
// //   //     formData.append('specifications', JSON.stringify(this.specifications));  // Convert specifications to JSON
// //   //     formData.append('price1L', this.pesticides.price1L !== null ? this.pesticides.price1L.toString() : '');
// //   //     formData.append('price5L', this.pesticides.price5L !== null ? this.pesticides.price5L.toString() : '');
// //   //     formData.append('price10L', this.pesticides.price10L !== null ? this.pesticides.price10L.toString() : '');
// //   //     formData.append('address', this.pesticides.address || '');
// //   //     formData.append('mobile', this.pesticides.mobile || '');
  
// //   //     // Append images as raw file objects for backend processing
// //   //     const input = (document.getElementById('imageInput') as HTMLInputElement);
// //   //     if (input?.files) {
// //   //       for (let i = 0; i < input.files.length; i++) {
// //   //         formData.append('images[]', input.files[i], input.files[i].name);
// //   //       }
// //   //     }
  
// //   //     // Send data to the PHP backend
// //   //     this.http.post('http://yourserver.com/add_agro_chemicals.php', formData).subscribe(response => {
// //   //       console.log('Response:', response);
// //   //       alert('Advertisement successfully submitted.');
// //   //     }, error => {
// //   //       console.error('Error:', error);
// //   //       alert('An error occurred while submitting the form. Please try again.');
// //   //     });
// //   //   } else {
// //   //     alert('Please accept the terms and conditions to proceed.');
// //   //   }
// //   // }


// //   onSubmit() {
// //     if (this.pesticides.acceptTerms) {
// //       const formData = new FormData();
  
// //       // Common attributes
// //       formData.append('category', 'Agro Chemicals');  // Hardcode the category name
// //       formData.append('subcategory', 'Pesticides');  // Hardcode the subcategory name
// //       formData.append('title', this.pesticides.title || '');
// //       formData.append('stock', this.pesticides.stock !== null ? this.pesticides.stock.toString() : '');
// //       formData.append('address', this.pesticides.address || '');
// //       formData.append('mobile', this.pesticides.mobile || '');
// //       formData.append('acceptTerms', this.pesticides.acceptTerms ? '1' : '0');
  
// //       // Unique attributes for Pesticides
// //       formData.append('type', this.pesticides.type || '');
// //       formData.append('applicationRatio', this.pesticides.applicationRatio !== null ? this.pesticides.applicationRatio.toString() : '');
// //       //formData.append('specification', this.pesticides.specification || '');
// //       formData.append('price1L', this.pesticides.price1L !== null ? this.pesticides.price1L.toString() : '');
// //       formData.append('price5L', this.pesticides.price5L !== null ? this.pesticides.price5L.toString() : '');
// //       formData.append('price10L', this.pesticides.price10L !== null ? this.pesticides.price10L.toString() : '');
  
// //       // Image handling
// //       const imageInput = (document.getElementById('images') as HTMLInputElement);
// //       if (imageInput.files) {
// //         for (let i = 0; i < imageInput.files.length; i++) {
// //           formData.append('images[]', imageInput.files[i], imageInput.files[i].name);
// //         }
// //       }
  
// //       // Specifications handling
// //       this.specifications.forEach(spec => {
// //         formData.append('specifications[]', spec);
// //       });
  
// //       // Send form data to backend (add_pesticides.php)
// //       this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pesticides.php', formData).subscribe(response => {
// //         console.log('Response:', response);
// //         alert('Pesticide advertisement successfully submitted.');
// //       }, error => {
// //         console.error('Error:', error);
// //         alert('An error occurred while submitting the form.');
// //       });
// //     } else {
// //       alert('Please accept the terms and conditions to proceed.');
// //     }
// //   }
  
  
  
// //   ngOnInit() {
// //   }

// // }



// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-agro-chemicals-pesticides',
//   templateUrl: './agro-chemicals-pesticides.page.html',
//   styleUrls: ['./agro-chemicals-pesticides.page.scss'],
// })
// export class AgroChemicalsPesticidesPage implements OnInit {

//   pesticides: {
//     type: string,
//     title: string,
//     applicationRatio: number | null,
//     stock: number | null,
//     specification: string,
//     price1L: number | null,
//     price5L: number | null,
//     price10L: number | null,
//     address: string,
//     mobile: string,
//     acceptTerms: boolean
//   } = {
//     type: '',
//     title: '',
//     applicationRatio: null,
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
//   previewImages:string[] =[];

//   constructor(private http: HttpClient) {}

//   // Add specification to the list
//   addSpecification() {
//     if (this.pesticides.specification) {
//       this.specifications.push(this.pesticides.specification);
//       this.pesticides.specification = ''; // Clear the input after adding
//     }
//   }

//   // Handle file selection
//   onFileChange(event: any): void {
//     this.selectedImages = Array.from(event.target.files); // Reset previously selected images
//   }

//   // Handle form submission
//   onSubmit() {
//     if (this.pesticides.acceptTerms) {
//       const formData = new FormData();

//       // Common attributes
//       formData.append('category', 'Agro Chemicals');
//       formData.append('subcategory', 'Pesticides');
//       formData.append('title', this.pesticides.title || '');
//       formData.append('stock', this.pesticides.stock !== null ? this.pesticides.stock.toString() : '');
//       formData.append('address', this.pesticides.address || '');
//       formData.append('mobile', this.pesticides.mobile || '');
//       formData.append('acceptTerms', this.pesticides.acceptTerms ? '1' : '0');

//       // Unique attributes for Pesticides
//       formData.append('type', this.pesticides.type || '');
//       formData.append('applicationRatio', this.pesticides.applicationRatio !== null ? this.pesticides.applicationRatio.toString() : '');
//       formData.append('price1L', this.pesticides.price1L !== null ? this.pesticides.price1L.toString() : '');
//       formData.append('price5L', this.pesticides.price5L !== null ? this.pesticides.price5L.toString() : '');
//       formData.append('price10L', this.pesticides.price10L !== null ? this.pesticides.price10L.toString() : '');

//       // Add specifications as JSON
//       formData.append('specifications', JSON.stringify(this.specifications));

//       // Add images
//       this.selectedImages.forEach((image, index) => {
//         formData.append('images[]', image, image.name);
//       });

//       // Send form data to the backend (add_pesticides.php)
//       this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pesticides.php', formData)
//         .subscribe({
//           next: (response) => {
//             console.log('Response:', response);
//             alert('Pesticide advertisement successfully submitted.');
//           },
//           error: (error) => {
//             console.error('Error:', error);
//             alert('An error occurred while submitting the form. Please try again.');
//           }
//         });
//     } else {
//       alert('Please accept the terms and conditions to proceed.');
//     }
//   }

//   ngOnInit() {}
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agro-chemicals-pesticides',
  templateUrl: './agro-chemicals-pesticides.page.html',
  styleUrls: ['./agro-chemicals-pesticides.page.scss'],
})
export class AgroChemicalsPesticidesPage implements OnInit {

  pesticides: {
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
    if (this.pesticides.specification) {
      this.specifications.push(this.pesticides.specification);
      this.pesticides.specification = ''; // Clear the input after adding
    }
  }

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
    if (this.pesticides.acceptTerms) {
      const formData = new FormData();

      // Common attributes
      formData.append('category', 'Agro Chemicals');
      formData.append('subcategory', 'Pesticides');
      formData.append('title', this.pesticides.title || '');
      formData.append('stock', this.pesticides.stock !== null ? this.pesticides.stock.toString() : '');
      formData.append('address', this.pesticides.address || '');
      formData.append('mobile', this.pesticides.mobile || '');
      formData.append('acceptTerms', this.pesticides.acceptTerms ? '1' : '0');

      // Unique attributes for Pesticides
      formData.append('type', this.pesticides.type || '');
      formData.append('applicationRatio', this.pesticides.applicationRatio !== null ? this.pesticides.applicationRatio.toString() : '');
      formData.append('price1L', this.pesticides.price1L !== null ? this.pesticides.price1L.toString() : '');
      formData.append('price5L', this.pesticides.price5L !== null ? this.pesticides.price5L.toString() : '');
      formData.append('price10L', this.pesticides.price10L !== null ? this.pesticides.price10L.toString() : '');

      // Add specifications as JSON
      formData.append('specifications', JSON.stringify(this.specifications));

      // Add images
      this.selectedImages.forEach((image, index) => {
        formData.append('images[]', image, image.name);
      });

      // Send form data to backend (add_pesticides.php)
      this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_pesticides.php', formData)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            alert('Pesticide advertisement successfully submitted.');
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

