var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var count = 0;

function countDown() {
    timer =31;
    interval = setInterval(timerDecrease, 1000);
}
countDown();

function timerDecrease() {
    timer--;
    $("#timeRemaining").html(timer);

    if(timer === 0) {
        stopTimer();
        skip()
    }
}
timerDecrease();

function stopTimer() {
    clearInterval(interval);
    interval = null
}



$("#choice1").click(function (event)  {
    event.preventDefault();


});


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
        question: "Take a Look of what you've done, now do we have a date ?",
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
        question: "I'll throw you some * changes * backing up in time when did this hit thr streets ?",
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


function displayCard(card) {
    $("#questions").text(card.question);
    $("#choice1").text(card.answer1);
    $("#choice2").text(card.answer2);
    $("#choice3").text(card.answer3);
    $("#choice4").text(card.answer4);
    $("#play").html(card.video);

}
displayCard(cards[count]);

function skip() {
        count++;
        unanswered++;
    countDown();
    displayCard(cards[count]);

}


$(".choices").click(function (event) {
    $(this).text();

     if ($(this).text() === cards[count].correctAnswer){
        correctAnswers++;
        console.log( correctAnswers);
    }
    else {
        incorrectAnswers++;
    }

    console.log(incorrectAnswers);
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

displayCard(cards[count]);
stopTimer();
countDown();

});
