function checkAnswers() {
  var quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='programmer']:checked").value
  if (questionOneAnswer == "broncos") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore
  }
  var questionTwoAnswer = document.querySelector("input[name='company']:checked").value
  if (questionTwoAnswer == "cavaliers") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionThreeAnswer = document.querySelector("input[name='league']:checked").value
  if (questionThreeAnswer == "realmadrid") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionFourAnswer = document.querySelector("input[name='ballon']:checked").value
  if (questionFourAnswer == "ronaldo") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionFiveAnswer = document.querySelector("input[name='world']:checked").value
  if (questionFiveAnswer == "germany") {
    quizScore = quizScore + 1
  }
  var questionSixAnswer = document.querySelector("input[name='sanchez']:checked").value
  if (questionSixAnswer == "chile") {
    quizScore = quizScore + 1
  }
   var questionSevenAnswer = document.querySelector("input[name='wenger']:checked").value
  if (questionSevenAnswer == "arsenal") {
    quizScore = quizScore + 1
  }
     var questionEightAnswer = document.querySelector("input[name='kobe']:checked").value
  if (questionEightAnswer == "5") {
    quizScore = quizScore + 1
  }
   var questionNineAnswer = document.querySelector("input[name='bulls']:checked").value
  if (questionNineAnswer == "6") {
    quizScore = quizScore + 1
  }
   var questionTenAnswer = document.querySelector("input[name='pats']:checked").value
  if (questionTenAnswer == "4") {
    quizScore = quizScore + 1
  }
  alert("Your score is...")
  alert(quizScore)
}
