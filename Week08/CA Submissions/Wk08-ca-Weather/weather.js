let psi = document.getElementById("psi-twenty-four-hourly")//setting up the variables
let pm10 = document.getElementById("pm10-twenty-four-hourly")
let input = document.getElementById("txtDate")
let submit = document.getElementById("btnSubmit")

submit.addEventListener("click", getData)//trigger getData when the event(here it's click, as in click submnit) being listened for is heard

async function getData(){//async again
    let data = await fetch("https://api.data.gov.sg/v1/environment/psi?date=" + input.value).then(res=>res.json())
    /*making the data into a variable. The await is there to make sure it gets read first, fetch from the url(fetch(url)) the date inputted(input.value)
    the + is to concantenate into one string for the search
    then turn the result into a json object.
    */
    let dPsi = data.items[0].readings.psi_twenty_four_hourly//getting the item data from the whole array
    let dPm10 = data.items[0].readings.pm10_twenty_four_hourly//WM called it filtering

    psi.innerHTML = ''
    pm10.innerHTML = ''//set the html to nothing, a blank slate - this is mostly for setup for the function

    for (var k in dPsi) {//this as a for loop iterates, here it's iterating through the array object 
        psi.innerHTML += `${k} ${dPsi[k]} ` + "<br />"
    }    
    for (var k in dPm10) {
        pm10.innerHTML += `${k} ${dPm10[k]} ` + "<br />"
    }    
}