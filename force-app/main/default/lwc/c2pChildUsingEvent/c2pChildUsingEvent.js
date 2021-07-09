import { LightningElement } from 'lwc';

export default class C2pChildUsingEvent extends LightningElement {
    closeHandler()
    {
        const evt = new CustomEvent('close',{
            detail:"Modal closed, dear Parent."
        });
        this.dispatchEvent(evt);
    }
}