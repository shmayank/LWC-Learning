import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingIteration extends LightningElement {

     
    displayDiv= 'false';

    showDivHandler(event){
        displayDiv=true;
        this.displayDiv= event.target.checked;
       
    }

    cityList = ['Jaipur','Bengaluru','Hyderabad','Mumbai']
}