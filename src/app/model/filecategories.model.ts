export class Filecategories {
    id: number;
    validation: string;
    transformation: string;
    enrichment: string;
  
    constructor(id: number, validation: string, transformation: string, enrichment: string) {
      this.id = id;
      this.validation = validation;
      this.transformation = transformation;
      this.enrichment = enrichment;
    }
  }
  