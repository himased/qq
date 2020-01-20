var x = Math.floor(Math.random()*100)+1;

var input = 1;
let check;

document.getElementById("submitguess").onclick = function(){
    var y = document.getElementById("guessField").value;
        if(input < 11){
            if(y == x ){
                document.querySelector('.result').textContent = "Woww!! YOU CAN GUESS IT RIGHT IN " + input + " GUESS!!!";
                input = 12;
            }else if (y > x){
                document.querySelector('.result').textContent = "Too High!!!";
                input++;
            }else{
                document.querySelector('.result').textContent = "Too Low!!!";
                input++;
            }
            if (input == 2){
                check = y;
            }else{ 
                check += ", "+y;
            }
            document.querySelector('.history').textContent = check;
        }
        if (input == 11){
            document.querySelector('.result').textContent = "LuL !! You lose.... THE NUMBER IS "+ x + ".";
        }
}
