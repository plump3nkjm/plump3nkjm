export default() => {

    window.onload = () => {
        const ua = navigator.userAgent;
        const body = document.body;

        if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0) && (ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
            body.classList.add('sp');
        }
        else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
            body.classList.add('tab');
        }
        else {
            body.classList.add('pc');
        }
    }
}
