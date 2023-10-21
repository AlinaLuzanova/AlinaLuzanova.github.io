
let users = new Map()
users.set('vasya','flower')
users.set('bob','car')

let obj = {};
users.forEach((value, key) => {
    obj[key] = value;
});



localStorage.setItem('users', JSON.stringify(obj));

let userParsed = JSON.parse(localStorage.getItem('users'));


//init

function initUp() {

    document.querySelector('#initSignUp').addEventListener('click', function () {

        let initiation = document.querySelector('#initWindow');
        initiation.style.display = 'none';

        let singing = document.querySelector('#signUp');
        singing.style.display = 'flex';

    })
}
function initIn(){
    document.querySelector('#initSignIn').addEventListener('click', function(){

        let initiation = document.querySelector('#initWindow');
        initiation.style.display = 'none';

        let singing = document.querySelector('#signIn');
        singing.style.display = 'flex';

    })


}


//sign up

function signUp(){
    let logInp = document.querySelector('#signUp > .log').value;
    let passInp = document.querySelector('#signUp > .pass').value;

    let btn = document.querySelector('#signUp > button')


    users.set(logInp,passInp);

    users.forEach((value, key) => {
        obj[key] = value;
    });
    localStorage.setItem('users', JSON.stringify(obj));

    btn.addEventListener('click', function(){

        let signUp = document.querySelector('#signUp');
        signUp.style.display = 'none';

        let signIn = document.querySelector('#signIn');
        signIn.style.display = 'flex';
    })
}


//sign in



function signIn() {
    let logInp = document.querySelector('#signIn > .log').value;
    let passInp = document.querySelector('#signIn > .pass').value;
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let reg = document.querySelector('.login');
    let btn = document.querySelector('button')


    for (let i = 0; i < Object.keys(userParsed).length; i++) {

        if (users.has(logInp)) {
            console.log('succes')
            if(users.get(logInp)==passInp){
                console.log('logged')
                header.style.opacity = '100%';
                main.style.opacity = '100%';
                reg.style.display = 'none'

            } else{
                console.log('wrong password')
            }

            alert('Successful login!')
        }
        else {
            /*console.log(logInp)
            console.log(userParsed[Object.keys(userParsed)[i]].login)
            console.log(passInp)
            console.log(userParsed[Object.keys(userParsed)[i]].password)


             */
            console.log('no such user')
        }
    }
}


function showRegister(){
    document.querySelector('.account > img').addEventListener('click',function(){
        let header = document.querySelector('header');
        let main = document.querySelector('main');
        let reg = document.querySelector('.login');
        header.style.opacity = '40%';
        main.style.opacity = '40%';
        reg.style.display = 'flex'
    })
}


function slider(){
    document.querySelector('.imagePlaceholderParent > .arrow').addEventListener('click',function(){
        let img1 = document.querySelector('#img1')
        img1.style.display = 'none'
        let img4 = document.querySelector('#img4')
        img4.style.display = 'block'
    })
    document.querySelector('.recPlaceholderParent > .arrow').addEventListener('click',function(){
        let recs = document.querySelectorAll('.recPlaceholderChild')
        for (let i = 0; i<recs.length; i++){
            recs[i].style.display = 'none'
            recs[recs.length-1].style.display = 'block'
            recs[recs.length-2].style.display = 'block'
            recs[recs.length-3].style.display = 'block'
        }



    })
}









