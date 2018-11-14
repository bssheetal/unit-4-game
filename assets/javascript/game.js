
var counter = 0;
var wins = 0;
var Losses = 0;

$(document).ready(function ()
{
  begingame();
});

function begingame()
{

    var random = Math.floor(Math.random() * 120) + 19;
    $("#Random-Number").text(random);
    var numberOptions = [1, 12];
    var increment = numberOptions[Math.round(Math.random())];
    $(".PinkCrystal").on("click", function () {
        counter += increment+0;
        $("#Yourscore").text(counter);
        scorecheck(random);
    });

    $(".GreenCrystal").on("click", function () {

        counter += increment+2;
        $("#Yourscore").text(counter);
        scorecheck(random);
    });

    $(".BlueCrystal").on("click", function () {
        counter += increment+4;
        $("#Yourscore").text(counter);
        scorecheck(random);
    });

    $(".YellowCrystal").on("click", function () {
        counter += increment+6;
        $("#Yourscore").text(counter);
        scorecheck(random);
    });

}

function scorecheck(random) {
    if (random === counter) {
        wins = wins + 1;
        $("#wins").text(wins);
        restartgame();
    }
    else if (counter >= random) {
        Losses = Losses + 1;
        $("#losses").text(Losses);
        restartgame();
    }
}


function restartgame()
{
    counter=0;
    wins = 0;
    Losses = 0;
    begingame();
}