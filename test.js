    
    async function data(city){
        let APIKEY = '0427e537d9e308e55c6042873d300705';
        let callString =`api.openweathermap.org/data/2.5/weather?q={london}&appid={1ec4e18a3b994bd09ecd586084b0f6a9}`;
    
        let response = await fetch(callString);
        let d = response.json();
        console.log(d);
    }

  data('lagos').catch((err) =>console.log(err))


  1ec4e18a3b994bd09ecd586084b0f6a9