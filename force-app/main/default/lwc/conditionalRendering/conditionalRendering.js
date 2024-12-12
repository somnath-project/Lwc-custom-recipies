import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
isVisible=false
name

handleClick(){
    this.isVisible=true
}

changeHandler(event){
    this.name = event.target.value
}


 get helloMethod(){
    return this.name ==='Hello'
 }
 

// Lwc:if
displayMessage=false
handleChange(event){
    //toggle handling
    this.displayMessage = !this.displayMessage;
    }
}