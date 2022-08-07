const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audioCorrect = document.getElementById("audioCorrect");
const audioWrong = document.getElementById("audioWrong");  
let answer = 0;



function generateEquation(){ 
  document.querySelector("#result").textContent = "?"
  let num1 = Math.floor(Math.random() * 20),
      num2 = Math.floor(Math.random() * 20),
      dummyAnswer1 = Math.floor(Math.random() * 20),
      dummyAnswer2 = Math.floor(Math.random() * 20),
      allAnswers = [],
      switchAnswers = [];

  if(num1 > num2){
    answer = num1 - num2;
    document.getElementById("num1").innerHTML = num1; 
    document.getElementById("num2").innerHTML = num2;
  }
  else{
    answer = num2 - num1;
    document.getElementById("num1").innerHTML = num2; 
    document.getElementById("num2").innerHTML = num1;
  }

  if (answer > 20) {
    return generateEquation();
  }
  if (
    answer == dummyAnswer1 ||
    answer == dummyAnswer2 ||
    dummyAnswer1 == dummyAnswer2
  ) {
    return generateEquation();
  }
  
  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}
  
  option1.addEventListener("click", () => {
    if(option1.innerHTML == answer){
      audioCorrect.play(), setTimeout(generateEquation, 1500);
      document.querySelector("#result").textContent = answer
    }
    else{
      audioWrong.play();
      document.querySelector("#result").textContent = "?"
    }
});

option2.addEventListener("click", () => {
    if(option2.innerHTML == answer){
      audioCorrect.play(), setTimeout(generateEquation, 1500);
      document.querySelector("#result").textContent = answer
    } 
    else{
      audioWrong.play();
      document.querySelector("#result").textContent = "?"
    }
});

option3.addEventListener("click", () => {
    if(option3.innerHTML == answer){
      audioCorrect.play(), setTimeout(generateEquation, 1500);
      document.querySelector("#result").textContent = answer
    }
    else{
      audioWrong.play();
      document.querySelector("#result").textContent = "?"
    }
});

generateEquation()

