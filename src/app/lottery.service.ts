import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  constructor() { }

    getPdfUrlByTime(time: string): Observable<string> {
    // Dummy PDF URLs for testing
    const urls: { [key: string]: string } = {
      '1pm': 'https://lotterysambadresult.in/wp-content/uploads/2025/08/pdf_68b0080959605.pdf',
      '6pm': 'https://lotterysambadresult.in/wp-content/uploads/2025/08/pdf_68b04edcdfe57.pdf',
      '8pm': 'https://lotterysambadresult.in/wp-content/uploads/2025/08/pdf_68b06a36714b9.pdf'
    };
    return of(urls[time] || urls['1pm']);
  }
}
