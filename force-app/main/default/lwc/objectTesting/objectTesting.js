import { LightningElement, track } from 'lwc';

export default class ObjectTesting extends LightningElement {

   
    person = {
        name: 'Monu',
        age: 10,
        city: 'Noida'
    }

    changeNameHandler(event){
        this.person.name = event.target.value;
        //console.log(event.target.value);
    }

    changeAgeHandler(event){
        this.person.age = event.target.value;
       // console.log(event.target.value);
    }
}