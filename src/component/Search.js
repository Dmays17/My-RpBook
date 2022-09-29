let searchButton = document.querySelector("#search")
//Add Event Listner to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
})
//An asychronous function to fetch data from Api
async function sendApiRequest(){
    let APP_ID = "23e0b37f"
    let APP_KEY = "8f048c9cfb6745f205b3c63c4531639e"
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q`);
console.log(respone)
}

function useApiData(data){
}