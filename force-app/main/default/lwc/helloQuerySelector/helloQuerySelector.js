import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    fetchDetailsHandler(){
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText)
    }
}