import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planting-materials-seeds',
  templateUrl: './planting-materials-seeds.page.html',
  styleUrls: ['./planting-materials-seeds.page.scss'],
})
export class PlantingMaterialsSeedsPage implements OnInit {

  seeds = {
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
    if (this.seeds.specification) {
      this.specifications.push(this.seeds.specification);
      this.seeds.specification = ''; // Clear the input after adding
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
    if (this.seeds.acceptTerms) {
      console.log('Form Data:', this.seeds);
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
