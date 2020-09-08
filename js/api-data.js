
function getCurrentData(input){

    //construct fetch string here plus validation

    return async function getData(input){
        let response = await fetch();
        return JSON.parse(response);
    }
}
function getCityDataForCurrentDay(input){

    //construct fetch string here, plus validation

    return async function getData(input){
        let response = await fetch();
        return JSON.parse(response);
    }
}
function getCityDataForWeek(input){
    
    //construct fetch string here, plus validation

    return async function getData(input){
        let response = await fetch();
        return JSON.parse(response);
    }
}

export {getCityDataForCurrentDay, getCityDataForWeek, getCurrentData};