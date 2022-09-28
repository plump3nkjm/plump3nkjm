
export default () => {
    const event = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    const heightChange = () => {

        setTimeout(function () {
            document.querySelector('main').style.height = `${window.innerHeight}px`;
            }
            , 110)
    };

    window.addEventListener(event, heightChange, false);
    heightChange();

}
