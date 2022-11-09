workMenu();
skils();
cardSkills()
experience();
portfolioLinkAnim();

function workMenu() {
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
}

function skils() {
    const scale = document.querySelectorAll('.technologies__scale-number');
    const scaleSpan = document.querySelectorAll('.technologies__scale span');
    const tehnologiesEnterest = document.querySelector('.technologies__interest');

    const animItemOffset = tehnologiesEnterest.getBoundingClientRect().top + scrollY;
    let showAnim = false;
    let firstLoading = true;

    window.addEventListener('scroll', animScrollEnterest)


    function initScale() {
        scale.forEach((item, i) => {
            const numScale = +item.dataset.scale;
            let numInit = 0;
    
            const interval = setInterval(() => {
                if(numInit === numScale) {
                    clearInterval(interval)
                }else{
                    numInit++
                    item.textContent = numInit + '%';
                    scaleSpan[i].style.width = numInit + '%';
                }
            }, 20)
        });
    }
    function animScrollEnterest() {
        const animItemHeight = tehnologiesEnterest.offsetHeight;

        if(scrollY > animItemOffset - (window.innerHeight - animItemHeight / 2) && !showAnim) {
            showAnim = true;
            tehnologiesEnterest.style.cssText = 'transform: translateY(0); opacity: 1;';
            if(firstLoading) {
                initScale();
                firstLoading = false;
            }
        } else if(scrollY < animItemOffset - (window.innerHeight - animItemHeight / 2) && showAnim) {
            showAnim = false;
            tehnologiesEnterest.style.cssText = 'transform: translateY(100); opacity: 0;';
        }
    }
}

function cardSkills() {
    const cards = document.querySelectorAll('.technologies__skills');
    const cardWrap = document.querySelector('.technologies__wrapper');
    const animItemHeight = cardWrap.offsetHeight;
    const animItemOffset = cardWrap.getBoundingClientRect().top + scrollY;
    let showAnim = false;

    window.addEventListener('scroll', scrollHandlerCard)

    function initCard() {
        cards.forEach((item, i) => {
            item.style.zIndex = cards.length - i;
            animCardShow(item, ++i);
        });
    }
    function animCardShow(card, time) {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform ='translateX(0)';
        }, (+`${time}000` / 5))
    }
    function animCardHide(card, time) {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform ='translateX(30%)';
        }, (+`${time}000` / 5))
    }
    function scrollHandlerCard() {
        if(scrollY > animItemOffset - (window.innerHeight - animItemHeight / 2) && !showAnim) {
            showAnim = true;
            initCard();
        } else if(scrollY < animItemOffset - (window.innerHeight - animItemHeight / 2) && showAnim) {
            showAnim = false;
            let time = 1;
            for(let i = cards.length - 1; i >= 0; i--) {
                animCardHide(cards[i], time);
                time++;
            }
        }
    }
}

function experience() {
    const experienceWrapper = document.querySelector('.experience__wrapper');
    const expList = document.querySelectorAll('.experience__list');
    const expListHeader = document.querySelectorAll('.experience__list-header');
    const expListIcon = document.querySelectorAll('.experience__list-icon');
    const expListSubheader = document.querySelectorAll('.experience__list-subheader');
    const expListLocation = document.querySelectorAll('.experience__list-locations');
    const expListText = document.querySelectorAll('.experience__list-text');
    
    const animItemHeight = experienceWrapper.offsetHeight;
    const animItemOffset = experienceWrapper.getBoundingClientRect().top + scrollY;
    let showAnim = false;

    window.addEventListener('scroll', scrollHandlerExperience);

    function processingClasses(element, time, clas, action='add', ...additionalClass) {
        for(let i = 0; i < element.length; i++) {
            setTimeout(() => {
                switch(action) {
                    case 'add':
                        element[i].classList.add(clas, ...additionalClass);
                        break;
                    case 'remove':
                        element[i].classList.remove(clas, ...additionalClass);
                        break;
                    default:
                        return;
                }
            }, time);
        }
    }
    function processingAddClasses() {
        showAnim = true;
        processingClasses(expListHeader, 500, 'experience__list-header-active');
        processingClasses(expListHeader, 700, 'experience__list-header-active-before');
        processingClasses(expList, 700, 'experience__list-active');
        processingClasses(expListIcon, 900, 'experience__list-icon-active');
        processingClasses(expListSubheader, 1000, 'experience__list-subheader-active');
        processingClasses(expListLocation, 1000, 'experience__list-locations-active');
        processingClasses(expListText, 1300, 'experience__list-text-active');
    }
    function processingClearClasses() {
        showAnim = false;
        processingClasses(expListText, 500, 'experience__list-text-active', 'remove');
        processingClasses(expListLocation, 700, 'experience__list-locations-active', 'remove');
        processingClasses(expListSubheader, 700, 'experience__list-subheader-active', 'remove');
        processingClasses(expListIcon, 900, 'experience__list-icon-active', 'remove');
        processingClasses(expList, 1000, 'experience__list-active', 'remove');
        processingClasses(expListHeader, 1000, 'experience__list-header-active-before', 'remove');
        processingClasses(expListHeader, 1300, 'experience__list-header-active', 'remove');
    }
    function scrollHandlerExperience() {
        if(scrollY > animItemOffset - animItemHeight && !showAnim) {
            processingAddClasses();
        } else if(scrollY < animItemOffset - animItemHeight - (animItemHeight / 2) && showAnim) {
            processingClearClasses();
        }
    }
}

function portfolioLinkAnim() {
    const portfolioWrapper = document.querySelector('.portfolio__wrapper');
    const porfolioLink = document.querySelectorAll('.portfolio__link');
    const animItemHeight = portfolioWrapper.offsetHeight;
    const animItemOffset = portfolioWrapper.getBoundingClientRect().top + scrollY;

    window.addEventListener('scroll', scrollHendlerPortfolio);

    function initShowPortfolio() {
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
    function scrollHendlerPortfolio() {
        if(scrollY > animItemOffset - animItemHeight) {
            initShowPortfolio();
        }
    };
}