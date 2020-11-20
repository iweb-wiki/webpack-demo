// import _ from "lodash";

function component () {
    let ele = document.createElement('div');
    ele.innerHTML = ['Hello', 'webpack', '!'].join(' ')
    // ele.innerHTML = _.join(['Hello', 'webpack', '!'], ' ')
    return ele;
}

document.querySelector('body').appendChild(component())