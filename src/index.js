// import _ from "lodash";

function component () {
    let ele = document.createElement('div');
    ele.innerHTML = ['Hello', 'webpack', '1.0.3', '!'].join(' ')
    // ele.innerHTML = _.join(['Hello', 'webpack', '!'], ' ')
    return ele;
}

document.querySelector('body').appendChild(component())