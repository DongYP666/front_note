/**
 * Created by dongyp on 2017/12/23.
 */

// --------- jQuery ---------

$('#dolphin').fadeIn();

// --------- 原生JS实现 ---------

function fadeIn(el) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

var moon = document.getElementById('moon');
fadeIn(moon);

// --------- 注释 ---------

// window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器调用指定的函数在下一次重绘之前更新动画

// setTimeout() 设置定时器
// setTimeout(tick, 16) 16毫秒之后执行 tick