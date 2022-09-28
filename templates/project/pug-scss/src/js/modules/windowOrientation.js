/**
 * 画面幅・高さによってランドスケープかポートレートかを判別する処理。
 */

export default () => {
  const event = 'onorientationchange' in window ? 'orientationchange' : 'resize';

  const orientationHandler = event => {
    setTimeout(() => {
      const w = parseInt(window.innerWidth);
      const h = parseInt(window.innerHeight);
      const target = document.getElementsByTagName('body')[0];
      if (w > h) {
        target.classList.add('landscape');
        target.classList.remove('portrait');
      } else {
        target.classList.remove('landscape');
        target.classList.add('portrait');
      }
    }, 200);
  };

  window.addEventListener(event, orientationHandler, false);
  orientationHandler();
};
