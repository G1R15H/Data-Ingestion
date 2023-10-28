import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Define properties and data for the dashboard
  ingestedFiles: any[] = []; // Example data, replace with actual data

  constructor() { }

  ngOnInit(): void {
    // Fetch ingested files data here (e.g., from a service)
  }
}
