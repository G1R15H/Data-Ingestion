import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    // Handle file selection
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      // Implement file upload logic here, e.g., using an HTTP service
      // You can send the selected file to the server for ingestion
      console.log('Uploading file:', this.selectedFile);
      // Reset the selected file
      this.selectedFile = null;
    } else {
      // Handle no file selected error
      console.error('No file selected for upload.');
    }
  }
}

