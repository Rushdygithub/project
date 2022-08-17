//here personal api key 
let apikey = "ae7f3f0f5d1d0200d5a4d22b6a2f863e";
//here i have defined some veribles 
let city = document.getElementById("cityname");
let search = document.getElementById("btn");
let res = document.getElementById("results");

//here main function of the weather app
let weather = () => {

    let citylen = city.value;
    if(citylen.length==0){
        res.innerHTML=`City Name Requred`;
       
    }
    else{
         
      let url =  `https://api.openweathermap.org/data/2.5/weather?q=${citylen}&appid=${apikey}&units=metric`;
      citylen.value ="";
      fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        let names = (data.name);
        let main = (data.main.temp);
        let min = (data.main.temp_min);
        let max = (data.main.temp_max);
        let icon = (data.weather[0].icon);
        let dis = (data.weather[0].description);
        res.innerHTML=`<center> <img src="https://openweathermap.org/img/w/${icon}.png"><h3>${names}</h3><h3>${dis}</h3><h3>temp: ${main} &#176</h3><h3>min-temp: ${min} &#176</h3><h3>max-temp: ${max} &#176</h3>
        </center>` ;

        

      })
      .catch(() => {
        res.innerHTML=`<h3>City Is Not Found</h3>`;
      });

      


    }

} ;
search.addEventListener("click",weather);
window.addEventListener("load",weather);
