const list=document.querySelector('.list');
const overlay=document.querySelector('.overlay');
const xmark=document.querySelector('.xmark');
list.onclick=()=>overlay.classList.remove('d-none');
xmark.onclick=()=>overlay.classList.add('d-none');