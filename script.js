      let weather = {
        "apiKey": "cf25d4294c96fe4af6a0ace1cd4fc17c",
        fetchweather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey 
                )
                 .then((response) => response.json())
                 .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".city").innerText = name; 
                document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
                document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + "km/h";
                document.querySelector(".Wdescription").innerText = description;
                document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +".png";
                document.querySelector(".temp").innerText = "Temperature : " + temp + "°C"; 
                
        }
    }   
weather.fetchweather("mostaganem");
