import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {


    @track address={
        city:'Mumbai',
        postcode:3008,
        country: 'India'


    }

    trackHandler(event){
        const field =event.target.label
      //  window.alert(field)

        if(field==='Enter City Name'){
            this.address.city = event.target.value;
        }
        else if(field==='Enter Postal Code'){
            this.address.postcode = event.target.value;
        }

       
        // this.address= {...this.address, "city" :event.target.value}
        // this.address= {...this.address, "postcode":event.target.value}
    }
//     trackHandler1(event){
//  this.address.postcode = event.target.value
//     }

    user=["Rahul", "Sam", "pravin"]
    num1=10
    num2=20

    get firstName(){
        return this.user[0].toUpperCase()
    }

    get multiplication(){
        return this.num1 * this.num2
    }
}