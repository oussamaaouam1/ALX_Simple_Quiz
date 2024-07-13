function checkAnswer(){
  let correctAnswer = "4"
  var selectedAnswer = document.querySelectorAll('input[name="quiz"]')
  selectedAnswer.forEach(inp=>{
    if(inp.checked ===true){
      userAnswer = inp.value ;
    }
  })
  if(userAnswer === correctAnswer){
    document.getElementById("feedback").textContent ="Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
  
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);