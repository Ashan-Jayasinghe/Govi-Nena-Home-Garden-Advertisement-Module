import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private apiUrl = 'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_ads.php';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Method to fetch advertisements by category and subcategory
  getAdvertisementsByCategory(category: string, subcategory: string | null): Observable<any> {
    let url = `${this.apiUrl}?category=${category}`;
    
    if (subcategory) {
      url += `&subcategory=${subcategory}`;
    }

    return this.http.get<any>(url);
  }
}
