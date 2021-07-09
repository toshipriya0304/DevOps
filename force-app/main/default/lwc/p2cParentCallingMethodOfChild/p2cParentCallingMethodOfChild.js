import { LightningElement } from 'lwc';

export default class P2cParentCallingMethodOfChild extends LightningElement {
    handleClick(event)
    {
        this.template.querySelector('c-p2c-child-call-method-of-child').resetSlider();
    }
}