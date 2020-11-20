// import _ from "lodash";
import './index.css'
import img from './img.png';

function component () {
    let ele = document.createElement('div');
    ele.innerHTML = ['Hello', 'webpack', '1.0.3', '!'].join(' ')
    // ele.innerHTML = _.join(['Hello', 'webpack', '!'], ' ')
    ele.classList.add('text')

    const myImg = new Image();
    myImg.src = img;
    ele.appendChild(myImg)

    return ele;
}

document.querySelector('body').appendChild(component())