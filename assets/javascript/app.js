//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  /////                   set my variables here               /////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var count = 0;

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ////  set functions for timer, countdown, set interval, also invoking / calling functions ////
//  ////  to set timer / countdown timer with an if statement to check when timer reaches 0   ////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function countDown() {
    timer =4;
    interval = setInterval(timerDecrease, 1000);
}
countDown();

function timerDecrease() {
    timer--;
    $("#timeRemaining").html(timer);

    if(timer === 0) {
        unanswered++;
        stopTimer();
        skip();

    }
}

timerDecrease();

function stopTimer() {
    clearInterval(interval);
    interval = null
}

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  // put a event prevent-default click to prevent page from reloading  //
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$("#choice1").click(function (event)  {
    event.preventDefault();
});

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  /////    set a object with questions - answers - video etc  /////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var cards = [
    {
        question: 'Answer these questions like you do, Released ?',
        correctAnswer: '2015',
        answer1: '2015',
        answer2: '2017',
        answer3: '2014',
        answer4: '2016',
        video: "<iframe id=\"vid1\" width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=GBUV71401618&autoplay=true\" allowfullscreen=\"\"></iframe>\n"

    },

    {
        question: 'Hey! Hey! Now, When did this Release ?',
        correctAnswer: '2017',
        answer1: '2014',
        answer2: '2017',
        answer3: '2015',
        answer4: '2016',
        video: "<iframe id=\"vid2\" width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUV71704477&autoplay=true\" allowfullscreen=\"\"></iframe>\n"

    },

    {
        question: 'If you want to be in the Hall of Fame answer this script ?',
        correctAnswer: '2012',
        answer1: '2016',
        answer2: '2014',
        answer3: '2012',
        answer4: '2011',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=GB1101200754&autoplay=true\" allowfullscreen=\"\"></iframe>\n"

    },

    {
        question: 'This is a sweet question, when did it drop ?',
        correctAnswer: '2014',
        answer1: '2016',
        answer2: '2014',
        answer3: '2015',
        answer4: '2017',
        video: "<iframe id=\"vid4\" width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUV71402867&autoplay=true\" allowfullscreen=\"\"></iframe>\n"

    },

    {
        question: "Take a Look of what you've done, now do we have a date in mind?",
        correctAnswer: '2014',
        answer1: '2017',
        answer2: '2013',
        answer3: '2015',
        answer4: '2014',
        video: "<iframe id=\"vid5\" width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USCJY1531563&autoplay=true\" allowfullscreen=\"\"></iframe>\n"

    },

    {
        question: 'Do you ever feel... like telling me.. when this was released ?',
        correctAnswer: '2010',
        answer1: '2013',
        answer2: '2010',
        answer3: '2014',
        answer4: '2012',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USCA31000112&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    },

    {
        question: 'This might be a "Harder" question but when did this release ?',
        correctAnswer: '2014',
        answer1: '2017',
        answer2: '2015',
        answer3: '2014',
        answer4: '2016',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUV71402652&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    },

    {
        question: 'Now this boy is a star, when did this song drop ?',
        correctAnswer: '2016',
        answer1: '2015',
        answer2: '2017',
        answer3: '2016',
        answer4: '2014',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUMV1600556&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    },

    {
        question: "Hey Don't mock me, when did this hit come out! ?",
        correctAnswer: '2004',
        answer1: '2004',
        answer2: '2002',
        answer3: '2006',
        answer4: '2001',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USIV20500018&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    },

    {
        question: "I'll throw you some * changes * backing up in time when did this hit the streets ?",
        correctAnswer: '1998',
        answer1: '2000',
        answer2: '1992',
        answer3: '1998',
        answer4: '1996',
        video: "<iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUV70502228&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    },

    {
        question: 'When did this wild song come out ?',
        correctAnswer: '2015',
        answer1: '2015',
        answer2: '2011',
        answer3: '2017',
        answer4: '2014',
        video: " <iframe width=\"400\" height=\"225\" src=\"https://embed.vevo.com?isrc=USUV71600493&autoplay=true\" allowfullscreen=\"\"></iframe>\n"
    }

    ];

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  /////  function to display my selected object info onto DOM  /////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function displayCard(card) {
    $("#questions").text(card.question);
    $("#choice1").text(card.answer1);
    $("#choice2").text(card.answer2);
    $("#choice3").text(card.answer3);
    $("#choice4").text(card.answer4);
    $("#play").html(card.video);
}

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  /////    invoking / calling displayCard function to start    /////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
displayCard(cards[count]);

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ////  set a skip function to move on to next question when time runs out  ////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function skip() {
    if (count === 10) {
        $("#play").text("");
        $(".choices").hide();
        $("#questions").hide();
        $("#timeRemaining").hide();
        $("#time").hide();
        $("#results").append(" <h3> You answered " + correctAnswers + " Question(s) correctly </h3>");
        $("#results").append("<h3> Unfortunately you answered " + incorrectAnswers + " Question(s) incorrectly </h3>");
        if(unanswered >= 0)
            $("#results").append(" <h3> You didn't answer " + unanswered + " Questions </h3>")
    }else {
        count++;
        countDown();
        displayCard(cards[count]);
    }
}

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ////  put function event when user clicks on choice and we grab that info  by  ////
//  //// using the .this to grab text and pass info to compare with if statements ////
//  ////  and we add / increment correct or incorrect answers based on comparison ////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

$(".choices").click(function (event) {
    $(this).text();

     if ($(this).text() === cards[count].correctAnswer){
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ////   when count index reach 11 hide the info questions and append results of correct  ////
//  ////   & incorrect answers, I also put if statement if unanswered is greater than 0     ////
//  ////   display how many the user did not answer, if it does equal 0 it will not display ////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    event.preventDefault();
    count++;
    if (count === 11) {
        $("#play").text("");
        $(".choices").hide();
        $("#questions").hide();
        $("#timeRemaining").hide();
        $("#time").hide();
        $("#results").append(" <h3> You answered " + correctAnswers + " Question(s) correctly </h3>");
        $("#results").append("<h3> Unfortunately you answered " + incorrectAnswers + " Question(s) incorrectly </h3>");
        if(unanswered > 0)
        $("#results").append(" <h3> You didn't answer " + unanswered + " Questions </h3>")
    }

//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ////    count increases from above after click event happens, the function displayCard     ////
//  ////    gets called / invoked again until it cycles through to count 11 then it stops      ////
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
displayCard(cards[count]);
stopTimer();
countDown();

});
