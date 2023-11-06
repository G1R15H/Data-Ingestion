import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://your-backend-api-url/upload'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // You can add additional form data here if needed

    const headers = new HttpHeaders();
    // You may need to set headers based on your backend requirements

    return this.http.post(this.apiUrl, formData, { headers: headers });
  }
}
