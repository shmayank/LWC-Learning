import { LightningElement } from 'lwc';
//import pubsub from 'c/pubsub';

export default class PubSubCompB extends LightningElement {

    message;
    connectedCallback(){
        console.log('you r here')
        this.callSubscribe();
    }
    callSubscribe(){
        console.log('you r there')
        
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }
}