import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'file-upload', component: FileUploadComponent },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
//   // Add more routes as needed for other components
// ];
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'file-upload', component: FileUploadComponent },
  // { path: 'error-handling', component: ErrorHandlingComponent },
  // { path: 'transformation', component: TransformationComponent },
  // { path: 'enrichment', component: EnrichmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  // Add more routes for other components as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
