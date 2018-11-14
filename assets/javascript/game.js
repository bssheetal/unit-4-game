
var counter = 0;
var wins = 0;
var Losses = 0;
var windowTimeout;
var random=0;
var increment=0;

$(document).ready(function ()
{
    randomtargetnumber();
    randomcrystalnumber();

    $(".PinkCrystal").on("click", function () {
        counter += increment+0;
        console.log(counter);
        $("#Yourscore").text(counter);
        scorecheck();
    });

    $(".GreenCrystal").on("click", function () {

        counter += increment+2;
        console.log(counter);
        $("#Yourscore").text(counter);
        scorecheck();
    });

    $(".BlueCrystal").on("click", function () {
        counter += increment+4;
        console.log(counter);
        $("#Yourscore").text(counter);
        scorecheck();
    });

    $(".YellowCrystal").on("click", function () {
        counter += increment+6;
        console.log(counter);
        $("#Yourscore").text(counter);
        scorecheck();
    });

});



function randomtargetnumber()
{
    random = Math.floor(Math.random() * 120) + 19;
    $("#Random-Number").text(random);
    console.log(random);
  
}

function randomcrystalnumber()
{
    
    increment = Math.round(Math.random()*12)+1;
}

function scorecheck() {
    if (random === counter) {
        wins = wins + 1;
        $("#wins").text(wins);    
        windowTimeout = setTimeout(function() {restartgame()}, 1000);
        windowTimeout=setTimeout(alert("Hurrah!You won!GameOver"),5000);
        
    }
    else if (counter >= random) {
        Losses = Losses + 1;
        $("#losses").text(Losses);                
        windowTimeout = setTimeout(function() {restartgame()}, 1000);
        windowTimeout=setTimeout(alert("Oops!Better luck next time!GameOver"),5000);
    }
}


function restartgame()
{
    counter = 0;
    $("#Yourscore").text(counter);
    wins = 0;
    $("#wins").text(wins);
    Losses = 0;
    $("#losses").text(Losses);     
    randomtargetnumber();
    randomcrystalnumber();
}