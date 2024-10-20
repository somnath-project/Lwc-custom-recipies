import { LightningElement,api } from 'lwc';

export default class ChildHook extends LightningElement {
    constructor(){
        super();
        console.log("Constructor from Child");
        } 
        connectedCallback() {
         
         console.log("connectedCallback from Child");
         throw new Error("Error while component loading");
        }
        renderedCallback(){
         console.log("renderedCallback from Child");
        }
        errorCallback(error,stack){
         console.log("errorCallback from Child");
        }
        disconnectedCallback(){
            console.log("disconnectedCallback from child");
        }
}