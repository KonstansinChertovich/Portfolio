import dispensScroll from "./dispensScroll";

const portfolioLinkAnim = () => {
    const portfolioWrapper = document.querySelector('.portfolio__wrapper');
    const porfolioLink = document.querySelectorAll('.portfolio__link');
    const animItemHeight = portfolioWrapper.offsetHeight;
    const animItemOffset = portfolioWrapper.getBoundingClientRect().top + scrollY;

    const initAnimation = dispensScroll(animItemOffset, animItemHeight, initShowPortfolio);
    window.addEventListener('scroll', initAnimation);

    function initShowPortfolio() {
        removeEventListener('scroll', initAnimation);
        let decr = porfolioLink.length / 2 - 1;
        let time = 500;
        for(let inc = porfolioLink.length / 2; inc < porfolioLink.length; inc++) {
            setTimeout(() => {
                porfolioLink[inc].classList.add('portfolio__link-active');
            }, time);
            time+= 200;
            setTimeout(() => {
                porfolioLink[decr].classList.add('portfolio__link-active');
                decr--;    
            }, time);
        };
    };
};

export default portfolioLinkAnim;