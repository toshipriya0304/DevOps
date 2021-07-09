import { LightningElement, api} from 'lwc';

export default class P2cParentPrimitive extends LightningElement {
    //need to pass a string to child component
    //so make the property public by using @api
    @api message;
    @api cardHeading;
}