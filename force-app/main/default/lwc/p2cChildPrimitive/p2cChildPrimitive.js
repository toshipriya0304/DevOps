import { LightningElement, api } from 'lwc';

export default class P2cChildPrimitive extends LightningElement {
    @api message;
    @api cardHeading;
}