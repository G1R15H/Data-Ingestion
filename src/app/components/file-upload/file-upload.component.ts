import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service'; // Import the FileUploadService

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) { } // Inject the FileUploadService

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    // Handle file selection
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      // Use the FileUploadService to upload the selected file
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(
          response => {
            // Handle the response from the service (e.g., success message or further actions)
            console.log('File uploaded successfully:', response);
          },
          error => {
            // Handle errors, if any
            console.error('File upload error:', error);
          }
        );

      // Reset the selected file
      this.selectedFile = null;
    } else {
      // Handle no file selected error
      console.error('No file selected for upload.');
    }
  }
}
