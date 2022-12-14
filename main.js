let mainMenu =document.querySelector('.mainMenu');
let openMenu =document.querySelector('.openMenu');
let closeMenu =document.querySelector('.closeMenu');
let search =document.querySelector('#search');
let searchIcon =document.querySelector('.searchIcon');
let cart =document.querySelector('.cart');
let shopping =document.querySelector('.shopping');
let searchE =document.querySelector('.searchE');
let items =document.querySelector('.items');
let scrollBtn =document.querySelector('.scroll-btn');
let inp =document.querySelectorAll('input');


function show(){
    mainMenu.style.top='0';
}
function close(){
    mainMenu.style.top='-100%';
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

cart.onclick=function(){
    shopping.style.right='0';
}
window.addEventListener('click',function(event){
    if(event.target!==cart && event.target !== shopping && event.target!==items){
        shopping.style.right='-100%';
    };
})

scrollBtn.onclick = function(){
    scroll({
        top:0,
        behavior:'smooth'
    })
};
searchIcon.onclick=function(){
    search.style.top='115px';
};
window.addEventListener('click',function(event){
    if(event.target !== searchIcon && event.target !== searchE){
        search.style.top='-100%';
    };
});
function focus(x){
    x.style.color="red";
};








