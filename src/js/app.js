//find out if service-worker is available in browser
//if available, initiate service worker

if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', {scope: './'})
    .then(function(reg) {
      console.log("service worker registered", reg)
    })
    .catch(function(err){
      console.log("service worker failed to register", err)
    })
}