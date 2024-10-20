import { LightningElement } from 'lwc';

export default class LoopingInLwc extends LightningElement {
    carList= ["Audi", "Maruti","hyundai", "Thar", "Swift"]


    ceoList=[
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },

        {
            id:2,
            company:"Apple",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zukerberg"
        },

        {
            id:4,
            company:"Amazon",
            name:"Jeff bezos"
        },
    ]

}