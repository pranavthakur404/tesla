let title = document.getElementById('title');
let para = document.getElementById('main-para');
let mainBtn = document.getElementById('main-btn');

window.addEventListener('scroll', function () {


    if(window.pageYOffset<50){
        title.style.transform='scale(1)';
        title.innerHTML='Model S'
    }if (window.pageYOffset > 50) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 400) {
        title.style.transform="scale(1)";
        title.innerHTML='Model Y'
    }if (window.pageYOffset > 550) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 1000) {
        title.style.transform="scale(1)";
        title.innerHTML='Model 3'
    }if (window.pageYOffset > 1150) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 1550) {
        title.style.transform="scale(1)";
        title.innerHTML='Model X'
    }if (window.pageYOffset > 1700) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 2150) {
        title.style.transform="scale(1)";
        title.innerHTML='Solar Panels'
    }if (window.pageYOffset > 2300) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 2750) {
        title.style.transform="scale(1)";
        title.innerHTML='Solar Roof';
    }if (window.pageYOffset > 3000) {
        title.style.transform="scale(0)";
    }if (window.pageYOffset > 3500) {
        title.style.transform="scale(1)";
        title.innerHTML='Accessories'
    }

})