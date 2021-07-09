import { LightningElement } from 'lwc';

export default class QuizApp2 extends LightningElement {
    Questions = [
        {
            id: 1,
            ques: "What is India's capital city?",
            options: {
                A:"Mumbai",
                B:"Delhi",
                C:"Chennai",
                D:"Bangalore"
            },
            correctAnswer: "B"
        },
        {
            id:2,
            ques:"What is your name?",
            options: {
                A:"Toshi",
                B:"Akash",
                C:"Jack",
                D:"Rebecca"
            },
            correctAnswer:"A"
        },
        {
            id:3,
            ques:"What's my favourite pet?",
            options: {
                A:"Cat",
                B:"Dinosaur",
                C:"Doggo",
                D:"Rat"
            },
            correctAnswer:"C"
        }
    ];
    answered=false;
    result;
    name;
    answer;
    handlerr(event)
    {
        this.answer=event.target.value;
        this.name=event.target.name;
        console.log(this.answer);
    }
    handleSubmit(event)
    {
        this.answered=true;
        console.log(this.answer);
        var idd = this.name;
        console.log(idd);
        var x = this.Questions.find(x => x.id == idd);
        console.log(x.correctAnswer);
        if(this.value==x.correctAnswer)
        {
            this.result="Congrats! Correct Answer.";
        }
        else
        {
            this.result="Oops! You missed.";
        }
    }
}