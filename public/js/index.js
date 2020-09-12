import { RESPONSE } from './test'

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
function date(val){
    return new Date(vall * 1000);
}

function updateDom(){
    currentDay();
    hourly();
    daily();
}
function currentDay(){
    let dateObj = date(RESPONSE.current.dt);
    let todaty = dateObj.toDateString();//use full date and time

    let div = document.createElement('div');
    div.classList.add('main-day');

    let main = document.createElement('p');
    let img = document.createElement('img');
    let temp = document.createElement('p');

    main.textContent = RESPONSE.current.weather[0].main;
    img.src = `../assets/${RESPONSE.current.weather[0].main}.svg`
    temp.textContent = RESPONSE.current.temp;
}
function hourly(){
    
    for(let index = 0; index < 7; index++){
        let dateObj = date(RESPONSE.hourly[index].dt);
        let hour = dateObj.getHours();
        let div = document.createElement('div');
        div.classList.add('data');

        let time = document.createElement('p');
        let img = document.createElement('img');
        let temp = document.createElement('p');

        time.textContent = hour;
        img.src = `../assets/${RESPONSE.hourly[index].weather[0].main}.svg`;
        temp.textContent = RESPONSE.hourly[index].temp;

        div.appendChild(time);
        div.appendChild(img);
        div.appendChild(temp);

        detail.appendChild(div);

    }
}
function daily() {
    
    RESPONSE.daily.forEach(element => {
        let day = date(element.dt).getDay();
        
        let div = document.createElement('div');
        div.classList.add('data')

        let dayT = document.createElement('p');
        let img = document.createElement('img');
        let temp = document.createElement('p');

        dayT.textContent = day;
        img.src = `../assets/${element.weather[0].main}.svg`;
        temp.textContent = element.temp.day;

        div.appendChild(dayT);
        div.appendChild(img);
        div.appendChild(temp);

        weekData.appendChild(div);
    });
}

window.addEventListener('load', function(){
    updateDom();
})