import { Component, OnInit } from '@angular/core';
import { IngestedDataService } from 'src/app/service/ingested-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

//Component to upload the file
export class FileUploadComponent implements OnInit {
  selectedFile: File | null = null;
  //Note: For now the category ID is 1
  categoryId!: number;
  constructor(private ingestedDataService: IngestedDataService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    // Handle file selection
    this.selectedFile = event.target.files[0];
  }

  onUpload(categoryId: number): void {
    if (this.selectedFile) {
      // Call the file upload service
      this.ingestedDataService.uploadFile(this.selectedFile, categoryId)
        .subscribe((response: string) => {
          console.log('File upload response:', response);
          // Reset the selected file
          this.selectedFile = null;
        }, (error) => {
          console.error('File upload error:', error);
        });
    } else {
      // Handle no file selected error
      console.error('No file selected for upload.');
    }
  }
}
