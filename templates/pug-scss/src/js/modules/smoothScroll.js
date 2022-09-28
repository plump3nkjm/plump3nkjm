//スムーススクロール posは基本0、durationはスクロールの速さ

export default (pos, duration) => {
  const begin = new Date();
  const offset = window.pageYOffset;
  const timer = setInterval(() => {
    let current = new Date() - begin;

    if (current > duration) {
      clearInterval(timer);
      current = duration;
    }

    window.scrollTo(0, pos - (pos - offset) * (1 - current / duration));
  }, 10)
};
