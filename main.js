let color='random';
let click=true;

function populateBoard(size){
    let board=document.querySelector('.board');
    let squares=board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;

let amount=size*size;

for(let i=0; i<=amount; i++){
    let square=document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor='white';
    board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function changeSize(input){
    if(input>=2 && input<=100){
        populateBoard(input);
    }else{
        console.log('too many squares')
    }
}

function colorSquare(){
    
    if(click){

    //Generate random color by selecting random RGB values
        if(color === "random"){
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            this.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
        }
        else{
            this.style.backgroundColor=color;
            } 
    }
}

function changeColor(choice){
    color=choice;
}

function resetBoard(){

    let board=document.querySelector('.board');
    let squares=board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    populateBoard(16);

}

document.querySelector('body').addEventListener('click',(e)=>{
    
    if(e.target.insertAdjacentElement!="button")
    click=!click;
    if(click){
        document.querySelector('.mode').textContent="Mode: Coloring";
    }else{
        document.querySelector('.mode').textContent='Mode: Not Coloring'
    }



})
