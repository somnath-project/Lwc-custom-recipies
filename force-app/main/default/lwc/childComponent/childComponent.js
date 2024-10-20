import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

@api display;
@api displayFormat;
@api user;
@api isAvailable="true";
@api Hello="Sam";
}