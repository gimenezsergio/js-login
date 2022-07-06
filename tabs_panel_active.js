let selectedLogin = function name(params) {
    document.querySelector('#signupTab').classList.remove('active')
    document.querySelector('#loginTab').classList.add('active')

    document.querySelector('#signup').setAttribute('style','display:none')
    document.querySelector('#login').setAttribute('style','display:block')
}

let selectedSignup = function name(params) {
    document.querySelector('#signupTab').classList.add('active')
    document.querySelector('#loginTab').classList.remove('active')

    document.querySelector('#signup').setAttribute('style','display:block')
    document.querySelector('#login').setAttribute('style','display:none')
}


