$(document).on("pageshow","#LoNQuiz",function(){
  //alert("pageshow event fired - pagetwo is now shown");
  $("#lNextButton").hide();
  $("#LoNEndButton").hide();
});

var lCorrect = 0;
var lContent = 0;
var lawCorrect = "Yup! It is a real law.";
var lawWrong = "AWWW...Nope, it's not a real law. We just made it up.";
var notWrong = "AWWW...Nope. It is actually a real law.";
var notCorrect = "Yup! It's not a real law, we just made it up!";
var lAnswers = ["law", "notALaw", "notALaw", "law", "law", "notALaw", "law", "notALaw", "law", "law"];
var lSentences = ["A person may not walk around on Sundays with an ice cream cone in their pocket.", 
"It is illegal to teach your parrot to rap without a permit.",
"Eating while swimming in the swimming pool is prohibited.",
"While riding in an elevator, one must talk to no one, and fold his hands while looking toward the door.",
"Women may go topless in public, providing it is not being used as a business.",
"Men are allowed to whistle at passing attractive young women only if it's a recognizable tune.",
"It is illegal for men to go topless in the center of town",
"If a grocery store patron squeezes a melon for more than 5 seconds, they must purchase it.",
"You may only water your lawn if the hose is held in your hand.",
"It is against the law to throw a ball at someone's head for fun."];


function lCheck()
{
	var who = $('input[name="radio-choice-2"]:checked').attr('id');
	if(who == undefined)
	{
		$("#lAnswer").text("You have to pick something before checking the answer-_-");
	}
	else
	{
		//window.alert(who);
		if(lAnswers[lContent] == "law" && who == "law")
		{
			$("#lAnswer").text(lawCorrect);
			lCorrect ++;
		}
		else if(lAnswers[lContent] == "law" && who == "notALaw")
		{
			$("#lAnswer").text(notWrong);
		}
		else if(lAnswers[lContent] == "notALaw" && who == "notALaw")
		{
			$("#lAnswer").text(notCorrect);
			lCorrect ++;
		}
		else if(lAnswers[lContent] == "notALaw" && who == "law")
		{
			$("#lAnswer").text(lawWrong);
		}		
		if(lContent == lSentences.length - 1)
		{
			$("#lCheckButton").hide();
			var done = "Congratulations! You've completed the quiz. You got ";
			var finishSentence = done.concat(lCorrect, " out of 10.");
			$("#LoNFinish").html(finishSentence);
			$("#LoNEndButton").show();
		}
		else
		{
			$("#lCheckButton").hide();
			$("#lNextButton").show();
			lContent ++;
		}
	}	
}

function lNext()
{
	$('input[name="radio-choice-2"]').prop('checked', false);
	$("input[name='radio-choice-2']").checkboxradio("refresh");
	$("#lAnswer").text("");
	$("#lCheckButton").show();
	$("#lNextButton").hide();
	$("#lQuestion").toggle( "slide" );
	$("#lQuestion").html(lSentences[lContent]);
	$("#lQuestion").toggle( "slide" );
}