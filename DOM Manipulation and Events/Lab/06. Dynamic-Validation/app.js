function validate() {

    const emailText = document.getElementById('email');
    emailText.addEventListener('change', checkEmail);

    let reg = /^[a-z]+@[a-z]+\.[a-z]+$/g;

    function checkEmail(e) {
        
        if (!reg.test(e.currentTarget.value)) {
            e.target.className = 'error';
        } else {
            e.target.className = '';
        }

    }

}