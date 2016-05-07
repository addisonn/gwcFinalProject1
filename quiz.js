

$(document).on("pageshow","#TvsKQuiz",function(){
  //alert("pageshow event fired - pagetwo is now shown");
  $("#next").hide();
});
var tCorrect = 0;
var tContent = 1;
var kCorrect = "Yup! Kanye said it, good job!";
var dWrong = "AWWW...Nope, it's actually Kanye who said it.";
function tCheck()
{
	var who = $('input[name="radio-choice-0"]:checked').attr('id');
	if(who == undefined)
	{
		$("#tAnswer").text("You have to pick something before checking the answer-_-");
	}
	else
	{
		if(tContent == 1)
		{
			//window.alert(who);
			if(who == "radio-choice-0a")
			{
				$("#tAnswer").text(dWrong);
			  
			}
			else if(who == "radio-choice-0b")
			{
				$("#tAnswer").text(kCorrect);
			  
			}
		}
		$("#check").hide();
		$("#next").show();
		//tContent ++;
	}	
}

function tNext()
{
	if(tContent == 1)
	{
		
	}
}