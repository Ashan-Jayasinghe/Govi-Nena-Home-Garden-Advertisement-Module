// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';

// // @Component({
// //   selector: 'app-machineries-dryers',
// //   templateUrl: './machineries-dryers.page.html',
// //   styleUrls: ['./machineries-dryers.page.scss'],
// // })
// // export class MachineriesDryersPage implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-machineries-dryers',
//   templateUrl: './machineries-dryers.page.html',
//   styleUrls: ['./machineries-dryers.page.scss'],
// })
// export class MachineriesDryersPage implements OnInit {

//   dryers: {
//     condition: string,
//     rentorsell: string,
//     title: string,
//     stock: string,
//     manufacturer: string,
//     specification: string,
//     price: number | null,
//     address: string,
//     mobile: string,
//     acceptTerms: boolean
//   } = {
//     condition: '',
//     rentorsell: '',
//     title: '',
//     stock: '',
//     manufacturer: '',
//     specification: '',
//     price: null,
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
//     if (this.dryers.specification) {
//       this.specifications.push(this.dryers.specification);
//       this.dryers.specification = ''; // Clear the input after adding
//     }
//   }

//   // Handle file selection and preview
//   onFileChange(event: any): void {
//     const files = Array.from(event.target.files) as File[]; // Ensure type is 'File'
//     this.selectedImages = files; // Store selected files
//     this.previewImages = []; // Reset preview images

//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.previewImages.push(e.target.result); // Add image URL for preview
//       };
//       reader.readAsDataURL(file); // Read the image as Data URL for preview
//     });
//   }

//   // Handle form submission
//   onSubmit() {
//     if (this.dryers.acceptTerms) {
//       const formData = new FormData();

//       // Common attributes
//       formData.append('category', 'Machineries');
//       formData.append('subcategory', 'Dryers');
//       formData.append('title', this.dryers.title || '');
//       formData.append('stock', this.dryers.stock || '');
//       formData.append('address', this.dryers.address || '');
//       formData.append('mobile', this.dryers.mobile || '');
//       formData.append('acceptTerms', this.dryers.acceptTerms ? '1' : '0');

//       // Unique attributes for Dryers
//       formData.append('condition', this.dryers.condition || '');
//       formData.append('rentorsell', this.dryers.rentorsell || '');
//       formData.append('manufacturer', this.dryers.manufacturer || '');
//       formData.append('price', this.dryers.price !== null ? this.dryers.price.toString() : '');

//       // Add specifications as JSON
//       formData.append('specifications', JSON.stringify(this.specifications));

//       // Add images
//       this.selectedImages.forEach((image, index) => {
//         formData.append('images[]', image, image.name);
//       });

//       // Send form data to backend (replace with actual endpoint)
//       this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_dryers.php', formData)
//         .subscribe({
//           next: (response) => {
//             console.log('Response:', response);
//             alert('Dryers advertisement successfully submitted.');
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
  selector: 'app-machineries-dryers',
  templateUrl: './machineries-dryers.page.html',
  styleUrls: ['./machineries-dryers.page.scss'],
})
export class MachineriesDryersPage implements OnInit {

