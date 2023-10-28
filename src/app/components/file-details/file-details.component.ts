import { Component, OnInit } from '@angular/core';
// import { FileDetailsService } from '../services/file-details.service'; // Import your service

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {
  file: any; // Define the property to store file details

  // constructor(private fileDetailsService: FileDetailsService) { }

  ngOnInit(): void {
    // Fetch file details data using a service
    // this.fileDetailsService.getFileDetails()
      // .subscribe((data: any) => {
        // this.file = data; // Update the file object with fetched data
      // });
  }
}
