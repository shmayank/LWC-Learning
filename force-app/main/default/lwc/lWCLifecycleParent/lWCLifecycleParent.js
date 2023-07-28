// import { LightningElement } from 'lwc';

// export default class LWCLifecycleParent extends LightningElement {
//     constructor(){
//         super();
//         console.log('parent construtor called')
//     }
//     connectedCallback(){
//         console.log('inside connected call back');
//     }
    
// }

import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'

export default class LWCLifecycleParent extends LightningElement {
    icChildVisible = true
    selectedBtn = ''
    constructor(){ 
        super()
        console.log("parent constructor called")
    }
    connectedCallback(){ 
        console.log("parent connectedCallback called")
    }
    renderedCallback(){ 
        console.log("parent renderedCallback called")
    }
    errorCallback(error,stack){
        console.log(stack)
    }

    name
    changeHandler(event){
        this.name= event.target.value
    }
    clickHandler(){
        this.icChildVisible =  !this.icChildVisible
        console.log('this.icChildVisible value is',this.icChildVisible)
    }

    // render(){
    //     console.log('inside Parent render')
    //     return this.selectedBtn === 'Signup' ? signupTemplate:
    //             this.selectedBtn === 'Signin' ? signinTemplate
    // }
    handleClick(event){
        this.selectedBtn=event.target.label
    }
    submit(){
        console.log('Here')
    }
}