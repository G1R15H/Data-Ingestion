import { Component, OnInit } from '@angular/core';
import { IngestedDataService } from 'src/app/service/ingested-data.service';
import { IngestedFiles } from 'src/app/model/ingested-files.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  files: IngestedFiles[] = []; // Define an array to store file details

  constructor(private ingestedDataService: IngestedDataService) {}

  ngOnInit(): void {
    // Fetch file details data using the service's findAllFiles method
    this.ingestedDataService.findAllFiles().subscribe(
      (data: IngestedFiles[]) => {
        this.files = data; // Update the files array with fetched data
        console.log(this.files);
      },
      (error:any) => {
        console.error('Error fetching file details:', error);
      }
    );
  }
}
