$("form").on("submit",function(e){
	e.preventDefault();
	var text = "";
	$.each($("input[type=radio]:checked"),function(i,radio){
		addPointsToCharacter(quiz,$(radio).val());
	});
	var characterPos = quiz.pointsToCharacter.indexOf(Math.max.apply(Math, quiz.pointsToCharacter));

	text += "<p>"+quiz.characters[characterPos]+"</p>";
	 $("#quiz").html(text);
});