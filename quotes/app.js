function getAQuote() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
            'X-RapidAPI-Key': '135ecda06amsh8630cc4a38b7392p137b4fjsn228185be16fc'
        }
    };

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            console.log(response)
            // let theQuoteCode = "";
            let quote = document.querySelector(".quote");
            quote.innerHTML = response.content;
        })
        .catch(err => console.error(err));
}

getAQuote();
