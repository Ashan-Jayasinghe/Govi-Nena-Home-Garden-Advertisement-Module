import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/services/user.service';
import { Swiper } from 'swiper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-advertisement-view',
  templateUrl: './advertisement-view.page.html',
  styleUrls: ['./advertisement-view.page.scss'],
})
export class AdvertisementViewPage implements OnInit {
  ad: any;
  user: any;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private router: Router,
    private userService: UserService,
    private navCtrl: NavController
  ) {
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

  goBack() {
    this.navCtrl.back(); // Goes to the previous page
  }

  goToReportPage(adId: string) {
    this.router.navigate(['/report-ad'], { state: { adId } });
  }
}
