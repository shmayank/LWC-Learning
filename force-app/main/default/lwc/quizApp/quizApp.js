import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} //object for storing answer
    correctAnswers = 0;
    isSubmitted = false;
    myQuestions = [
       
            {
                id:"Question1",
                question:"which one of the following is not a template loop",
                answers:{
                    a:'for:each',
                    b:'iterator:it',
                    c:'map:each',
                    d:'None of the above'
                },
                correctAns:'c'
            },
            {
                id:"Question2",
                question:'which one of the following is true',
                answers:{
                    a:'aura is faster than LWC',
                    b:'LWC is widely used in indusrty',
                    c:'Apex is client side language',
                    d:'None of the above'
                },
                correctAns:'b'
            },
            {
                id:'Question3',
                question:'which one of the file is invalid in LWC component',
                answers:{
                    a:'svg',
                    b:'apex',
                    c:'js',
                    d:'None of the above'
                },
                correctAns:'a'
            },
            {
                id:'Question4',
                question:'which one of the following is not a directive',
                answers:{
                    a:'if:true',
                    b:'for:each',
                    c:'@track',
                    d:'None of the above'
                },
                correctAns:'c'
           }
    ]

    get allNotSelected(){
        console.log("len1",this.myQuestions.length);
        console.log("len 2",Object.keys(this.selected).length);
        
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    onChangeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        //const{name, value} = event.target;
        const name = event.target.name
        const value = event.target.value
        console.log("question selected1",this.selected);
        this.selected = {...this.selected,[name]:value};
        //console.log('after 68')
        //this.selected = {...this.selected,"Question1":a}
        //this.selected = {...this.selected,"Question1":"b","Question2":"c","Question3":"c","Question4":"d"}
        console.log(JSON.stringify(this.selected));
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAns)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        // //this.myQuestions.filter(item=>this.selected[item.id] === item.correctAns)
        // this.isSubmitted = true
        // let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAns)
        // console.log('indise submitHandler')
        // console.log(JSON.stringify(this.myQuestions.filter(item=>this.selected[item.id] === item.correctAns)))
        // this.correctAnswers = correct.length
        // console.log('value of correct'+correct )
    }

     // for applying dynamic styling to our result
     get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    resetHandler(){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false
    }
    
}