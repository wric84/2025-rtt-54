console.log("Hello World");

const data = [
    {
        value: 100,
        question: "What is a variable in JavaScript?",
        answer: "A variable is a container for storing data values, declared using var, let, or const."
    },
    {
        value: 200,
        question: "What does '===' mean in JavaScript?",
        answer: "'===' checks for both value and type equality between two values."
    },
    {
        value: 300,
        question: "How do you define a function in JavaScript?",
        answer: "You can define a function using the function keyword, e.g., function myFunc() { }"
    },
    {
        value: 400,
        question: "What is the difference between let and var?",
        answer: "let is block-scoped, while var is function-scoped."
    },
    {
        value: 500,
        question: "What is an array in JavaScript?",
        answer: "An array is a data structure that holds an ordered list of values."
    },

]

const board = document.getElementById('board')
const scoreEl = document.getElementById('score')
const resetBtn = document.getElementById('reset')
let score = 0

//console.log(board);

//map or forEach
data.forEach(arrayObject => {
    //1. create a div to store each question
    const tile = document.createElement('div')
    console.log(tile);
    tile.className = 'tile'
    //2. add context/text to each div created
    tile.innerHTML = `<div class="value">$${arrayObject.value}</div>
                    <div class='front'>${arrayObject.question}</div>
                    <div class='back hidden'>${arrayObject.answer}
                    <div class="controls">Did you get it correct?
                    <button class='correct'>Yes</button>
                    <button class='incorrect'>No</button>
                    </div></div>`

    // //same thing as above, but for the front side of the card only
    // const question = document.createElement('div')
    // question.className = 'front'
    // question.innerHTML = `${arrayObject.question}`
    // tile.appendChild(question)
    // //This is the answer card
    // const answer = document.createElement('div')
    // answer.className = 'back'
    // answer.innerHTML = `${arrayObject.answer}`
    // tile.appendChild(answer)
    //3. Append to the parent element


    tile.addEventListener('click', () => {
        const front = tile.querySelector('.front', back=tile.querySelector('.back'), value = tile.querySelector('.value'))
        if(front.classList.contains('hidden')){
            front.classList.remove('hidden')
            back.classList.add('hidden')
            value.classList.remove('hidden')
        }else{
            front.classList.add('hidden')
            back.classList.remove('hidden')
            value.classList.add('hidden')
        }
        //if button is correct
        tile.querySelector('.correct').addEventListener('click', ()=> {
            score+= arrayObject.value
            console.log(score);
            updateScore()
        })
        //if button is incorrect
         tile.querySelector('.incorrect').addEventListener('click', ()=> {
            score-= arrayObject.value
            console.log(score);
            updateScore()
        })
        // tile.querySelector(`.front`).classList.toggle('hidden')
        // tile.querySelector(`.back`).classList.toggle('hidden')
    })


    board.appendChild(tile)
})

function updateScore(){
    scoreEl.textContent = score
}



