/**
 * Created by dongyp on 2017/12/23.
 */

// --------- jQuery ---------

$('#addClass1').addClass('addClass');

// --------- 原生JS实现 ---------

var addClass2 = document.getElementById('addClass2');
if (addClass2.classList){
    addClass2.classList.add('addClass');
} else {
    addClass2.className += ' ' + 'addClass';
}
