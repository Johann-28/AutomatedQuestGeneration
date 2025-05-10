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
  title = 'exam-generation';
  questions: Question[] = [];
  files: File[] = [];

  constructor(private questionService : QuestionService) {
  }

  generateQuestions(){
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  onFilesSelected(event: any) {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        this.files.push(selectedFiles[i]);
      }
      console.log(this.files);
    }
  }
}
