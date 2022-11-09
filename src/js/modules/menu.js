const menu = () => {
    const promo = document.querySelector('.promo'),
    hamburger = promo.querySelector('.hamburger'),
    menu = promo.querySelector('.menu'),
    links = menu.querySelectorAll('.menu__link'),
    closee = menu.querySelector('.menu__close'),
    technologies = document.querySelectorAll('.technologies__scale-number'),
    technologiesScale = document.querySelectorAll('.technologies__scale span');


    hamburger.addEventListener('click', openMenu);
    closee.addEventListener('click', closeMenu);
    links.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
        });
    }); 
    technologiesScale.forEach((item, i) => item.style.width = technologies[i].innerHTML);

    function openMenu() {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menu.classList.remove('active');
        document.body.style.overflowY = 'scroll';
    }
};

export default menu;