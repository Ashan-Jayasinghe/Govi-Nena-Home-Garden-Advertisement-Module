import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agro-chemicalss-plant-growth-regulators',
  templateUrl: './agro-chemicalss-plant-growth-regulators.page.html',
  styleUrls: ['./agro-chemicalss-plant-growth-regulators.page.scss'],
})
export class AgroChemicalssPlantGrowthRegulatorsPage implements OnInit {


  pgr = {
    type: '',
    title: '',
    applicationRatio:null,
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
  selectedImages: string[] = [];

  constructor() { }

  // Add specification to the list
  addSpecification() {
    if (this.pgr.specification) {
      this.specifications.push(this.pgr.specification);
      this.pgr.specification = ''; // Clear the input after adding
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
    if (this.pgr.acceptTerms) {
      console.log('Form Data:', this.pgr);
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


