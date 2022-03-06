document.getElementById('login-submit').addEventListener(
    'click', function(){
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
  
    // password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    if (userEmail == 'abc@def.com' &&  userPass == 'na'){
        window.location.href = 'banking.html';
        
    
    }
}
)