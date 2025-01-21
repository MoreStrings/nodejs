//console.log("First")
//setTimeout(() =>{
//    console.log("Time out completed")
//    }, 3000
//) 
//console.log("last")

//  async/await

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const success = true
            if (success){
                resolve("Data fetched")
            }else{
                reject("Error fetching data")
            }
        },2000)
    })
}

async function displayData(){
    console.log("initial")
    const data = await fetchData();
    console.log(data);
    console.log("final")
}

displayData()