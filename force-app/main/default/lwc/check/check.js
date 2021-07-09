import { LightningElement } from 'lwc';

export default class Check extends LightningElement {
    fullName = "xyz123";
    title = "Hemloo";
    handler(event)
    {
        this.title=event.target.value;
    }
    //getter method example
    names = ["haha","dhsfds","sfujefcd"];
    get name()
    {
        return this.names[0];
    }
    num1=293;
    num2=2;
    get sumOfNumbers()
    {
        return this.num1+this.num2;
    }
}