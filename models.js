function Quiz(){
	this.characters= ["Loki","Thanos","Ultron","Magneto"],
	this.pointsToCharacter = [0,0,0,0]
}

function addPointsToCharacter(quiz,number){
	quiz.pointsToCharacter[number] += 1;
}

function Question(title, answers) {
	this.title = title;
	this.answers = answers;
}