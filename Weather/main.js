const myKey = "75b42c49c1f341df9f0163023211409";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("find");
let weatherContant = document.getElementById("weatherContant");
let date = document.querySelector(".date");
let place = document.querySelector(".place");
let temp = Array.from(document.querySelectorAll(".temp"));
let min = Array.from(document.querySelectorAll(".min"));
let descripe = Array.from(document.querySelectorAll(".descripe"));
let awesome = Array.from(document.querySelectorAll(".awesome"));
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September"
    , "October", "November", "December"];

(async function display() {

    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=75b42c49c1f341df9f0163023211409&q=cairo&days=3`);
    let finalResponse = await response.json();
    place.innerHTML = finalResponse.location.name;
    // date.innerHTML = finalResponse.location.name;
    for (let i = 0; i < 3; i++) {
        temp[i].innerHTML = ` ${finalResponse.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup>C`;
        min[i].innerHTML = ` ${finalResponse.forecast.forecastday[i].day.mintemp_c}<sup>o</sup>C`;
        descripe[i].innerHTML = finalResponse.forecast.forecastday[i].day.condition.text;
        let src = finalResponse.forecast.forecastday[i].day.condition.icon;
        awesome[i].setAttribute("src", `https:${src}`);

    }
})();

async function searchWeather() {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=75b42c49c1f341df9f0163023211409&q=${searchInput.value}&days=3`);
    let finalResponse = await response.json();
    console.log(finalResponse.forecast.forecastday)
    place.innerHTML = finalResponse.location.name;
    for (let i = 0; i < 3; i++) {
        temp[i].innerHTML =  ` ${ finalResponse.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup>C`;
        min[i].innerHTML = ` ${ finalResponse.forecast.forecastday[i].day.mintemp_c}<sup>o</sup>C`;
        descripe[i].innerHTML = finalResponse.forecast.forecastday[i].day.condition.text;
        let src = finalResponse.forecast.forecastday[i].day.condition.icon;
        awesome[i].setAttribute("src", `https:${src}`);
    }

}
searchInput.addEventListener('keyup', searchWeather);
searchBtn.addEventListener('click', searchWeather);




// async function search(a){let t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);if(t.ok&&400!=t.status){let a=await t.json();displayCurrent(a.location,a.current),displayAnother(a.forecast.forecastday)}}document.getElementById("search").addEventListener("keyup",a=>{search(a.target.value)});var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];function displayCurrent(a,t){if(null!=t){var e=new Date(t.last_updated.replace(" ","T"));let n=`<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${days[e.getDay()]}</div>\n    <div class=" date">${e.getDate()+monthNames[e.getMonth()]}</div>\n    </div> \x3c!-- .forecast-header --\x3e\n    <div class="forecast-content" id="current">\n    <div class="location">${a.name}</div>\n    <div class="degree">\n        <div class="num">${t.temp_c}<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="https:${t.condition.icon}" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${t.condition.text}</div>\n    <span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n    </div>\n</div>`;document.getElementById("forecast").innerHTML=n}}function displayAnother(a){let t="";for(let e=1;e<a.length;e++)t+=`\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${days[new Date(a[e].date.replace(" ","T")).getDay()]}</div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src="https:${a[e].day.condition.icon}" alt="" width=48>\n            </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n            <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n            <div class="custom">${a[e].day.condition.text}</div>\n        </div>\n        </div>`;document.getElementById("forecast").innerHTML+=t}search("cairo");