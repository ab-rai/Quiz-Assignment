export interface QuestionObj{
    questionNo: number,
    operand1: number,
    operand2: number,
    operator: string,
    correctResult: number,
    submittedResult: number,
    color:string,
    
    // constructor(operand1: number , operand2: number , operator: string){
    //     this.operand1=operand1;
    //     this.operand2=operand2;
    //     this.operator=operator;
    //     this.submittedResult=0;
    //     this.correctResult=this.findCorrectResult();
    // }
    // findCorrectResult= ()=>{
    //     let result=0;
    //     switch(this.operator){
    //         case "+":
    //                   result=this.operand1 + this.operand2;
    //                   break;
    //         case "-":
    //                   result=this.operand1 - this.operand2;
    //                   break;
    //         case "*":
    //                   result=this.operand1 * this.operand2;
    //                   break;
    //         case "/":
    //                   result=this.operand1 / this.operand2;
    //                   break;
    //         default:
    //                   result=0;
    //                   break;
    //       }
    //       return result;
    // }
  
}