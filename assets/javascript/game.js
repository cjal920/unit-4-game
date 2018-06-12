$(document).ready(function(){

    // jQuery methods go here...
  var numRandom = (Math.floor(Math.random() * 101) + 19);

  $("#target").html(numRandom);

  var numRed = (Math.floor(Math.random() * 12) + 1);
  var numBlue = (Math.floor(Math.random() * 12) + 1);
  var numYellow = (Math.floor(Math.random() * 12) + 1);
  var numGreen = (Math.floor(Math.random() * 12) + 1);

  var score = 0; 
  var wins = 0;
  var losses = 0;


 
// pick a random number between 19 and 120. 

function newGame() {
    numRandom = (Math.floor(Math.random() * 101) + 19);
    $("#target").html(numRandom);
    console.log(numRandom);
    numRed = (Math.floor(Math.random() * 12) + 1);
    numBlue = (Math.floor(Math.random() * 12) + 1);
    numYellow = (Math.floor(Math.random() * 12) + 1);
    numGreen = (Math.floor(Math.random() * 12) + 1);
    score = 0;
    $("#score").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
    }


// assign four random numbers between 1 and 12 to four different colored crystals.
    // pick first random number between 1 and 12. number equals red.

   // var numRed = (Math.floor(Math.random() * 12) + 1);


    $("#red").on("click", function() {
        score = numRed + score;
        console.log("new score:" + score);
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>YOU WIN<h2>")
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>YOU LOSE<h2>")
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#blue").on("click", function() {
        score = numBlue + score;
        console.log("new score:" + score);
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>YOU WIN<h2>")
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>YOU LOSE<h2>")
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#yellow").on("click", function() {
        score = numYellow + score;
        console.log("new score:" + score);
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>YOU WIN<h2>")
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>YOU LOSE<h2>")
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#green").on("click", function() {
        score = numGreen + score;
        console.log("new score:" + score);
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>YOU WIN<h2>")
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>YOU LOSE<h2>")
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    newGame()

       





  /*
    
    var numRed = (Math.floor(Math.random() * 12) + 1);

    console.log(numRed);
    
    
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

*/

});
