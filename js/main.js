

// active navbar 

let nav = document.querySelector('.navigation-wrap');

window.onscroll = function (params) {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');

    }
}





//nav hide 

let navbar = document.querySelectorAll('.nav-link');
let navColaps = document.querySelector('.navbar-collapse');

navbar.forEach(e =>{
    e.addEventListener('click', function (params) {
        navColaps.classList.remove('show')
    })
})










