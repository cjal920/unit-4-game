$(document).ready(function(){

    // jQuery methods go here...
 

  var score = 0; 
  var wins= 0;
  var losses = 0;

  


 
// pick a random number between 19 and 120. 

var numRandom = (Math.floor(Math.random() * 101) + 19);

    $("#target").html(numRandom);

    console.log(numRandom);

// assign four random numbers between 1 and 12 to four different colored crystals.
    // pick first random number between 1 and 12. number equals red.

   // var numRed = (Math.floor(Math.random() * 12) + 1);


    $("#red").on("click", function() {
        var numRed = (Math.floor(Math.random() * 12) + 1);
        console.log(numRed);
        $("#score").text(numRed);
    });
    



    /*
    $('#one').on('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal); 


*/
    

    
    
    // pick second random number between 1 and 12. number equals blue.

    var numBlue = (Math.floor(Math.random() * 12) + 1);

    console.log(numBlue);

    // pick third random number between 1 and 12. number equals yellow.

    var numYellow = (Math.floor(Math.random() * 12) + 1);

    console.log(numYellow);

    // pick fourth random number between 1 and 12. number equals green.

    var numGreen = (Math.floor(Math.random() * 12) + 1);

    console.log(numGreen);

// show total number of wins, losses and score. each starts at 0.

    var wins = 0;
    var losses = 0;
    var score = 0;

// when player clicks a crystal, add its number to score.

// if score == numRandom, player wins.

    wins++;

// if score > numRandom, player loses.

    losses++;

// when score => numRandom, game over. pick new random numbers for 



});
