import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions=[
        {
            id:"Questions 1",
            question:"Which one of the following is not the template loop",
            answer:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
            
        },
        {
            id:"Questions 2",
            question:"Which of the file is invalid in LWC component folder? ",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
            
        },
        {
            id:"Questions 3",
            question:"Which one of the following is not a directive",
            answer:{
                a:"for:each",
                b:"if:truee",
                c:"@track"
            },
            correctAnswer:"c"
            
        },
        {
            id:"Questions 4",
            question:"Which one of the following is more powerfull automation tool",
            answer:{
                a:"Workflow",
                b:"proces builder",
                c:"flow builder"
            },
            correctAnswer:"c"
            
        },
        
    ]
    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
    }
}