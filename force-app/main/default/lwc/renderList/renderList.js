import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {

    superstar=["spiderman", "superman", "iron man", "capitano"];
 
    contactList= [
        {
            id: 1,
            firstname:"Marc",
            lastname: "Benioff"
        },
        {
            id: 2,
            firstname:"Tim",
            lastname:"cook"
        },
        {
            id: 3,
            firstname:"Steve",
            lastname:"Jobs"
        },
        {
            id: 4,
            firstname:"Elon",
            lastname:"Musk"
        }
    ];
}