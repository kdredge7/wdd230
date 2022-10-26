/* Defining Table
	 * Input: temperature and wind speed
	 * Processing: compute temperature (Fahrenheit) with the wind speed (mph)
 	 * Output: The temperature with the wind chill 
    
    function chillF(temperature, speed) {
        const tempatureF = (document.querySelector("#tempF").textContent);
        const temp =  parseFloat(tempatureF);
        const windS = parseFloat(document.querySelector("#speed").textContent);
        const windspeed =  parseFloat(windS);
        const windchill = document.querySelector("#windchill");
        
        if (temp <= 50 && windspeed >3) {
            const finalTemp = (35.74 + .6215 * temp) - (35.75 * windspeed ** .16) + (.4275 * temp * windspeed ** .16).toFixed(1);
            return finalTemp + '°F';
        }  
        else {
            finalTemp = "n/a"
        }
    }
    document.getElementById("#windChill").innerHTML = chillF(temperature, speed)*/

    function chillF(temperature, windSpeed) {
        const tempF = document.getElementById("temperatureF").textContent;
        const temp = parseInt(tempF);
        const windS = document.getElementById("windspeed").textContent;
        const wind = parseInt(windS);
        if (temp <= 50 && wind > 3) {
          const chilly = (35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind ** 0.16)).toFixed(0);
          return chilly + `°F`;
        } else{
          return "N/A"
        }
      }
      
      document.getElementById("windchill").innerHTML = chillF(temperatureF, windspeed);
         
    
      
      
      // function doInputOutput() {
        
      //   let tempF = parseFloat(document.getElementById("temperatureF").value);
      //   let speed = parseFloat(document.getElementById("windSpeedInput").value);
      //   finalTemp = windChill(tempF, speed);
      //   document.getElementById("outputDiv").innerHTML = finalTemp;
      // }
      
      //   function windchill(tempF, speed) {
      //     let windChill = 35.74 + (0.6215 * tempF) - (35.75 * speed**0.16) + (0.4275 * tempF * speed ** 0.16);
      //     return windChill;
      //   }
      
          
       

          
    