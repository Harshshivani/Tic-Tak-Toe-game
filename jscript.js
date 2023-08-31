console.log("welcome to Tic Tac Toe")
let music= new Audio("game music.mpeg")
let audioturn = new Audio("beep.mpeg")
let gameover = new Audio("gameover.mpeg")
let Turn ="X"
let gamedone= false;

//Function to change the turn
const changeTurn = ()=>{
    return Turn ==="X"? "0": "X"
}

//function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0, 1, 2, 0, 5, 5],
        [3, 4, 5, 0, 5, 15],
        [6, 7, 8, 0, 5, 25],
        [0, 3, 6, 90, 15, 5],
        [1, 4, 7, 90, 15, -5],
        [2, 5, 8, 90, 15, -15],
        [0, 4, 8, 45, 14, 7],
        [2, 4, 6, 135, 7, -14],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext = boxtext[e[0]].innerText + "won"
            gamedone= true  
            gameover.play();
            document.querySelector(' .imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = ` rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)   `
            document.querySelector('.line').style.width="20vw";
        }
    })
}
//game logic 
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gamedone){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
            }
        }
    })
})

//add onclick event to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText=""
    });
    Turn= "X";
    gamedone = false
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info")[0].innerText ="Turn for" + Turn;
    document.getElementsByTagName('img')[0].style.width = "0px"

})
