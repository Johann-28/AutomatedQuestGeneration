import { Component } from '@angular/core';
import { QuestionService } from 'src/shared/question.service';
import { Question } from './models/question';
import { QuestionType } from './models/question-type';

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
  protected questionTypes: QuestionType[] = [];
  protected filesSelected: boolean = false; 

  

  }


