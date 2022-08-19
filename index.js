const questions = [
    "Oque aprendi hoje?",
    "Oque te chateou ou oque te deixou triste ?",
    "oque te deixou feliz ?",
    "oque você vai fazer amanhã",
];

const ask = (index = 0) =>{
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
        Que foda meno!!

        oque você aprendeu foi:
            ${answers[0]}, brabo demais!!
        
        Oque te chateou foi:
            ${answers[1]}, eu espero que amanhã melhore.

        oque te deixou feliz foi:
            ${answers[2]}, fico feliz por você mano
        
        Oque você vai fazer amanhã é:
            ${answers[3]}, é isso mano bora pra cima!!

        cola aqui amanhã pra mais uma reflexão!!
    `)
})