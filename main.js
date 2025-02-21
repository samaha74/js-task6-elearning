let name = JSON.parse(localStorage.getItem('name'));
if (name !== null) 
    document.getElementById('welcome').innerHTML = `Welcome ${name}!`;
else
    document.getElementById('welcome').innerHTML = `Welcome User!`;

let logout = document.getElementById('logout');
logout.addEventListener('click', function(){
    localStorage.removeItem('name');
    window.location.href = 'index.html';
});

let lessons = [];

if (localStorage.getItem('lessons') !== null){
    lessons = JSON.parse(localStorage.getItem('lessons'));
}
else{
    lessons = [{name: 'Math', grade: '9th', lessons: 12, price: 1000, isInrolled: false},
    {name: 'Science', grade: '10th', lessons: 10, price: 800, isInrolled: false},
    {name: 'English', grade: '11th', lessons: 15, price: 1200, isInrolled: false},
    {name: 'History', grade: '12th', lessons: 8, price: 600, isInrolled: false},
    {name: 'Geography', grade: '9th', lessons: 12, price: 1000, isInrolled: false},
    {name: 'Math', grade: '10th', lessons: 10, price: 800, isInrolled: false},
    {name: 'Science', grade: '11th', lessons: 15, price: 1200, isInrolled: false},
    {name: 'English', grade: '12th', lessons: 8, price: 600, isInrolled: false},
    {name: 'History', grade: '9th', lessons: 12, price: 1000, isInrolled: false},
    {name: 'Geography', grade: '10th', lessons: 10, price: 800, isInrolled: false},
    {name: 'Math', grade: '11th', lessons: 15, price: 1200, isInrolled: false},
    {name: 'Science', grade: '12th', lessons: 8, price: 600, isInrolled: false},
    {name: 'English', grade: '9th', lessons: 12, price: 1000, isInrolled: false},
    {name: 'History', grade: '10th', lessons: 10, price: 800, isInrolled: false},
    {name: 'Geography', grade: '11th', lessons: 15, price: 1200, isInrolled: false},];
}

localStorage.setItem('lessons', JSON.stringify(lessons));

let classes = document.getElementById('classes');


function goToPayment(i){
    localStorage.setItem('class', i);
    window.location.href = 'payment.html';
}
function deleLesson(i){
    lessons[i].isInrolled = false;
    localStorage.setItem('lessons', JSON.stringify(lessons));
    let inrolledbool = false;
    lessons.forEach(element => {
        if (element.isInrolled)
            inrolledbool = true;
    });    

    if (!inrolledbool){
        let inrolled = document.getElementById('inrolledClasses');
        let MyLessons = document.getElementById('MyLessons');
        inrolled.classList.add('d-none');
        MyLessons.classList.add('d-none');
    }
    initialDisplay();
}


function initialDisplay(){
    let lesson = '';
    let inrolledlessons = '';
    for (let i = 0; i < lessons.length ; i++) {
        let element = lessons[i % lessons.length];

        if (!element.isInrolled)
        {
            lesson += `<div class="col-md-3 mb-5">  
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <div class="tags d-flex ">  
            <p class="tag">${element.lessons}+ lessons</p>
            <p class="tag">${element.grade} grade</p>
            </div>
            <p class="card-text">${element.price} EGP</p>
            <a onclick="goToPayment(${i})" class="btn btn-primary">Go To Payment</a>
            </div>
            </div>
            </div>`;
        }
        else{
            let inrolled = document.getElementById('inrolledClasses');
            let MyLessons = document.getElementById('MyLessons');
            MyLessons.classList.remove('d-none');
            inrolled.classList.remove('d-none');

            inrolledlessons += `<div class="col-md-3 mb-5">  
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <div class="tags d-flex ">  
            <p class="tag">${element.lessons}+ lessons</p>
            <p class="tag">${element.grade} grade</p>
            </div>
            <a class="btn btn-success">Start</a>
            <a class="btn btn-danger" onclick="deleLesson(${i})">UnEnroll</a>
            </div>
            </div>
            </div>`;
        }
    }
    classes.innerHTML = lesson;
    inrolledClasses.innerHTML = inrolledlessons + `<hr>`;
}

initialDisplay();