import dispensScroll from "./dispensScroll";

const cardSkills = () => {
    const cards = document.querySelectorAll('.technologies__skills');
    const cardWrap = document.querySelector('.technologies__wrapper');
    const animItemHeight = cardWrap.offsetHeight;
    const animItemOffset = cardWrap.getBoundingClientRect().top + scrollY;

    const initAnimation = dispensScroll(animItemOffset, animItemHeight, initCard);
    window.addEventListener('scroll', initAnimation)

    function initCard() {
        cards.forEach((item, i) => {
            item.style.zIndex = cards.length - i;
            animCardShow(item, ++i);
        });
        removeEventListener('scroll', initAnimation);
    }
    function animCardShow(card, time) {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform ='translateX(0)';
        }, (+`${time}000` / 5))
    }
};

export default cardSkills;