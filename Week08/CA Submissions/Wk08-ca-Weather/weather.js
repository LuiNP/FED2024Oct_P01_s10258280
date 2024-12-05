let psi = document.getElementById("psi-twenty-four-hourly")//setting up the variables
let pm10 = document.getElementById("pm10-twenty-four-hourly")
let input = document.getElementById("txtDate")
let submit = document.getElementById("btnSubmit")

submit.addEventListener("click", getData)
async function getData(){
    let data = await fetch("https://api.data.gov.sg/v1/environment/psi?date=" + input.value).then(res=>res.json())
    let dPsi = data.items[0].readings.psi_twenty_four_hourly
    let dPm10 = data.items[0].readings.pm10_twenty_four_hourly

    psi.innerHTML = ''
    pm10.innerHTML = ''

    for (var k in dPsi) {
        psi.innerHTML += `${k} ${dPsi[k]} ` + "<br />"
    }    
    for (var k in dPm10) {
        pm10.innerHTML += `${k} ${dPm10[k]} ` + "<br />"
    }    
}