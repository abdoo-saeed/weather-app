var apiKey = "d514aa9454b244ffacd111621252406"
var base = "http://api.weatherapi.com/v1"
var weatherContainer = document.querySelector(".weather")
var country = document.getElementById("floatingInputValue")


async function getWeather(){

var currentCountry = country.value || "Giza"




var data = await fetch(`${base}/forecast.json?key=${apiKey}&q=${currentCountry}&days=3&aqi=no&alerts=no`)


    var response = await data.json()
    console.log(response);

   

// ///////////////////////////////////////////////

    let localtime = response.location.localtime;
let dateObj = new Date(localtime);


let formatted = dateObj.getDate().toString().padStart(2, '0') + "-" +
                (dateObj.getMonth() + 1).toString().padStart(2, '0') + "-" +
                dateObj.getFullYear();



let localtime2 = response.location.localtime; 
let dateObj2 = new Date(localtime2);

let dayName = dateObj2.toLocaleDateString('en-US', { weekday: 'long' });
console.log(dayName); 





let localtime3 = response.forecast.forecastday[1].date; 
let dateObj3 = new Date(localtime3);

let dayName2 = dateObj3.toLocaleDateString('en-US', { weekday: 'long' });
console.log(dayName2); 


let localtime4 = response.forecast.forecastday[2].date; 
let dateObj4 = new Date(localtime4);

let dayName3 = dateObj4.toLocaleDateString('en-US', { weekday: 'long' });
console.log(dayName3); 






/////////////////////////////////////////////////////////////


    var weatherinfo = `



    <div class="card day1">

     <div class="card-header d-flex justify-content-between d1-upper">
      <small class=" pb-1 text-secondary">${dayName}</small>
      <small class=" pb-1 text-secondary">${formatted}</small>
    </div>
    
    <div class="card-body d1-bottom">
      <h5 class="card-title text-secondary">${response.location.name}</h5>
      <h2 class="card-text display-1 fw-bolder text-white">${response.current.temp_c}</h2>

      <img src="${response.current.condition.icon}" alt="">
      <small class="d-block pb-2 ps-2 pt-3 text-info">${response.current.condition.text}</small>

      <div class="d-flex  gap-4 py-2">

        <div>

          <img src="./images/icon-umberella.png" alt="">
          <small class="text-secondary">${response.current.cloud}%</small>

        </div>


        <div>

           <img src="./images/icon-wind.png" alt="">
          <small class="text-secondary">${response.current.wind_mph}</small>

        </div>


        <div>

           <img src="./images/icon-compass.png" alt="">
          <small class="text-secondary">${response.current.wind_dir}</small>
        </div>


      </div>
    </div>
   
  </div>



  <div class="card day2">

    <div class="card-header text-center d2-upper">
      <small class="text-secondary ">${dayName2}</small>
    </div>
    
    <div class="card-body d-flex flex-column justify-content-center align-items-center d2-bottom">
      <img src="${response.forecast.forecastday[1].day.condition.icon}" class="w-25" alt=""> 
      <p class="card-text fs-3 text-white">${response.forecast.forecastday[1].day.maxtemp_c}</p>
      <small class="text-secondary">${response.forecast.forecastday[1].day.mintemp_c}</small>
      <small class="mt-2 fs-6 text-info">${response.forecast.forecastday[1].day.condition.text}</small>
    </div>
    
  </div>



  <div class="card day3">

    <div class="card-header text-center d3-upper">
      <small class="text-secondary ">${dayName3}</small>
    </div>
    
    <div class="card-body d-flex flex-column justify-content-center align-items-center d3-bottom">
      <img src="${response.forecast.forecastday[2].day.condition.icon}" class="w-25" alt=""> 
      <p class="card-text fs-3 text-white">${response.forecast.forecastday[2].day.maxtemp_c}</p>
      <small class="text-secondary">${response.forecast.forecastday[2].day.mintemp_c}</small>
      <small class="mt-2 fs-6 text-info">${response.forecast.forecastday[2].day.condition.text}</small>
    </div>
    
  </div>





    
    
    `

    weatherContainer.innerHTML = weatherinfo

    

}

getWeather()



