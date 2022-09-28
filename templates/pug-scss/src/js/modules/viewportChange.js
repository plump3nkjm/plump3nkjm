/**
 * ビューポートを変更する処理
 * 想定外のデザイン指定が来た時に使う。
 * ex)750pxからはPCデザインだが、SPのランドスケープはSP表示にしたいとき
 */
export default () => {
    const event = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    const viewportChange = () => {

        setTimeout(function () {
                if (document.getElementsByTagName('body')[0].classList.contains('landscape') && document.getElementsByTagName('body')[0].classList.contains('sp')) {
                    document.querySelector("meta[name='viewport']").setAttribute("content", 'width=768,user-scalable=no');
                } else {
                    document.querySelector("meta[name='viewport']").setAttribute("content", 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no');
                }
            }
            , 110)
    };

    window.addEventListener(event, viewportChange, false);
    viewportChange();

}
