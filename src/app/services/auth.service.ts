import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Check if the session is active (user is logged in)
  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>('http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/check_session.php',{
      withCredentials: true // Ensure cookies are sent
    });
  }

  // This method can be called to bypass login if the user is already authenticated
  checkSession(): Observable<boolean> {
    return this.isAuthenticated();
  }
}



  