import {getCityDataForCurrentDay, getCityDataForWeek, getCurrentData} from './api-data';


let mobile = document.querySelector('#searchInput');
let desktop = document.querySelector('#searchI');

let input = mobile || desktop;

let currentCityData = getCurrentData(input)

class DomJobs{
    static 
}

//tryna memoize the heavy files like images
//pull all loaded data to localstorage, always overwrite the current data with identical key
window.onloadstart = function(event){

}