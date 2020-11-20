import _ from "lodash";
import print from "./print";

function component () {
    let ele = document.createElement('div');
    const btn = document.createElement('button');
    ele.innerHTML = _.join(['Hello', 'webpack', '!'], ' ')

    btn.innerHTML = '我是一个button';
    btn.onclick = print;

    ele.appendChild(btn);

    return ele;
}

document.querySelector('body').appendChild(component())