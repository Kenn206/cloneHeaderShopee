const addClick = document.getElementById("addClick");
addClick.addEventListener('click', function(){
    document.getElementsByClassName('hero__shoppingCart--modal')[0].classList.toggle('active');
})

const downApp = document.getElementById('downLoad');
downApp.addEventListener('click', function(){
    document.getElementsByClassName('downLoadApp')[0].classList.toggle('modal');
})
document.getElementsByClassName('downLoadApp')[0].addEventListener('click', function(){
    this.classList.remove('modal');
})