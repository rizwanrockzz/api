function getRandomSticker() {

    const options = {
        method: 'GET'
    };

    fetch('https://api.giphy.com/v1/stickers/random?api_key=p5RNQZyHi8n8im4zSYlfradMFi4J2JpV&tag=&rating=g', options)
        .then(response => response.json())
        .then((response) => {
            // let randomVal = Math.floor(Math.random() * 50) ;
            console.log(response)
            // console.log(randomVal)
            console.log(response.data.images.downsized.width)
            console.log(response.data.images.downsized.height)
            console.log(response.data.images.downsized.url)

            document.querySelector(".random-sticker").innerHTML = `<img src="${response.data.images.downsized.url}" alt="${response.data.images.downsized.url}"></img>`;
        })
        .catch(err => console.error(err));
}

function getTrendingSticker() {

    const options = {
        method: 'GET'
    };

    fetch('https://api.giphy.com/v1/stickers/trending?api_key=p5RNQZyHi8n8im4zSYlfradMFi4J2JpV&limit=50&rating=g', options)
        .then(response => response.json())
        .then((response) => {
            let randomVal = Math.floor(Math.random() * 50) ;
            // console.log(response)
            // console.log(randomVal)
            // console.log(response.data[randomVal].images.downsized.width)
            // console.log(response.data[randomVal].images.downsized.height)
            // console.log(response.data[randomVal].images.downsized.url)

            document.querySelector(".trending-sticker").innerHTML = `<img src="${response.data[randomVal].images.downsized.url}" alt="${response.data[randomVal].images.downsized.url}"></img>`;
        })
        .catch(err => console.error(err));
}

function getRandomMeme() {

    const options = {
        method: 'GET'
    };

    fetch('https://api.giphy.com/v1/gifs/random?api_key=p5RNQZyHi8n8im4zSYlfradMFi4J2JpV&tag=&rating=g', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            // console.log(randomVal)
            // console.log(response.data[randomVal].images.downsized.width)
            // console.log(response.data[randomVal].images.downsized.height)
            console.log(response.data.images.downsized.url)

            document.querySelector(".random-meme").innerHTML = `<img src="${response.data.images.downsized.url}" alt="${response.data.images.downsized.url}"></img>`;
        })
        .catch(err => console.error(err));
}

function getTrendingMeme() {

    const options = {
        method: 'GET'
    };

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=p5RNQZyHi8n8im4zSYlfradMFi4J2JpV&limit=50&rating=g', options)
        .then(response => response.json())
        .then((response) => {
            let randomVal = Math.floor(Math.random() * 50) ;
            console.log(response)
            console.log(randomVal)
            // console.log(response.data[randomVal].images.downsized.width)
            // console.log(response.data[randomVal].images.downsized.height)
            // console.log(response.data[randomVal].images.downsized.url)

            document.querySelector(".trending-meme").innerHTML = `<img src="${response.data[randomVal].images.downsized.url}" alt="${response.data[randomVal].images.downsized.url}"></img>`;
        })
        .catch(err => console.error(err));
}

getRandomSticker();
getTrendingSticker();
getRandomMeme();
getTrendingMeme();
