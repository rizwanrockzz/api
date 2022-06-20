// fetch api code from rapid api

function getSpaceData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
            'X-RapidAPI-Key': '135ecda06amsh8630cc4a38b7392p137b4fjsn228185be16fc'
        }
    };

    fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=inr&page=1&per_page=100&order=market_cap_desc', options)
        .then(response => response.json())
        .then((datafromapi) => 
        {
            console.log("at start")
            let reqhtml = "";
            datafromapi.map((values)=>{
                console.log(datafromapi)
                reqhtml += `<div id="container">
                <p class="rank">${values.market_cap_rank}</p>
                <img src="${values.image}" alt="${values.name}">
                <p>${values.name}</p>
                <p>Price : ${values.current_price} ₹</p>
                <p>24 hour low : ${values.low_24h} ₹</p>
                <div class="flex">
                    <p>Total Supply : ${values.total_supply}</p>
                    <p>Circulating Supply : ${values.circulating_supply}</p>
                </div>
            </div>`;
            document.querySelector(".flex-box").innerHTML = reqhtml;
            });

            
        }).catch((err) => {console.error(err)});
}

function getChart(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
            'X-RapidAPI-Key': '135ecda06amsh8630cc4a38b7392p137b4fjsn228185be16fc'
        }
    };
    
    fetch('https://coingecko.p.rapidapi.com/exchanges', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

// getChart();

getSpaceData();

// image 
// name
// current_price
// low_24h
// circulating_supply
// market_cap_rank
// total_supply

// console.log(response)

// for(let i=0;i<100;i++){
//     console.log(response[i].image+" "+response[i].market_cap_rank+" "+response[i].name+" "+response[i].current_price+" "+" "+response[i].low_24h+" "+response[i].total_supply+" "+response[i].circulating_supply)
// }








