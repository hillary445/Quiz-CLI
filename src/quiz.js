#!/usr/bin/env node

import readline from 'readline-sync';


function startQuiz(quizData){
    let score = 0
    console.log("------Welcome to the tech quiz------")

//iterating through each question
    quizData.forEach((item, index) =>{
        console.log(`\nQuestion ${index + 1}: ${item.question}`);


        const userAnswer = readline.question("Your Answer: ");
//To check if each answer is correct and also edgecases such as lower case
        if (userAnswer.trim().toLowerCase() === item.answer.toLowerCase()){
            console.log("Correct")

            score++;
        }else 
        {console.log(`Wrong! The correct answer was : ${item.answer}`)};

    })

    console.log("\n--- Quiz Over ---");
    console.log(`Your Final Score: ${score}/${quizData.length}`);

}


const questions = [
    {question:"Which open-source operating system kernel was created by Linus Torvalds in 1991?"     , answer: "Linux"},
    {question:"In web development, what does the acronym HTML stand for?" , answer: "HyperText Markup Language"},
    {question:"Which component is often referred to as the brain of a computer?", answer: "CPU"},
    {question:"What is the standard port number used for the HTTP protocol?", answer: "80"},
    {question:"What do you call a data type that can only hold one of two values: True or False?", answer: "Boolean"},
 ]

 startQuiz(questions)