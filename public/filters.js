function getMap(searchTerm = 'new york city'){
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
}

function weatherDetails(searchTerm = 'new york city'){
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
}