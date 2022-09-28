/* install command
 npm install gsap scrollmagic
 */
import {TweenMax, TimelineMax} from "gsap";
import ScrollMagic from "scrollmagic";
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'; // debug
/**
------------------------------------------------------------
todo TweenMax param
@string  type ...customかnormalでアニメーションのプロパティの省略を選ぶ（必須）
@string  orientation ...どのアニメーションタイプを使うか
@string  target ... アニメーションをかける要素（必須）
@bool    timeLine ...指定した要素の子要素に同じアニメーションをかけるかどうか
@string  ease ... easingを指定
@int     x ...x軸の移動距離
@int     y ...y軸の移動距離
@int     duration ...アニメーションにどれだけ時間をかけるか:ミリ秒ではなく秒指定
@int     delay ...アニメーションをどれだけ遅延させるか :ミリ秒ではなく秒指定
todo ScrollMagic param
@nodeList trigger ...アニメーション発火要素(必須)
@string  hook...アニメーション発火タイミング

todo 注意事項
- target・triggerはタグ指定よりクラス指定の方が安定するかも
- stagger系のtargetの指定はIDで指定するように（findChildElに影響するので）
------------------------------------------------------------
fixme ex) custom
<div class="translate" data-anim='{"type":"custom","target":"#article .target1","orientation":"to","trigger":"#article .target1","opacity":0,"duration":1,"ease":"Power0.easeNone","hook":"onCenter"}'>
fixme ex) normal
<div class="translate" data-anim='{"type":"normal","target":"#article .target2","trigger":"#article .target2"}'>
 ------------------------------------------------------------
 */

export default () => {

    const controller = new ScrollMagic.Controller();
    const translates = document.getElementsByClassName('translate');
    // デフォルトアニメーションプロパティ typeがnormalの時に使用
    const defaultAnim = {
        opacity: 0,
        duration: 1,
        delay: 0,
        x: 0,
        y: 0,
        ease: Power0.easeNone,
        hook: 'onEnter',
    };

    /**
     timelineを生成
     @int opacity duration delay x y interval(stagger系のみ)
     @string target
     @method easing
     */
    const createTimeLineFrom = (opacity, duration, delay, x, y, ease, target) => {
        let timeLine = new TimelineMax();
        return timeLine.from(target, duration, {
            opacity: opacity,
            delay: delay,
            x: x,
            y: y,
            ease: ease,
        });

    };
    const createTimeLineTo = (opacity, duration, delay, x, y, ease, target) => {
        let timeLine = new TimelineMax();
        return timeLine.to(target, duration, {
            opacity: opacity,
            delay: delay,
            x: x,
            y: y,
            ease: ease,
        });

    };
    const createTimeLineStaggerFrom = (opacity, duration, delay, x, y, ease, target,interval) => {
        let timeLine = new TimelineMax();
        return timeLine.staggerFrom(findChildEl(target), duration, {
            opacity: opacity,
            delay: delay,
            x: x,
            y: y,
            ease: ease,
        },interval);

    };
    const createTimeLineStaggerTo = (opacity, duration, delay, x, y, ease, target,interval) => {
        let timeLine = new TimelineMax();
        return timeLine.staggerTo(target, duration, {
            opacity: opacity,
            delay: delay,
            x: x,
            y: y,
            ease: ease,
        },interval);

    };

    /**targetに指定されたIDを元に子を返す
    @string parentText
     */
    const findChildEl = (parentText) => {
        let id = parentText.split('#')[1];
       return document.getElementById(id).children;
    };

    /**
     sceneを生成
     @string target
     @int/string hook
     @variable tween
     */
    const sceneCreate = (target, hook, tween) => {
        new ScrollMagic.Scene({
            triggerElement: target,
            triggerHook: hook,
        })
            .setTween(tween)
            .addTo(controller);
    };

    // 以下、主処理
    for (let i = 0; i < translates.length; i++) {
        // init
        let x = defaultAnim.x, y = defaultAnim.y, delay = defaultAnim.delay;
        let animPara = (translates[i].dataset.anim === '') ? null : translates[i].dataset.anim;
        let animJson;
        // translateクラスが付いているのにdata-animが設定されていないものを弾く
        if (animPara === null) {
            continue;
        } else {
            animJson = JSON.parse(animPara);
            x = !animJson.x ? x : animJson.x / window.innerWidth * 100;
            y = !animJson.y ? y : animJson.y / window.innerWidth * 100;
            delay = !animJson.delay ? delay : animJson.delay;
        }

        switch(animJson.type){
            case 'normal':
                sceneCreate(animJson.trigger,defaultAnim.hook,createTimeLineFrom(defaultAnim.opacity, defaultAnim.duration, defaultAnim.delay, defaultAnim.x, defaultAnim.y, defaultAnim.ease, animJson.target));
                break;
            case 'custom':
                switch(animJson.orientation){
                    case 'from':
                        sceneCreate(animJson.trigger,animJson.hook,createTimeLineFrom(animJson.opacity, animJson.duration, animJson.delay, animJson.x, animJson.y, animJson.ease, animJson.target));
                        break;
                    case 'to':
                        sceneCreate(animJson.trigger,animJson.hook,createTimeLineTo(animJson.opacity, animJson.duration, animJson.delay, animJson.x, animJson.y, animJson.ease, animJson.target));
                        break;
                    case 'staggerFrom':
                        sceneCreate(animJson.trigger,animJson.hook,createTimeLineStaggerFrom(animJson.opacity, animJson.duration, animJson.delay, animJson.x, animJson.y, animJson.ease, animJson.target,0.4));
                        break;
                    case 'staggerTo':
                        sceneCreate(animJson.trigger,animJson.hook,createTimeLineStaggerTo(animJson.opacity, animJson.duration, animJson.delay, animJson.x, animJson.y, animJson.ease, animJson.target,0.4));
                        break;
                }
        }

    }

}
