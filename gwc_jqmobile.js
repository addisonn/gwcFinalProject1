var score;

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


$(function () {
    $("[data-role=header]").toolbar();
    $("[data-role=popup]").popup().enhanceWithin();
});

$(document).on('click', '#math-next', function () {
    if ($.mobile.activePage.next("[data-role=page]").length !== 0) {
        var next = $.mobile.activePage.next("[data-role=page]");
        $.mobile.changePage(next, {
            transition: 'slide'
        });
    } else {
        alert('There\'s no next page');
    }
});

$(document).on('click', '#math-back', function () {
    if ($.mobile.activePage.prev("[data-role=page]").length !== 0) {
        var prev = $.mobile.activePage.prev("[data-role=page]");
        $.mobile.changePage(prev, {
            transition: 'slide',
            reverse: true
        });
    } else {
        alert('There\'s no previous page');
    }
});

$('#submit-button').on('click', function() {
	$('#test-results').html(score);
})