import smoothScroll from './smoothScroll';

/*
引数に指定した要素までの縦にスムーススクロールする処理
------------------------------------------------
targetEl(String)  -> ID指定
triggerEl(String)  -> ID指定
------------------------------------------------
 */
export default (triggerEl, targetEl) => {
    const event = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    const scrollBtn = document.getElementById(triggerEl);
    let target = 0;

    target = document.getElementById(targetEl).getBoundingClientRect().top;

    window.addEventListener(event, () => {
        target = document.getElementById(targetEl).getBoundingClientRect().top;
    });
    scrollBtn.addEventListener('click', function () {
        smoothScroll(target, 300);
    });
};
