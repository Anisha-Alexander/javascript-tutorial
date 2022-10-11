let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard,secondCard]// ordered list of items -array
let sum= firstCard+secondCard
let hasBlackJack =false //to track the the win
let isAlive= true //to check if you still have chance to stay
console.log(sum)
let message= ""
let messageEl= document.getElementById("message-el")//to display message in window
let sumEl= document.getElementById("sum-el")//to display the sum in window
let cardsEl=document.getElementById("cards-el")//to display the cards in window

function startGame(){
    renderGame()
}


function renderGame(){
       
     
     sumEl.textContent = sum
    
    if (sum < 21){
        message="Do you want to draw a new card"
        hasBlackJack=false
    }
    else if (sum === 21){ 
        message="Woohoo! You've got a black jack!"
        hasBlackJack=true
    }
    else if(sum > 21){
        message="You're out of the game"            
        isAlive=false
    }
    for(let i=0;i< cards.length; i+=1){
        cardsEl.textContent += cards[i] + " , "        
     }
     cards=[]
    messageEl.textContent=message    
}
function newCard(){    
    let drawnCard = getRandomCard()  
    sum += drawnCard   
    cards.push(drawnCard) 
    console.log(cards)    
    renderGame()    
}

// ---------------------------------
// let cards= [7,4]
// console.log(cards)
// cards.push(8,7)
// console.log(cards)