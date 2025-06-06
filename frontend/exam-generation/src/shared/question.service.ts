import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/models/question';
import { Observable } from 'rxjs';


@Injectable()
export class QuestionService {
    private dataUrl = 'http://127.0.0.1:8000/questions';

    constructor(public http: HttpClient) {}

getQuestions(formData: FormData): Observable<Question[]> {
  return this.http.post<Question[]>(this.dataUrl, formData);
}   

}
