// container1 or weather app js start from here 
const apiKey = '0433f677298fa1da293f6cc3112f39e3';

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temp = data.main.temp;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const weatherIcon = document.querySelector(".weather-icon");


      document.getElementById('city-name').innerText = cityName;
      document.getElementById('temperature').innerText = temp + '°c';
      document.getElementById('Wind').innerText = windSpeed + ' m/s';
      document.getElementById('Humidity').innerText = humidity + '%';



      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
      }
      else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
      }
      else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
      }
      else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
      }
      else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
      }

      document.querySelector(".weather").style.display = "Block";


    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error Found!');
    });
});

// container2 or To-do-list App js start from here 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();

}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
