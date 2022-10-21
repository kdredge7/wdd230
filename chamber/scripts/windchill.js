/* Defining Table
	 * Input: temperature and wind speed
	 * Processing: compute temperature (Fahrenheit) with the wind speed (mph)
 	 * Output: The temperature with the wind chill */
 	

        const tempF = parseFloat(document.querySelector("#tempF").textContent);
        const speed = parseFloat(document.querySelector("#speed").textContent);
        finalTemp = 35.74 + .6215 * tempF - 35.75 * speed ** .16 + .4275 * tempF * speed ** .16;
        
        if (tempF <= 50 && speed >3) {
            return finalTemp;
        }  
        else {
            finalTemp = "n/a"
        }
        
        document.getElementById("#windChill").innerHTML = finalTemp;