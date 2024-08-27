import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.page.html',
  styleUrls: ['./advertisement-page.page.scss'],
})
export class AdvertisementPagePage implements OnInit {

  searchTerm: string = '';
  filterVisible=false;

   // Arrays to hold data for each dropdown
   provinces: any[] = [
    { id: 1, name: 'Province 1' },
    { id: 2, name: 'Province 2' },
    { id: 3, name: 'Province 3' },
    // Add other provinces here
  ];

  districts: any[] = [];
  dsDivisions: any[] = [];
  gnDivisions: any[] = [];

  // Variables to hold selected values
  selectedProvince: any = null;
  selectedDistrict: any = null;
  selectedDSDivision: any = null;
  selectedGNDivision: any = null;
  

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToDetailsPage() {
    this.navCtrl.navigateForward('/post-ad-home-page');
  } 

  search(event: any) {
  
  }
  toggleFilter() {
    this.filterVisible = !this.filterVisible;
  }


  
  // Function to handle Province selection
  onProvinceChange() {
    if (this.selectedProvince) {
      // Fetch districts based on selected province
      this.districts = this.getDistrictsByProvince(this.selectedProvince.id);
      // Reset subsequent dropdowns
      this.selectedDistrict = null;
      this.selectedDSDivision = null;
      this.selectedGNDivision = null;
      this.dsDivisions = [];
      this.gnDivisions = [];
    }
  }

  // Function to handle District selection
  onDistrictChange() {
    if (this.selectedDistrict) {
      // Fetch DS divisions based on selected district
      this.dsDivisions = this.getDSDivisionsByDistrict(this.selectedDistrict.id);
      // Reset subsequent dropdowns
      this.selectedDSDivision = null;
      this.selectedGNDivision = null;
      this.gnDivisions = [];
    }
  }

  // Function to handle DS Division selection
  onDSDivisionChange() {
    if (this.selectedDSDivision) {
      // Fetch GN divisions based on selected DS division
      this.gnDivisions = this.getGNDivisionsByDSDivision(this.selectedDSDivision.id);
      this.selectedGNDivision = null;
    }
  }

  // Function to handle GN Division selection (if needed)
  onGNDivisionChange() {
    // Handle GN Division selection if any further action is required
  }

  // Mock function to simulate fetching districts based on province ID
  getDistrictsByProvince(provinceId: number) {
    // Replace with actual logic or API call to fetch districts
    const allDistricts = [
      { id: 1, name: 'District 1', provinceId: 1 },
      { id: 2, name: 'District 2', provinceId: 1 },
      { id: 3, name: 'District 3', provinceId: 2 },
      { id: 4, name: 'District 4', provinceId: 2 },
      { id: 5, name: 'District 5', provinceId: 3 },
      // Add more districts as needed
    ];
    return allDistricts.filter(district => district.provinceId === provinceId);
  }

  // Mock function to simulate fetching DS divisions based on district ID
  getDSDivisionsByDistrict(districtId: number) {
    // Replace with actual logic or API call to fetch DS divisions
    const allDSDivisions = [
      { id: 1, name: 'DS Division 1', districtId: 1 },
      { id: 2, name: 'DS Division 2', districtId: 1 },
      { id: 3, name: 'DS Division 3', districtId: 2 },
      { id: 4, name: 'DS Division 4', districtId: 3 },
      { id: 5, name: 'DS Division 5', districtId: 4 },
      // Add more DS divisions as needed
    ];
    return allDSDivisions.filter(dsDivision => dsDivision.districtId === districtId);
  }

  // Mock function to simulate fetching GN divisions based on DS division ID
  getGNDivisionsByDSDivision(dsDivisionId: number) {
    // Replace with actual logic or API call to fetch GN divisions
    const allGNDivisions = [
      { id: 1, name: 'GN Division 1', dsDivisionId: 1 },
      { id: 2, name: 'GN Division 2', dsDivisionId: 1 },
      { id: 3, name: 'GN Division 3', dsDivisionId: 2 },
      { id: 4, name: 'GN Division 4', dsDivisionId: 3 },
      { id: 5, name: 'GN Division 5', dsDivisionId: 4 },
      // Add more GN divisions as needed
    ];
    return allGNDivisions.filter(gnDivision => gnDivision.dsDivisionId === dsDivisionId);
  }
}


