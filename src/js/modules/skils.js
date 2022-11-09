const skils = () => {
    const scale = document.querySelectorAll('.technologies__scale-number');
    const scaleSpan = document.querySelectorAll('.technologies__scale span');
    const tehnologiesEnterest = document.querySelector('.technologies__interest');

    const animItemOffset = tehnologiesEnterest.getBoundingClientRect().top + scrollY;
    const animItemHeight = tehnologiesEnterest.offsetHeight;

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
            }, 20);
        });
    }
    function animScrollEnterest() {

        if(scrollY > animItemOffset - animItemHeight * 4) {
            removeEventListener('scroll', animScrollEnterest);
            tehnologiesEnterest.style.cssText = 'transform: translateY(0); opacity: 1;';
            initScale();
        }
    }
};

export default skils;