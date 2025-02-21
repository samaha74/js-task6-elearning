let lessons = JSON.parse(localStorage.getItem('lessons'));
let index = JSON.parse(localStorage.getItem('class'));
let btn = document.querySelector('.btn');


btn.addEventListener('click', function() {
  if(validateCard()){ 
    lessons[index].isInrolled = true;
    localStorage.setItem('lessons', JSON.stringify(lessons));
    window.location.href = 'main.html';
  }
  else{
    alert('Please fill in all fields correctly');
  }
});

function validateCard(){
  let cardNumber = document.getElementById('cardNumber').value;
  let cardName = document.getElementById('cardName').value;
  let cardDate = document.getElementById('cardDate').value;
  let cardCvv = document.getElementById('cardCvv').value;

  if(cardNumber.length === 16 && cardName.length > 0 && cardDate.length === 5 && cardCvv.length === 3 && cardDate.includes('/')){
    return true;
  }else{
    return false;
  }
}