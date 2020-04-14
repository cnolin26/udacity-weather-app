/* Global Variables */

let api_key = '&appid=08ca1ff33ce4bb1e3f625332f2411fec';
let base_url = 'https://api.openweathermap.org/data/2.5/weather?zip='; 

document.getElementById('generate').addEventListener('click', p_action);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
                              
// fetch GET request to api
const getWeather = async (base_url, zipc, api_key)=>{
    console.log("In fetch GET. API: "+base_url+zipc+api_key);
    const res = await fetch(base_url+zipc+api_key)
    try{
        const data = await res.json(); //turns it into json
        console.log(`In fetch GET.  data: ${data}`);
        console.log(`In fetch GET.  data.main.temp: ${data.main.temp}`);
        console.log("data.name: "+data.name);
        return data;
        
    } catch(error) {
        console.log("Error in fetch GET", error);
    }
}


// fetch POST
const postData = async(url='', data)=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json(); //response.text() shows that it just contains html
        return newData;
    }catch(error){
        console.log(`Try error: ${error}`);
    } 
}


function p_action(e){
    let z = document.getElementById('zip').value;
    let zipc = z + ',us';
    getWeather(base_url, zipc, api_key)
    .then(function(data){
        const u_resp = document.getElementById('feelings').value;
        postData('/weather-journal-app/website', {temperature: data.main.temp, date: newDate, user_resp: u_resp});
    });
}