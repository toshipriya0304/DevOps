import { LightningElement, api} from 'lwc';

export default class P2cParentOnAction extends LightningElement {
    @api progressValue;
    percentage=10;
    changeHandler(event)
    {
        this.percentage=event.target.value;
    }
}