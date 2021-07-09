import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    Questions = [
        {
            id:"Question1",
            ques:"What is Sudakshina's favourite movie?",
            answers: {
                A: "The Hereditary",
                B: "The Shining",
                C: "Insidious",
                D: "None"
            },
            correctAnswer:"D"
        },
        {
            id:"Question2",
            ques:"What is Sudakshina's favourite beverage?",
            answers: {
                A:"Chocolate shake with choco chips",
                B:"Soft drink",
                C:"Chai",
                D:"Beer"
            },
            correctAnswer:"C"
        }
    ];
    numOfCorrectAnswers = 0;
    selected = {};
    isSubmitted = false;
    handler(event)
    {
        const {name,value} = event.target;
        this.selected = {...this.selected, [name]:value};
    }
    get notAllSelected()
    {
        return !(Object.keys(this.selected).length===this.Questions.length);
    }
    submitHandler(event)
    {
        this.isSubmitted=true;
        event.preventDefault();
        let correct = this.Questions.filter(item=>this.selected[item.id]===item.correctAnswer);
        console.log(correct);
        this.numOfCorrectAnswers= correct.length;
    }
    resetHandler(event)
    {
        this.selected={};
        this.numOfCorrectAnswers=0;
    }
}