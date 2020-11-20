function component () {
    let ele = document.createElement('div');
    ele.innerHTML = 'Hello webpack !'
    return ele;
}

document.querySelector('body').appendChild(component())