import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planting-materials-tubers',
  templateUrl: './planting-materials-tubers.page.html',
  styleUrls: ['./planting-materials-tubers.page.scss'],
})
export class PlantingMaterialsTubersPage implements OnInit {

  tuber = {
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
  selectedImages: string[] = [];

  constructor() { }

  // Add specification to the list
  addSpecification() {
    if (this.tuber.specification) {
      this.specifications.push(this.tuber.specification);
      this.tuber.specification = ''; // Clear the input after adding
    }
  }

  // Handle file selection
  // onFileChange(event: any) {
  //   if (event.target.files.length > 0) {
  //     this.selectedFiles = Array.from(event.target.files);
  //   }
  // }

  onFileChange(event: any): void {
    const files = event.target.files;
    this.selectedImages = []; // Reset previously selected images

    // Read and preview the selected images
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push(e.target.result); // Add image URL for preview
      };

      reader.readAsDataURL(file); // Read the image as Data URL
    }
  }


  // Handle form submission
  onSubmit() {
    if (this.tuber.acceptTerms) {
      console.log('Form Data:', this.tuber);
      console.log('Selected Files:', this.selectedImages);
      console.log('Specifications:', this.specifications);
      // Perform any further processing, like API submission here
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  }

  ngOnInit() {
  }

}
