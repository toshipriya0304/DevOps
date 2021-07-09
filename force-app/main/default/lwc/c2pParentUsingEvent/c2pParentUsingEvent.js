import { LightningElement } from 'lwc';

export default class C2pParentUsingEvent extends LightningElement {
    showModal=false;
    msg;
    clickHandler(event)
    {
        this.showModal=true;
    }
    cHandler(event)
    {
        this.showModal=false;
        this.msg=event.detail;
    }
}