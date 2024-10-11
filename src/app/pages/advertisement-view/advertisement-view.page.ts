// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { ToastController } from '@ionic/angular';

// @Component({
//   selector: 'app-advertisement-view',
//   templateUrl: './advertisement-view.page.html',
//   styleUrls: ['./advertisement-view.page.scss'],
// })
// export class AdvertisementViewPage implements OnInit {
//   ad: any; // Declare the advertisement variable
//   advertisementId: number | null = null; // To store the advertisement ID

//   constructor(    private route: ActivatedRoute,
//     private http: HttpClient,
//     private toastController: ToastController) {}

//   // ngOnInit() {
//   //   // Get the advertisement ID from the route parameters
//   //   this.advertisementId = Number(this.route.snapshot.paramMap.get('id'));

//   //   // Access the advertisement data passed in state
//   //   this.advertisement = history.state.advertisement;
//   // }

//   ngOnInit() {
//     // Get the advertisement ID from the route parameters
//     this.advertisementId = Number(this.route.snapshot.paramMap.get('id'));

//     // Check if advertisement data was passed
//     if (history.state.advertisement) {
//         this.ad = history.state.advertisement;
//     } else {
//         // If no advertisement data was passed, you might want to fetch it again using the ID
//         this.fetchAdvertisementById(this.advertisementId);
//     }
// }

// fetchAdvertisementById(id: number) {
//     // Implement the logic to fetch the advertisement by ID if not passed
//     this.http.get(`http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/get_advertisement.php?id=${id}`)
//         .subscribe((response: any) => {
//             this.ad = response; // Set the advertisement data
//         }, error => {
//             console.error('Error fetching advertisement:', error);
//         });
// }

// }
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/services/user.service';
import {Swiper} from 'swiper';

@Component({
  selector: 'app-advertisement-view',
  templateUrl: './advertisement-view.page.html',
  styleUrls: ['./advertisement-view.page.scss'],
})
export class AdvertisementViewPage implements OnInit {
  ad: any;
  user:any;


 @ViewChild('swiper')
  swiperRef: ElementRef | undefined
  swiper?: Swiper;

  constructor(private router: Router, private userService: UserService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.ad = navigation.extras.state['advertisement'];
    }
  }

  ngOnInit() {
    if (this.ad?.user_id) {
      this.fetchUserProfile(this.ad.user_id);
    }
  }

  fetchUserProfile(userId: string) {
    this.userService.getUserById(userId).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }


  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
 

}
