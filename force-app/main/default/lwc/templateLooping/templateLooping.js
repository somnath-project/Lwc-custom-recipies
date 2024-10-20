import { LightningElement,wire } from 'lwc';
import  getStudent from '@salesforce/apex/forEachDemobyNoob.getStudent'
export default class TemplateLooping extends LightningElement {

    carList=["maruti" , "Honda", "Swift","BMW","Alto"];

    @wire(getStudent)
    students;

}