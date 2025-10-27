
const userAnswers = {};

document.querySelectorAll('.question-block').forEach((block, index) => {
  block.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', () => {

      block.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));


      button.classList.add('selected');


      userAnswers[`q${index+1}`] = button.dataset.answer;
    });
  });
});


function displayResult() {

  const counts = {};
  Object.values(userAnswers).forEach(a => {
    counts[a] = (counts[a] || 0) + 1;
  });


  let maxCount = 0;
  let result = '';
  for (let key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      result = key;
    }
  }


  const resultMap = {
    A: 'You are a Labrador!',
    B: 'You are a Golden Retriever!',
    C: 'You are a Bulldog!',
    D: 'You are a Husky!'
  };


  document.getElementById('result-text').textContent = resultMap[result] || 'Please answer all questions.';
  document.getElementById('result-container').style.display = 'block';
}


document.getElementById('show-result').addEventListener('click', displayResult);
