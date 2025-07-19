import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {}

  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file && (file.type.includes('image') || file.type.includes('pdf'))) {
      this.uploadedFile = file;
      // Simulate a generated PDF preview URL
      this.pdfUrl = 'https://example.com/lottery-result.pdf'; // replace with dynamic one
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
    }
  }

  onSearchNumbers() {
    this.matchedNumbers = ['123456', '654321'];
    this.prizeResult = '₹5,000';
    this.prizeTier = '2nd Prize';
  }
}
