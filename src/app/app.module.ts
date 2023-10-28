import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileUploadService } from '../app/services/file-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to the imports array
  ],
  providers: [
    FileUploadService, // Include the FileUploadService in the providers array
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
