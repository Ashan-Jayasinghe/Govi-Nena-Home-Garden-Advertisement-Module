import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-report-ad',
  templateUrl: './report-ad.page.html',
  styleUrls: ['./report-ad.page.scss'],
})
export class ReportAdPage {
  report: {
    adId: number | null;
    selectedReason: string;
    comments: string;
    email: string;
  } = {
    adId: null,
    selectedReason: '',
    comments: '',
    email: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastController: ToastController
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['adId']) {
      this.report.adId = state['adId'];
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }

  submitReport() {
    if (!this.report.adId || !this.report.selectedReason) {
      this.presentToast('Ad ID and reason are required.', 'danger');
      return;
    }

    if (this.report.email && !this.validateEmail(this.report.email)) {
      this.presentToast('Invalid email address.', 'danger');
      return;
    }

    const reportData = new FormData();
    reportData.append('advertisement_id', this.report.adId.toString());
    reportData.append('reason', this.report.selectedReason);
    if (this.report.comments) {
      reportData.append('comments', this.report.comments);
    }
    if (this.report.email) {
      reportData.append('email', this.report.email);
    }

    this.http
      .post(
        'http://localhost/Govi-Nena-Home-Garden-Advertisement-Module-Backend/report_ad.php',
        reportData,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: () => {
          this.presentToast('Report submitted successfully.', 'success');
          this.router.navigate(['/advertisement-view']);
        },
        error: (error) => {
          console.error('Error submitting report:', error);
          this.presentToast(
            'An error occurred while submitting the report. Please try again.',
            'danger'
          );
        },
      });
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
