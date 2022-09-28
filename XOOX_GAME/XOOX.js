let title = document.querySelector(".title")
let turn = "X";
let square = [];/*this array is used to store the value of the boxex*/
/*We use this function to check if there is a winner*/
function end(num1,num2,num3){    
        title.innerHTML = `${square[num1]} is the winner`;/*we show who is the winner*/
        
        //this is used to change the background of the boxes which are the same and winners
        document.getElementById(`item${num1+1}`).style.background = "#000";
        document.getElementById(`item${num2+1}`).style.background = "#000";
        document.getElementById(`item${num3+1}`).style.background = "#000";
        //we delete the content of other boxes and keep only boxes of the winner
        for(let i = 0;i< 9;i++)
        {
            if(i != num3 && i != num2 && i != num1)
            {
                document.getElementById(`item${i+1}`).innerHTML = "";
            }
        }

        setInterval(function() {title.innerHTML +="."},1000)/*adding some style to the winner like the points after 2second*/
        //We propose to the players if they want to play again
        setTimeout(function(){title.innerHTML = "Wait for seconds to replay..."},3000);  
        setTimeout(function(){location.reload()},5000);/*reloading the page after showing who is the winner*/
        
    }
function winner()
{
    /*putting the value of the boxes on the array*/
    for(let i = 0;i < 9;i++)
    {
        square[i]=document.getElementById(`item${i+1}`).innerHTML;
    }
    /*testing if there are 3 boxes having the same value */
    if(square[0] == square[1] && square[2] == square[1] && square[1] != "") 
        {           
            end(0,1,2)
        }   
        else if(square[0] == square[3] && square[3] ==  square[6] && square[3] != "" ){
            end(3,6,0)
        } 
        else if(square[0] == square[4] && square[0] == square[8]  && square[8] != ""){
            end(8,4,0)
        } 
        else if(square[1] == square[4] && square[7] == square[4] && square[4]!= ""){
            end(1,4,7)
        } 
        else if(square[2] == square[5] &&  square[8] == square[5] && square[5] != ""){
            end(2,5,8)

        } 
        else if(square[2] == square[4] && square[6] == square[4] &&  square[4]  != ""){
            end(2,6,4)
        } 
        else if(square[6] == square[7] && square[8] == square[7] &&  square[7]  != ""){
            end(7,6,8)
        } 
        else if(square[3] == square[4] && square[5] == square[4] && square[4] != ""){
            end(3,5,4)
        } 
        else if(//this is used if there is no winner or loser
            //we gonna check by this condition
            square[0] != "" && 
            square[1] != "" &&
            square[2] != "" &&
            square[3] != "" &&
            square[4] != "" &&
            square[5] != "" &&
            square[6] != "" &&
            square[7] != "" &&
            square[8] != "" 
            )
        {
            //we show the players that
            title.innerHTML = "No winner , No loser"
            //We propose to the players if they want to play again
            setTimeout(function(){title.innerHTML = "Wait for seconds to replay..."},2000);      
            //we reload the page to replay
            setTimeout(function(){location.reload()},4000);
        }
        

          
}
function game(id)
{
    //getting the id of the box
    let element = document.getElementById(id);
    if(turn === "X" && element.innerHTML== "" )
    {
        //we make X in the box here
        element.innerHTML = "X";
        //we must chane this value for the next player
        turn = "O"
        //Showing who is gonna play next
        title.innerHTML = "O";
    }
    if(turn === "O" && element.innerHTML== "" )
    {
        //we make X in the box here
        element.innerHTML = "O";
        //we must chane this value for the next player
        turn = "X"
        //Showing who is gonna play next
        title.innerHTML = "X";
    }
    //Caling the function which is gonna test if there is a winner or not
    winner()
}

