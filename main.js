const navigation = document.querySelector('.header .nav_ul');
const toggle_btn = document.querySelector('.Hamburger_Menu');

toggle_btn.addEventListener('click', ()=> {
    if(navigation.classList.contains('active')) {
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
});