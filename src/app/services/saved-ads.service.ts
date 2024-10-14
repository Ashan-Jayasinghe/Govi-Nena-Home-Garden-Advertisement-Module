// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SavedAdsService {
//   private apiUrl = 'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_saved_ads.php'; // Adjust this to your backend URL

//   constructor(private http: HttpClient) { }

//   getSavedAds(): Observable<any> {
//     return this.http.get<any>(this.apiUrl, { withCredentials: true });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedAdsService {
  private apiUrl = 'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_saved_ads.php'; // Adjust this to your backend URL

  constructor(private http: HttpClient) { }

  // Fetch saved ads
  getSavedAds(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { withCredentials: true });
  }
}
