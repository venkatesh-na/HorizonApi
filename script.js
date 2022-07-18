//if we skip the second parameter of fetch than its get request 
//for post request we have to use the second parameter
//converting response object to json so that we can see data and res.json() will return another promise so we have to use .then
//promise will always success unless an until there is some sort of network issue
//so we have to use res.ok method which returns a boolean value 

//retriving html element from css selector
const input = document.querySelector("input");
const button = document.querySelector("button")
const resultDiv = document.querySelector(".result")

//declaring value variable to store the data from api
let value = ""

//handle show button
button.addEventListener("click",(event)=>{
    event.preventDefault(); //to stop by default behaviour from browser
    button.textContent = "loading..."

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5d2aba5a660006ca5936ff57f5905f9e`)
    .then(function(res){
        if(res.ok){
            return res.json(); //converting a json data to usable javascript object
        } else {
            console.log("failure")
        }
    })
    .then(result=>{
        value = result.weather[0].description
        console.log(result.weather[0].description)  
        button.textContent = "show"
        resultDiv.innerHTML = `<h2>${value}</h2>`
        input.value = ""
        
    })
    .catch(function(e){
        //promise will fail only if there is some sort of network error or failure
        console.log(e);
        input.value = ""
        button.textContent = "show"
    })
})


// fetch("https://reqres.in/api/users",{
//   method: "POST",
//   headers:{
//     "Content-type" : "application/json"  
//     //we are telling fetch that we are passing json 
//   } ,
//   body :JSON.stringify({
//     //we have to stringify the object if we are using fetch
//     name : "User 1"
//   })
// })
// .then(res=>res.json())
// .then(result => console.log(result))

