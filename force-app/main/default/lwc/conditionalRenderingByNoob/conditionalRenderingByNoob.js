import { LightningElement,track } from 'lwc';

export default class ConditionalRenderingByNoob extends LightningElement {


    @track onClickedButtonLabel='Show';
    mytitle='Salesforce';
    @track cardVisible = false;
    handleclick1(event){    
        const label=event.target.label;
    
        if(label==='Show'){
            this.onClickedButtonLabel='Hide';
            this.cardVisible=true;
        }
        else if(label==='Hide'){
            this.onClickedButtonLabel='Show';
            this.cardVisible=false;
        }
     }
}