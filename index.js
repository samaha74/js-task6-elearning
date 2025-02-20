localStorage.clear();
const name = document.getElementById('name');
const password = document.getElementById('password');
const LoginBtn = document.getElementById('login');

function validateLogin() {
    if (name.value === '' || password.value === '') {
        alert('Name and password fields are required');
        return false;
    }
    if (name.value.length < 3) {
        alert('Name must be at least 3 characters long');
        return false;
    }
    if(name.value.length > 20)
        {
            alert('Name must be less than 20 characters long');
            return false;
        }
        if (password.value.length < 6) {
            alert('Password must be at least 6 characters long');
            return false;
        }
        if (!/[!@#$%^&*()\-_+=\[\]{}|:;'"<>,.?/`~]/.test(password.value))
            {
                alert('Password must contain special characters');
                return false;
            }
            if (!/\d/.test(password.value))
                {
                    alert('Password must contain numbers');
                    return false;
                }
                localStorage.setItem('name', JSON.stringify(name.value));
                return true;
            }
            
            LoginBtn.addEventListener('click', ()=>{
                if(validateLogin()){
                    location.href = './main.html';
                }
});