  dryers: {
    userName: string,  // Added userName field
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
    userName: '',  // Initialize userName as empty
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
    if (this.dryers.specification) {
      this.specifications.push(this.dryers.specification);
      this.dryers.specification = ''; // Clear the input after adding
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

  
  // Load user info to automatically set userName
  loadUserInfo() {
    this.http.get('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_profile.php', {
      withCredentials: true
    }).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.dryers.userName = response.user.name;  // Automatically set the user name
         // this.dryers.userId = response.user.id;      // Automatically set the user ID

        } else {
          alert('Failed to load user information.');
        }
      },
      error: (error) => {
        console.error('Error fetching user information:', error);
        alert('Error loading user information.');
      }
    });
  }

  // Handle form submission
  // onSubmit() {
  //   if (this.dryers.acceptTerms) {
  //     const formData = new FormData();

  //     // Common attributes
  //     formData.append('category', 'Machineries');
  //     formData.append('subcategory', 'Dryers');
  //     formData.append('title', this.dryers.title || '');
  //     formData.append('stock', this.dryers.stock || '');
  //     formData.append('address', this.dryers.address || '');
  //     formData.append('mobile', this.dryers.mobile || '');
  //     formData.append('acceptTerms', this.dryers.acceptTerms ? '1' : '0');
  //     // Add userId (converted to string)
  //     if (this.dryers.userId !== null) {
  //       formData.append('userId', this.dryers.userId.toString());
  //     }      // Unique attributes for Dryers
  //     formData.append('condition', this.dryers.condition || '');
  //     formData.append('rentorsell', this.dryers.rentorsell || '');
  //     formData.append('manufacturer', this.dryers.manufacturer || '');
  //     formData.append('price', this.dryers.price !== null ? this.dryers.price.toString() : '');

  //     // Add userName
  //     formData.append('userName', this.dryers.userName || '');

  //     // Add specifications as JSON
  //     formData.append('specifications', JSON.stringify(this.specifications));

  //     // Add images
  //     this.selectedImages.forEach((image, index) => {
  //       formData.append('images[]', image, image.name);
  //     });

  //     // Send form data to backend (replace with actual endpoint)
  //     this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_dryers.php', formData)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('Response:', response);
  //           alert('Dryers advertisement successfully submitted.');
  //         },
  //         error: (error) => {
  //           console.error('Error:', error);
  //           alert('An error occurred while submitting the form. Please try again.');
  //         }
  //       });
  //   } else {
  //     alert('Please accept the terms and conditions to proceed.');
  //   }
  // }

  // Handle form submission
onSubmit() {
  if (this.dryers.acceptTerms) {
    const formData = new FormData();

    // Common attributes
    formData.append('category', 'Machineries');
    formData.append('subcategory', 'Dryers');
    formData.append('title', this.dryers.title || '');
    formData.append('stock', this.dryers.stock || '');
    formData.append('address', this.dryers.address || '');
    formData.append('mobile', this.dryers.mobile || '');
    formData.append('acceptTerms', this.dryers.acceptTerms ? '1' : '0');

    // Add userId only if it's defined
    // if (this.dryers.userId !== null && this.dryers.userId !== undefined) {
    //   formData.append('userId', this.dryers.userId.toString());
    // } else {
    //   console.error('userId is undefined or null');
    // }

    // Unique attributes for Dryers
    formData.append('condition', this.dryers.condition || '');
    formData.append('rentorsell', this.dryers.rentorsell || '');
    formData.append('manufacturer', this.dryers.manufacturer || '');
    formData.append('price', this.dryers.price !== null ? this.dryers.price.toString() : '');

    // Add userName
    formData.append('userName', this.dryers.userName || '');

    // Add specifications as JSON
    formData.append('specifications', JSON.stringify(this.specifications));

    // Add images
    this.selectedImages.forEach((image, index) => {
      formData.append('images[]', image, image.name);
    });

    // Send form data to backend (replace with actual endpoint)
// Send form data to backend with credentials (session cookie)
this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_dryers.php', formData, {
  withCredentials: true  // This ensures that cookies are sent with the request
}).subscribe({
  next: (response) => {
    console.log('Response:', response);
    alert('Dryers advertisement successfully submitted.');
  },
  error: (error) => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form. Please try again.');
  }
});
    // this.http.post('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/add_dryers.php', formData)
    //   .subscribe({
    //     next: (response) => {
    //       console.log('Response:', response);
    //       alert('Dryers advertisement successfully submitted.');
    //     },
    //     error: (error) => {
    //       console.error('Error:', error);
    //       alert('An error occurred while submitting the form. Please try again.');
    //     }
    //   });
  } else {
    alert('Please accept the terms and conditions to proceed.');
  }
}



  ngOnInit() {
    this.loadUserInfo();  // Automatically load user info when the component is initialized
  }
}
