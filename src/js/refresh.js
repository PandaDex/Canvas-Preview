setInterval(function(){
    var d = new Date();
    var n = d.getTime();
    var lastRefresh = localStorage.getItem('lastRefresh');
    if(lastRefresh < n - 500){
        localStorage.clear;
        location.reload();
        localStorage.setItem('lastRefresh', n);
    }
}, 1500);