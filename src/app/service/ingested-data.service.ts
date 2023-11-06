import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngestedFiles } from '../model/ingested-files.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngestedDataService {
  private baseUrl = 'http://localhost:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File, categoryId: number): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('categoryId', categoryId.toString());
    return this.http.post<string>(`${this.baseUrl}/filedata/upload`, formData);
  }

  findAllFiles(): Observable<IngestedFiles[]> {
    return this.http.get<IngestedFiles[]>(`${this.baseUrl}/filedata/files`);
  }
}

