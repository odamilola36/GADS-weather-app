if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('sw.js').then((reg) =>{
            console.log(reg)
            console.log('registered')
        }).catch((err) =>{
            console.log(err);
        })
    })
}