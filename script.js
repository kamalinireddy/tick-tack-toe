let btn= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset #reset");
let symbol="x";
let win=false;
let winner=document.querySelector(".winner");

const winnig = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
let noMoves=0;
    btn.forEach((val)=>{
        val.addEventListener("click",(evet)=>{
            if(!val.innerText && !win){
                noMoves+=1;
                val.innerText=symbol;
                for(let pos of winnig){
                    let pos1=btn[pos[0]].innerText;
                    let pos2=btn[pos[1]].innerText;
                    let pos3=btn[pos[2]].innerText;
                    if(pos1!="" && pos2!="" && pos3!=""){
                        if(pos1===pos2 && pos2===pos3){
                            win=true;
                            winner.innerText = `The winner is ${symbol === "x" ? "Player 1" : "Player 2"}`;
                            break;
                        }
                    }
                }
                symbol = symbol === "x" ? "o" : "x";
                if(noMoves>=9){
                    winner.innerText="it was a draw match.. try again!!"
                }
            }
        })
    })
resetBtn.addEventListener("click",()=>{
    for(let vla of btn){
        vla.innerText="";
    }
    noMoves=0;
    symbol="x";
    win=false;
    winner.innerText="winner is....."
})