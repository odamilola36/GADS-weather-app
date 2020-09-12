let mobileSearch = document.querySelector('#searchInput');
let desktopSearch = document.querySelector('#searchI');

let input = mobileSearch || desktopSearch;

input.onsubmit = function(){
    let response = fetchData(input.value);
    if(response){
        updateDom(response);
        updateLocalStorage(response);
    }
    else if(localStorage.getItem(response.timezone)){
        updateDom(localStorage.getItem(response.timezone));
    }
    else
        updateOfflineMode();
}
window.onload = function (){
    let fromStore = localStorage.getItem(localStorage.key(0));
    let toSearch = fromStore.timezone || 'New York';
    //the timesone prop of the api data is not the name of
    //of the city so setting this to the searchterm will give error
    let response = fetchData(toSearch);
    if (response) {
        updateDom(response);
        updateLocalStorage(response);
    }
    else if(fromStore){
        updateDom(fromStore)
    }
    else{
        updateOfflineMode();
    }
}

function updateLocalStorage(response){
    localStorage.removeItem(response.timezone);
    localStorage.setItem(response.timezone, response);
}

function updateOfflineMode(){}
function updateDom(response){}

function fetchData(searchTerm){
    
    let mapData = (function (searchTerm) {
        let xhr = new XMLHttpRequest();
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyBWYsExcKzJOijhpCAeAKgBLlGbXLkW6Uc`;

        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        let responseObj;
        xhr.onload = function() {
            responseObj = xhr.response;
        };
        return responseObj;
    })();

    return function (){
        let xhr2 = new XMLHttpRequest();
        //construct lat and long from mapData
        let url = 'map api';

        xhr2.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();

        let responseData;
        xhr.onload = function(){
            responseData = xhr2.response;
        }
        return responseData;
    }
}