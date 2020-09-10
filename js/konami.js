"use strict";
$(document).ready(function() {
const finisHim = new Audio("assets/finish_him.mp3");
const fatality = new Audio("assets/fatality.mp3");
const laughter = new Audio("assets/laughter.mp3");
const impressive = new Audio("assets/impressive.mp3");
const flawless = new Audio("assets/flawless.mp3");
const round_one = new Audio("assets/round_one.mp3");
const buttonList = $("li").toArray();
const cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let matchedCount = 0;
let attempts= 0;
let timeoutID;

$(document).keydown(function (e) {
    if(e.keyCode === cheatCode[matchedCount]) {
        resetTimer();
        $(buttonList[matchedCount]).css('color','red');
        matchedCount++;
    }else{
        goInactive();
        attempts++;
    }
    playerFeedback();
});

$('#fight').on('click',function () {
    round_one.play();
})
setTimeout(()=>{
    $('#fight').addClass('d-none');
    $(document).off('mousemove');
},3000);

const playerFeedback = ()=>{
    switch (matchedCount) {
        case cheatCode.length:
            fatality.play();
            window.clearTimeout(timeoutID)
            $(document).off();
            setTimeout(isFlawless,1500);
            setTimeout(()=>{window.location.reload();},4000)
            break;
        case cheatCode.length-1:
            finisHim.play();
            break;
        case 5:
            impressive.play();
            break;
        case 0:
            laughter.play();
            break
        default:
            break;
    }
}

const startTimer = ()=> {
    // wait 3 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 3000);
}
const resetTimer = ()=> {
    window.clearTimeout(timeoutID);
    goActive();
}
const goActive = ()=> {
    startTimer();
}
const goInactive = ()=> {
    matchedCount = 0;
    $( "li" ).css('color','black');
    playerFeedback();
}
const isFlawless = ()=>{
    if(attempts === 0) flawless.play();
}
});