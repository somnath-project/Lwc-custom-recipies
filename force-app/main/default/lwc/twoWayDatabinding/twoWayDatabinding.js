import { LightningElement } from 'lwc';

export default class TwoWayDatabinding extends LightningElement {

fullname="Zero to Hero"
title="LWC"

 changeHandler(event){  
    this.title = event.target.value
 }

}