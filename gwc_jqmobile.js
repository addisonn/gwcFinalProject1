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

var mathQuestions = ['1. Which of these are equal to 83.041?', '2. A class of 25 students shares a class set of 100 markers. On a day with 5 students absent, which statement is true?', '3. The area of a rectangular patio is 5 &frac58; square yards, and its length is 1 &frac12;yards. What is the patio\'s width, in yards?' ];
var correctAnswers = ['radio-choice-3', 'radio-choice-3', 'radio-choice-1'];
var radChoice1 = ['eighty-three and forty-one tenths', 'For every 5 students, there is 1 marker.', '3 &frac34;'];
var radChoice2 = ['8 &times; 10 + 3 &times; 1 + 4 &times; 1/10 + 1 &times; 1/100', 'For every 4 students, there is 1 marker.', '4 &frac18;'];
var radChoice3 = ['eighty-three and forty-one hundredths', 'For each student, there are 4 markers.', '7 &frac18;'];
var radChoice4 = ['8 &times; 10 + 3 &times; 1 + 4 &times; 1/1000 + 1 &times; 1/100', 'For each student, there are 5 markers.', '8 <sup>7</sup>&frasl;<sub>16</sub>'];
var questionNumber = 0;
var score = 0;

function nextMath() {
    var userInput = $('input[name="radio-choice-1"]:checked').attr('id');

    if (userInput == undefined) {
        alert('please choose an answer before continuing');
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