$("form").on("submit",function(e){
	e.preventDefault();
	var text = "";
	$.each($("input[type=radio]:checked"),function(i,radio){
		addPointsToCharacter(quiz,$(radio).val());
	});
	var characterPos = quiz.pointsToCharacter.indexOf(Math.max.apply(Math, quiz.pointsToCharacter));
	var character = quiz.characters[characterPos];
	text += "<p>"+character+"</p>";

	var link = "<a href=\"https://www.facebook.com/dialog/feed?app_id=827591077295980&display=popup&caption=Eu%20tirei%20"+character+"%20&link=http%3A%2F%2Fcaio.ninja%2Fquiz%2F&redirect_uri=http%3A%2F%2Fcaio.ninja%2Fquiz%2F\">Share no resultado!</a>";
	text+= link;
	 $("#quiz").html(text);
});

