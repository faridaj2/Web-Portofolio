let menuOpen = document.querySelector('.bx');
let menuToggle = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function(){
    if(menuOpen.classList.value =='bx bx-x'){
        menuOpen.classList.add('bxs-grid-alt');
        menuOpen.classList.remove('bx-x');
    }else{
        menuOpen.classList.remove('bxs-grid-alt');
        menuOpen.classList.add('bx-x');
    }

    menuToggle.classList.toggle('active');
    
});