//tomar los datos de resgitros
//validacion: chequear datos obligatorios
//dejarnos en la pagina de login


let signup = function signup(params) {
    let firs_name = document.querySelector('#first_name_signup').value
    let last_name = document.querySelector('#last_name_signup').value
    let email = document.querySelector('#email_signup').value
    let password = document.querySelector('#password_signup').value

    console.log(firs_name, last_name, email, password)
    selectedLogin()
}


let login = function login(params) {
    let email_resgistrado = document.querySelector('#email_signup').value
    let password_resgistrado = document.querySelector('#password_signup').value
    let email_login = document.querySelector('#email_login').value
    let password_login = document.querySelector('#password_login').value

    console.log(email_resgistrado, password_resgistrado, email_login, password_login)


    //1. If anidado
    if (email_login == email_resgistrado) {
        //el email es igual
        console.log('el email es igual')
        if (password_login == password_resgistrado) {
            console.log('La clave es igual')
        } else {
            console.log('La clave es distinta')
        }
    }else{
        //el email es distinto
        console.log('El email es distinto')
        //Aca va el mensaje al usuario para que no ingrese bien los datos
    }


    // 2. Un solo if
    if (email_login == email_resgistrado && password_login == password_resgistrado) {
        console.log('Ingresaste')
    } else {
        console.log('Intente nuevamente')
    }

    
}