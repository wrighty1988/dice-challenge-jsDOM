let currentSpin = 0;


function rollTheDice() {

    currentSpin++;

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    setTimeout(function () { 

        if(currentSpin == 11) {
            currentSpin=1;
            for(i=1; i<=10; i++) {
                currentVal = "value" + i;
                currentTotal = "total" + i;
                document.getElementById(currentVal).innerHTML="";
                document.getElementById(currentTotal).innerHTML="";
            }
        }
        document.getElementById("dice").className=returnFinalStyle(randomNumber1);
        
        currentVal = "value" + currentSpin;
        currentTotal = "total" + currentSpin;

        if(currentSpin==1) {
            previousTotal = 0;
        } 
        else {
            previousID = "total" + (currentSpin-1);
            previousTotal = document.getElementById(previousID).innerHTML;
        }
         document.getElementById(currentVal).innerHTML = randomNumber1;
         document.getElementById(currentTotal).innerHTML = randomNumber1+ parseInt(previousTotal);
        
        if (randomNumber1 === 1){ 
        document.querySelector("h1").innerHTML
                                = "you lose";                        
        }
        else if (randomNumber1 < 21) {  
        document.querySelector("h1").innerHTML 
                                = (" Roll again"); 
        }
        else { 
            (currentTotal >21)
                document.querySelector("h1").innerHTML 
                                = (" WINNER");
        }
    }, 2500);

    // Roll the dice

    document.getElementById("dice").className="diceSpin";
    
}

function returnFinalStyle(number) {

    return "dicePos" + number;

}