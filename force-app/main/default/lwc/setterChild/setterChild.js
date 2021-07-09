import { LightningElement,api} from 'lwc';

export default class SetterChild extends LightningElement {
    actualData;
    @api
    get detail()
    {
        return this.actualData;
    }
    set detail(data)
    {
        data.age=data.age*2;
        this.actualData=data;
    }
}