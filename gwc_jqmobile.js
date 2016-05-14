// var score;

// $(document).ready(function() {
// 	score = 0;

// 	$("#math-next").on('click', function () {
// 		var answer = $('input[name="radio-choice-1"]:checked').attr('id')

// 		if (answer.hasClass('correct')) {
// 			score = score + 1;
			
// 		} else {
// 			score = score + 0;
// 		};
// 	});
// });


// $(function () {
//     $("[data-role=header]").toolbar();
//     $("[data-role=popup]").popup().enhanceWithin();
// });

// $(document).on('click', '#math-next', function () {
//     if ($.mobile.activePage.next("[data-role=page]").length !== 0) {
//         var next = $.mobile.activePage.next("[data-role=page]");
//         $.mobile.changePage(next, {
//             transition: 'slide'
//         });
//     } else {
//         alert('There\'s no next page');
//     }
// });

// $(document).on('click', '#math-back', function () {
//     if ($.mobile.activePage.prev("[data-role=page]").length !== 0) {
//         var prev = $.mobile.activePage.prev("[data-role=page]");
//         $.mobile.changePage(prev, {
//             transition: 'slide',
//             reverse: true
//         });
//     } else {
//         alert('There\'s no previous page');
//     }
// });

// $('#submit-button').on('click', function() {
// 	$('#test-results').html(score);
// })
var score = 0;
var mathQuestions = ['1. Which of these is equal to 83.041?', '2. A class of 25 students shares a class set of 100 markers. On a day with 5 students absent, which statement is true?', '3. The area of a rectangular patio is 5 &frac58; square yards, and its length is 1 &frac12;yards. What is the patio\'s width, in yards?', '4. Which expression is equal to &frac78; ?', '5. Which expression represents "6 more than x"?'];
var correctAnswers = ['radio-choice-3', 'radio-choice-3', 'radio-choice-1', 'radio-choice-2', 'radio-choice-4'];
var radChoice1 = ['eighty-three and forty-one tenths', 'For every 5 students, there is 1 marker.', '3 &frac34;', '<sup>8</sup>&frasl;<sub>7</sub>', 'x - 6'];
var radChoice2 = ['8 &times; 10 + 3 &times; 1 + 4 &times; 1/10 + 1 &times; 1/100', 'For every 4 students, there is 1 marker.', '4 &frac18;', '7 &divide; 8', '6 &times; x'];
var radChoice3 = ['eighty-three and forty-one hundredths', 'For each student, there are 4 markers.', '7 &frac18;', '7 &times; 8', '6 - x'];
var radChoice4 = ['8 &times; 10 + 3 &times; 1 + 4 &times; 1/1000 + 1 &times; 1/100', 'For each student, there are 5 markers.', '8 <sup>7</sup>&frasl;<sub>16</sub>', '8 - 7', 'x + 6'];
var questionNumber = 0;

$(document).on('click', '#math-next-btn', function () {
        if (questionNumber > 4) {
            alert('You scored '+ score +' out of 5.');
        } 
});



function nextMath() {
    
    var userInput = $('input[name="radio-choice-1"]:checked').attr('id');

    if (userInput == undefined) {
        alert('Please Select an Answer Before Continuing');
    } else {

        if (userInput == correctAnswers[questionNumber]) {
            score++;
        }

        questionNumber++
        $('input[name="radio-choice-1"]').prop('checked', false);
        $("input[name='radio-choice-1']").checkboxradio("refresh");
        $("#math-question").text(mathQuestions[questionNumber]);
        $('label[for=radio-choice-1]').html(radChoice1[questionNumber]);
        $('label[for=radio-choice-2]').html(radChoice2[questionNumber]);
        $('label[for=radio-choice-3]').html(radChoice3[questionNumber]);
        $('label[for=radio-choice-4]').html(radChoice4[questionNumber]);
    }

}