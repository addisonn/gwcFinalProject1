$(document).on("pageshow","#TvsKQuiz",function(){
  //alert("pageshow event fired - pagetwo is now shown");
  $("#tNextButton").hide();
});

var tCorrect = 0;
var tContent = 0;
var kCorrect = "Yup! Kanye said it, good job!";
var dWrong = "AWWW...Nope, it's actually Kanye who said it.";
var tAnswers = ["KanyeWest", "DonaldTrump", "KanyeWest"];
function tCheck()
{
	var who = $('input[name="radio-choice-0"]:checked').attr('id');
	if(who == undefined)
	{
		$("#tAnswer").text("You have to pick something before checking the answer-_-");
	}
	else
	{
		if(tContent == 0)
		{
			//window.alert(who);
			if(who == "DonaldTrump")
			{
				$("#tAnswer").text(dWrong);
			  
			}
			else if(who == "KanyeWest")
			{
				$("#tAnswer").text(kCorrect);
			  
			}
		}
		$("#check").hide();
		$("#tNextButton").show();
		tContent ++;
	}	
}

function tNext()
{
	$('input[name="radio-choice-0"]').prop('checked', false);
	$("input[name='radio-choice-0']").checkboxradio("refresh");
	$("#tAnswer").text("");
	$("#check").show();
	$("#tNextButton").hide();
	if(tContent == 1)
	{
		document.getElementById("tImg").src = "https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/10/enhanced/webdr02/enhanced-14536-1454341693-5.jpg?no-auto";
	}
	else if(tContent == 2)
	{
		document.getElementById("tImg").src = "https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr14/enhanced-15383-1454344242-1.jpg?no-auto";
	}
}

$(document).on('pageshow', '#home', function() {
	$('#math-header').hide();
})

$(document).on('pageshow', '#math-quiz', function() {
	$('math-header').show();
})