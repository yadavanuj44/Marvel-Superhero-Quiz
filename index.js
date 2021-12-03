var readlineSync = require("readline-sync")

var userName = readlineSync.question("Welcome to Marvel superhero quiz. Please enter your name: ")

console.log("\nHello "+ userName +", you will be a given question about marvel superhero with 4 options to choose the answer from, only enter the letter of the option you want to choose, for e.g. A or a to answer\n\nScore more than 3 to go to Level 2.\n")

questionOne = {
  question: "How many avengers are there in the first avenger movie?\nA. 4\nB. 5\nC. 6\nD. 7\n",
  answer:"C"
}

questionTwo = {
  question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\nA. 2005\nB. 2008\nC. 2010\nD. 2012\n",
  answer: "B"
}

questionThree = {
  question: "What is Captain America’s shield made of?\nA. Adamantium\nB. Vibranium\nC. Promethium\nD. Carbonadium\n",
  answer: "B"
}

questionFour = {
  question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?\nA. H.O.M.E.R.\nB. J.A.R.V.I.S.\nC. A.L.F.R.E.D.\nD. M.A.R.V.I.N.\n",
  answer: "B"
}

questionFive = {
  question: "Who does the Mad Titan sacrifice to acquire the Soul Stone?\nA. Nebula\nB. Ebony Maw\nC. Cull Obsidian\nD. Gamora\n",
  answer: "D"
}

questionSix = {
  question: "What is the name of the little boy Tony befriends while stranded in the Iron Man 3?\nA. Harry\nB. Henry\nC. Harley\nD. Holden\n",
  answer: "B"
}

questionSeven = {
  question: "Who is killed by Loki in the Avengers?\nA. Maria Hill\nB. Nick Fury\nC. Agent Coulson\nD. Doctor Erik Selvig\n",
  answer: "C"
}

questionEight = {
  question: "What type of doctor is Stephen Strange?\nA. Neurosurgeon\nB. Cardiothoracic Surgeon\nC. Trauma Surgeon\nD. Plastic Surgeon\n",
  answer: "A"
}

questionNine = {
  question: "Who is Black Panther’s sister?\nA. Shuri\nB. Nakia\nC. Ramonda\nD. Okoye\n",
  answer: "A"
}

questionTen = {
  question: "Who cuts thanos' head off in Avengers Endgame?\nA. IronMan\nB. Thor\nC. Hulk\nD. Vision\n",
  answer: "B"
}

var quiz1 = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var quiz2 = [questionSix, questionSeven, questionEight, questionNine, questionTen]

var score = 0
function play(question, answer)
{
  var userAnswer = readlineSync.question("\n" + question)
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score ++;
    console.log("You are right!")
  }
  else{
    console.log("You are wrong")
  }
  console.log("Current score: ", score)
  console.log("_______ ____________ ________")
}

for(var i=0;i<quiz1.length;i++)
{
  play(quiz1[i].question, quiz1[i].answer)
}

if(score < 4) 
{
  console.log("\nYou don't seem like a marvel fan, your score is ", score)
} 
else 
{
  console.log("\nYou know your way around the MCU,\n Let's take you to level 2\n\n")
  for(var i=0;i<quiz2.length;i++)
  {
    play(quiz2[i].question, quiz2[i].answer)
  }
}
console.log("\nYour final score is " +  score + "\n\nThanks for playing!!");