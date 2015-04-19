var quiz = new Quiz();

var answersOne = [{
    			title: "Quero ser o Loki",
    			charNumber: 0
    		},
    		{
				title: "Quero ser o Thanos",
    			charNumber: 1
    		},
    		{
    			title: "Quero ser o Ultron",
    			charNumber: 2
    		},
    		{
    			title: "Quero ser o Magneto",
    			charNumber: 3
    		}];

var answersTwo = [{
    			title: "Um cetro",
    			charNumber: 0
    		},
    		{
				title: "Uma manopla",
    			charNumber: 1
    		},
    		{
    			title: "Uma armadura",
    			charNumber: 2
    		},
    		{
    			title: "Qualquer metal por perto",
    			charNumber: 3
    		}];

var answersThree = [{
    			title: "Astuto",
    			charNumber: 0
    		},
    		{
				title: "Planejador",
    			charNumber: 1
    		},
    		{
    			title: "Livre",
    			charNumber: 2
    		},
    		{
    			title: "Dominador",
    			charNumber: 3
    		}];


questions = [
	new Question("Qual seu vilão favorito?",answersOne),
	new Question("Qual arma você prefere?",answersTwo),
	new Question("Qual adjetivo melhor te define?",answersThree)
]

var text = "";
text+="<form class=\"formQuiz\">";
questions.forEach(function(question){
	text+= "<div class=\"formQuiz-question\">"
	text+= "<p>"+question.title+"</p>";
	question.answers.forEach(function(answer){
		text+="<label class=\"formQuiz-answer\"><input class=\"formQuiz-radio\" name=\""+question.title+"\" type=\"radio\" value=\""+answer.charNumber+ "\">"+answer.title+"</input></label>";
	});
	text+= "</div>"
});
text+="</br>"
text+="<input class=\"formQuiz-submit\" type=\"submit\" value=\"Responder\">";
text+="</form>"

$("#quiz").html(text);