import { Injectable } from '@angular/core';
import { QuestionObj } from './QuestionObj';

@Injectable({
  providedIn: 'root'
})
export class QuestionGeneratorService {
  
  constructor() { }
  generateNewObj(currentQuestion,currentQuestionNumber){
    let obj={
      questionNo: currentQuestionNumber-1,
      operand1: currentQuestion.operand1,
      operand2: currentQuestion.operand2,
      operator: currentQuestion.operator,
      correctResult: currentQuestion.correctResult,
      submittedResult: currentQuestion.submittedResult,
      color: currentQuestion.correctResult != currentQuestion.submittedResult ? "red" :"#00fff0"
      }
    return obj;

  }
}
