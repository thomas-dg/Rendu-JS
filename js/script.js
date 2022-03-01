"use strict";

// Swiper

var swiper = new Swiper(".mySwiper", {
cssMode: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
},
mousewheel: true,
keyboard: true,
});

// Tabs

let axeName = document.querySelectorAll('.tab')
console.log(axeName)


axeName.forEach((i) => {
    console.log(i);
    i.addEventListener('click',function(){
        axeName.forEach((i) => {
            i.classList.remove('tab-active');
        })
        let content = document.querySelectorAll('.content')
        content.forEach((i) =>{
            i.classList.remove('active');
        })
        this.classList.add('tab-active')
        if(this.classList.contains('tab-DevWeb')){
            let dw = document.querySelector('.DevWeb')
            dw.classList.add('active');
        }
        if(this.classList.contains('tab-CD')){
            let cd = document.querySelector('.CD')
            cd.classList.add('active');
        }
        if(this.classList.contains('tab-3D')){
            let ad = document.querySelector('.anim');
            ad.classList.add('active');
        }
        if(this.classList.contains('tab-cdeb')){
            let cdeb = document.querySelector('.cdeb');
            cdeb.classList.add('active');
        }
        if(this.classList.contains('tab-JV')){
            let jv = document.querySelector('.JV');
            jv.classList.add('active');
        }
    })
});

// Form

let submit = document.querySelector('.submitForm');
// console.log(submit);

let form = document.querySelector('form');
// console.log(form);

let userInfo = document.querySelectorAll('.infoUser');

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let mail = document.querySelector('#mail');
let containFirst = document.querySelector('.firstName');
let containLast = document.querySelector('.lastName');
let containmail = document.querySelector('.mail');

form.addEventListener('submit',function(e){
    e.preventDefault();
    // J'ai utilisé un compteur pour vérifier les conditions et afficher le texte à la fin
    let compt = 0;
    if(firstName.value.length == ''){
        // console.log('error');
        compt += 1;
        containFirst.classList.add('error');
    }
    if(lastName.value.length == ''){
        compt += 1;
        containLast.classList.add('error');
    }
    if(mail.value.length == ''){
        compt += 1;
        containmail.classList.add('error');
    }
    let axeChoice = document.querySelector('#axeChoice').options[document.querySelector('#axeChoice').selectedIndex].value;
    let title = document.querySelector('.titleAxeChoice');
    if(axeChoice == 'none'){
        compt += 1;
        title.classList.add('error');
        console.log("error")
    }

    let success = document.querySelector('.success');
    console.log(compt);
    if(compt == 0){
        success.innerHTML = 'Vous êtes inscris pour notre prochaine JPO';
    }
});

// Dark Mode

let body = document.querySelector('body');
let darkMode = document.querySelector('.themeRight');

darkMode.addEventListener('click',function(){
    body.classList.toggle('darkMode')
})
