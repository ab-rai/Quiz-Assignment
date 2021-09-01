import { Component, OnInit } from '@angular/core';
import { QuestionGeneratorService } from '../question-generator.service';
import { QuestionObj } from '../QuestionObj';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  score=0;
  amountOfQuestion=20;
  operandRange=10;
  operators=["+","-","*","/"];
  runQuiz=false;
  showResult= false;
  questionsList=new Array<QuestionObj>();
  currentQuestion: QuestionObj={questionNo: 0, operand1: 0, operand2: 0, operator: "", correctResult: 0, submittedResult: 0 ,color:""};
  questionNumber=new Array<number>();
  currentQuestionNumber:number=1;
  constructor(private questionGeneratorService:QuestionGeneratorService) {
    console.log(Math.random())
   }

  ngOnInit(): void {
    
  }
  startQuiz(){
    this.runQuiz=true;
    this.questionNumber.push(this.currentQuestionNumber);
    this.currentQuestionNumber+=1;
    this.questionGenerator();
  }
  questionGenerator(){
    this.generateQuestion(this.operandRange,this.operators);
  }
  nextQuestion(){
    // let obj={
    // questionNo: this.currentQuestionNumber-1,
    // operand1: this.currentQuestion.operand1,
    // operand2: this.currentQuestion.operand2,
    // operator: this.currentQuestion.operator,
    // correctResult: this.currentQuestion.correctResult,
    // submittedResult: this.currentQuestion.submittedResult,
    // color: this.currentQuestion.correctResult != this.currentQuestion.submittedResult ? "red" :"#00fff0"
    // }
    let obj=this.questionGeneratorService.generateNewObj(this.currentQuestion,this.currentQuestionNumber);
    this.questionsList.push(obj);
    this.questionNumber.push(this.currentQuestionNumber);
    this.questionGenerator();
    this.currentQuestionNumber+=1;
  }
  generateResult(){
    // let obj={
    // questionNo: this.currentQuestionNumber-1,
    // operand1: this.currentQuestion.operand1,
    // operand2: this.currentQuestion.operand2,
    // operator: this.currentQuestion.operator,
    // correctResult: this.currentQuestion.correctResult,
    // submittedResult: this.currentQuestion.submittedResult,
    // color: this.currentQuestion.correctResult != this.currentQuestion.submittedResult ? "red" :"#00fff0"
    // }
    let obj=this.questionGeneratorService.generateNewObj(this.currentQuestion,this.currentQuestionNumber);
    
    this.questionsList.push(obj);
    this.showResult=true;
    for(let question of this.questionsList){
      console.log(question.correctResult," and ",question.submittedResult);
      if(question.correctResult==question.submittedResult){
        this.score+=1;
      }
    }
  }
  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  
  generateQuestion(operandRange:number,operators:Array<string>){
    this.currentQuestion.operand1= this.getRandomInt(operandRange+1);
    this.currentQuestion.operand2= this.getRandomInt(operandRange+1);
    this.currentQuestion.operator= operators[this.getRandomInt(operators.length)];
    switch(this.currentQuestion.operator){
      case "+":
                this.currentQuestion.correctResult=this.currentQuestion.operand1 + this.currentQuestion.operand2;
                break;
      case "-":
                this.currentQuestion.correctResult=this.currentQuestion.operand1 - this.currentQuestion.operand2;
                break;
      case "*":
                this.currentQuestion.correctResult=this.currentQuestion.operand1 * this.currentQuestion.operand2;
                break;
      case "/":
                this.currentQuestion.correctResult=this.currentQuestion.operand1 / this.currentQuestion.operand2;
                break;
      default:
                this.currentQuestion.correctResult=0;
                break;
    }
    
  }
}
