import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionService } from 'src/shared/question.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UploadZoneComponent } from './upload-zone/upload-zone.component';
import { QuestionTypeConfigComponent } from './question-type-config/question-type-config.component';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UploadZoneComponent,
    QuestionTypeConfigComponent,
    QuestionListComponent
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
