import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    userName=["john", "Smith","Mike","Sam"];
    fetchDetailHandler(){

        const heading=this.template.querySelector('h1');
        
        const userElements=this.template.querySelectorAll('.name');
       
        console.log(heading.innerText);

        Array.from(userElements).forEach(element=>{
            console.log(element.innerText)
        })
    }
}