export class IngestedFiles {
    fileId: number;
    file_name: string;
    uploaded_date_time: string;
    status: string;
    ingested_date_time: string;
    error_message: string;
  
    constructor(
      fileId: number,
      file_name: string,
      uploaded_date_time: string,
      status: string,
      ingested_date_time: string,
      error_message: string
    ) {
      this.fileId = fileId;
      this.file_name = file_name;
      this.uploaded_date_time = uploaded_date_time;
      this.status = status;
      this.ingested_date_time = ingested_date_time;
      this.error_message = error_message;
    }
  }
  
  