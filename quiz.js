$(document).on("pageshow","#TvsKQuiz",function(){
  //alert("pageshow event fired - pagetwo is now shown");
  $("#tNextButton").hide();
});

var tCorrect = 0;
var tContent = 0;
var kCorrect = "Yup! Kanye West said it, good job!";
var dWrong = "AWWW...Nope, it's actually Kanye West who said it.";
var kWrong = "AWWW...Nope, it's actually Donald Trump who said it.";
var dCorrect = "Yup! Donald Trump said it, good job!";
var tAnswers = ["KanyeWest", "DonaldTrump", "KanyeWest"];
var tImages = ["https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/10/enhanced/webdr04/enhanced-31163-1454341508-11.jpg?no-auto", 
"https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/10/enhanced/webdr02/enhanced-14536-1454341693-5.jpg?no-auto",
"https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr14/enhanced-15383-1454344242-1.jpg?no-auto"]
function tCheck()
{
	var who = $('input[name="radio-choice-0"]:checked').attr('id');
	if(who == undefined)
	{
		$("#tAnswer").text("You have to pick something before checking the answer-_-");
	}
	else
	{
		//window.alert(who);
		if(tAnswers[tContent] == "KanyeWest" && who == "KanyeWest")
		{
			$("#tAnswer").text(kCorrect);
			tCorrect ++;
		}
		else if(tAnswers[tContent] == "KanyeWest" && who == "DonaldTrump")
		{
			$("#tAnswer").text(dWrong);
		}
		else if(tAnswers[tContent] == "DonaldTrump" && who == "DonaldTrump")
		{
			$("#tAnswer").text(dCorrect);
			tCorrect ++;
		}
		else if(tAnswers[tContent] == "DonaldTrump" && who == "KanyeWest")
		{
			$("#tAnswer").text(kWrong);
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
	if(tContent == tImages.length)
	{
		window.alert("The number of your correct answer is: " + tCorrect);
	}
	else
	{
		document.getElementById("tImg").src = tImages[tContent];
	}
}

$(document).on('pageshow', '#home', function() {
	$('#math-header').hide();
})

$(document).on('pageshow', '#TvsKQuiz', function() {
	$('#math-header').hide();
})

$(document).on('pageshow', '#math-quiz', function() {
	$('math-header').show();
})

