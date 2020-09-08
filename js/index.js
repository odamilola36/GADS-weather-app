let searchIcon = document.querySelector(".find");
let inputBox = document.querySelector('#searchInput')
let today = document.querySelector('.today');
let weekly = document.querySelector('.weekly');
let dataToday = document.querySelector('.data-today');
let dataWeek = document.querySelector('.data-week')

searchIcon.onclick = function(){
    inputBox.classList.toggle("animate");
}
today.onclick = function(event){
    if(event.target.classList.contains('active')){
        return;
    }else{
        weekly.classList.remove('active')
        event.target.classList.add('active')
        dataWeek.classList.add('hide')
        dataToday.classList.remove('hide')
    }
}
weekly.onclick = function(){
    if(event.target.classList.contains('active')){
        return;
    }else{
        dataWeek.classList.remove('hide')
        dataToday.classList.add('hide')
        today.classList.remove('active')
        event.target.classList.add('active')
    }
}