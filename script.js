let tov = document.querySelector('.tov')
let cen = document.querySelector('.cen')
let kat = document.querySelector('.kat')
let btn = document.querySelector('.btn')
let ul = document.querySelector('.ul')

btn.addEventListener('click', function () {
    let li = document.createElement('li');
    li.classList.add('style');
    li.innerHTML = tov.value;
    li.appendChild(ul)
    })