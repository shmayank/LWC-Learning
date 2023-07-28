import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="Zero to Hero";
    @track title = 'Aura';
    num1 = 10
    num2 = 10
    users = ['Nitin','mayank','sumit'];
   
    // Getters
    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
        return this.num1*this.num2;
    }
    
    changeHandler(event){
        this.title = event.target.value.toUpperCase();
    }
    
    @track
    address={
        city:'delhi',
        pincode:200315,
        country : "India"
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }
}