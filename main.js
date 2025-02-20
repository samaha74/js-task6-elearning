let name = JSON.parse(localStorage.getItem('name'));

document.getElementById('welcome').innerHTML = `Welcome ${name}!`;


let classes = document.getElementById('classes');


function goToPayment(i){
    localStorage.setItem('class', i);
    window.location.href = 'payment.html';
}

function initialDisplay(){
    let lesson = '';
    for (let i = 0; i < 1000; i++) {
        lesson += `<div class="col-md-3 mb-5">  
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <div class="tags d-flex ">  
        <p class="tag">12+ lessons</p>
        <p class="tag">science</p>
        <p class="tag">9th Grade</p>
        </div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a onclick="goToPayment(${i})" class="btn btn-primary">Go To Payment</a>
        </div>
        </div>
        </div>`;
    }
    classes.innerHTML = lesson;
}

initialDisplay();