/**
 * クラスを付け替える関数
 * @param target クラスを付け替える対象
 * @param trigger この関数を動かすトリガー
 * @param className 付け替えるクラス名
 */
export default (target,trigger,className) => {

    const targetEl = document.getElementById(target) || document.getElementsByClassName(target)[0];
    const triggerEl = document.getElementById(trigger) || document.getElementsByClassName(trigger)[0];

    if (!targetEl || !targetEl) return;

    triggerEl.addEventListener('click', () => {
        targetEl.classList.toggle(className);
    });
};
