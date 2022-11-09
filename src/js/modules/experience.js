import dispensScroll from "./dispensScroll";

const experience = () => {
    const experienceWrapper = document.querySelector('.experience__wrapper');
    const expList = document.querySelectorAll('.experience__list');
    const expListHeader = document.querySelectorAll('.experience__list-header');
    const expListIcon = document.querySelectorAll('.experience__list-icon');
    const expListSubheader = document.querySelectorAll('.experience__list-subheader');
    const expListLocation = document.querySelectorAll('.experience__list-locations');
    const expListText = document.querySelectorAll('.experience__list-text');

    const animItemHeight = experienceWrapper.offsetHeight;
    const animItemOffset = experienceWrapper.getBoundingClientRect().top + scrollY;

    const initAnimation = dispensScroll(animItemOffset, animItemHeight, processingAddClasses);
    window.addEventListener('scroll', initAnimation);

    function processingClasses(element, time, clas, ...additionalClass) {
        for(let i = 0; i < element.length; i++) {
            setTimeout(() => {
                element[i].classList.add(clas, ...additionalClass);
            }, time);
        }
    }
    function processingAddClasses() {
        removeEventListener('scroll', initAnimation);
        processingClasses(expListHeader, 500, 'experience__list-header-active');
        processingClasses(expListHeader, 700, 'experience__list-header-active-before');
        processingClasses(expList, 700, 'experience__list-active');
        processingClasses(expListIcon, 900, 'experience__list-icon-active');
        processingClasses(expListSubheader, 1000, 'experience__list-subheader-active');
        processingClasses(expListLocation, 1000, 'experience__list-locations-active');
        processingClasses(expListText, 1300, 'experience__list-text-active');
    }
};

export default experience;