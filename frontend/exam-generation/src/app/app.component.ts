import { Component } from '@angular/core';
import { QuestionService } from 'src/shared/question.service';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [QuestionService]
})
export class AppComponent {
  protected title = 'exam-generation';
  protected questions: Question[] = [];
  protected files: File[] = [];
  protected filesSelected: boolean = false; // Nueva propiedad para habilitar el botón

  

  constructor(private questionService : QuestionService) {
  }

generateQuestions() {
  if (!this.filesSelected) {
    console.warn('No files selected.');
    return;
  }

  const formData = new FormData();
  this.files.forEach(file => {
    formData.append('files', file); 
  });

  this.questionService.getQuestions(formData).subscribe(
    data => {
      console.log('Questions generated:', data);
      this.questions = data;
    },
    error => {
      console.error('Error:', error);
    }
  );
}
  onFilesSelected(event: any) {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        this.files.push(selectedFiles[i]);
      }
      this.filesSelected = true;
    }
    console.log('Selected files:', this.filesSelected);
  }
  }

