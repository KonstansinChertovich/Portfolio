const dispensScroll = (animItemOffset, animItemHeight, initElementAnim) => () => {
    if(scrollY > animItemOffset - animItemHeight) {
        initElementAnim();
    }
};

export default dispensScroll;