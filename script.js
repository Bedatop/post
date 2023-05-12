let tov = document.querySelector('.tov')
let cen = document.querySelector('.cen')
let kat = document.querySelector('.kat')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    let div = document.createElement('div');
    div.classList.add('style');
    div.innerHTML = tov.value;
    })