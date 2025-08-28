import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LotteryService } from '../../../lottery.service';


@Component({
  selector: 'app-pdfsearch',
  templateUrl: './pdfsearch.component.html',
  styleUrls: ['./pdfsearch.component.css']
})
export class PdfsearchComponent {
  uploadedFile: File | null = null;
  ticketNumbers: string[] = [];
  matchedNumbers: string[] = [];
  pdfUrl: string = ''; // raw URL
  safePdfUrl: SafeResourceUrl = ''; // trusted URL for iframe
  prizeResult: string = '';
  prizeTier: string = '';

  constructor(private sanitizer: DomSanitizer, private lotteryService: LotteryService) {}
// onTimeSelect(time: string) {
//   // Example API call (replace with your actual service)
//   this.lotteryService.getPdfUrlByTime(time).subscribe((url: string) => {
//     this.pdfUrl = url;
//   });
// }
  onTimeSelect(time: string) {
    this.lotteryService.getPdfUrlByTime(time).subscribe((url: string) => {
      this.pdfUrl = url;
    });
  }

  onSearchNumbers() {
    this.matchedNumbers = ['123456', '654321'];
    this.prizeResult = '₹5,000';
    this.prizeTier = '2nd Prize';
  }
}
