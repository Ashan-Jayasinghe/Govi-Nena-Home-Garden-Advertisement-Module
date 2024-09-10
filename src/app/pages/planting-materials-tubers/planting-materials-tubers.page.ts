
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-planting-materials-tubers',
  templateUrl: './planting-materials-tubers.page.html',
  styleUrls: ['./planting-materials-tubers.page.scss'],
})
export class PlantingMaterialsTubersPage implements OnInit {
  tuberForm: FormGroup;
  images: File[] = [];
  imageUrls: string[] = [];
  prices: { label: string, amount: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.tuberForm = this.fb.group({
      type: ['', Validators.required],
      variety: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      stock: ['', Validators.required],
      description: [''],
      priceFor: ['1kg', Validators.required],
      price: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      specifications: this.fb.array([]),
    });
  }

  ngOnInit() {}

  onFileChange(event: any) {
    const files = event.target.files;
    this.images = Array.from(files);
    this.imageUrls = this.images.map(file => URL.createObjectURL(file));
  }

  addPrice() {
    const priceFor = this.tuberForm.get('priceFor')?.value || '';
    const price = this.tuberForm.get('price')?.value || '';
    this.prices.push({ label: priceFor, amount: price });
    this.tuberForm.patchValue({ price: '' });
  }

  onSubmit() {
    if (this.tuberForm.valid) {
      console.log(this.tuberForm.value);
      // handle form submission here
    }
  }

  get specificationsFormArray(): FormArray {
    return this.tuberForm.get('specifications') as FormArray;
  }

  addNewSpecification() {
    this.specificationsFormArray.push(this.fb.control(''));
  }
}
