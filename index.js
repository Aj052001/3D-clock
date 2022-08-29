const hour = document.getElementById('hour')
const miniute = document.getElementById('min')
const second = document.getElementById('sec')
setInterval(()=>{
    let date = new Date();
    //second
    let sec = date.getSeconds();
    let secdegree = ((sec/60)*360);
    second.style.transform = `rotate(${secdegree}deg`
    //min
    let min = date.getMinutes();
    let mindegree =((min/60)*360);
    miniute.style.transform = `rotate(${mindegree}deg`  

    //hour
    let hr = date.getHours();
    let hourDegree = (30*hr)+((1/2)*min);
    hour.style.transform=`rotate(${hourDegree}deg)`

  
},1000)