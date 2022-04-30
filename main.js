// Calculate a random number that corresponds to the ID of an artwork in the AIC API

// Fetch that artwork and create a new instance of a Class

// Define a constructor with data.title, data.thumbnail.lqip, data.thumbnail.alt_text, data.place_of_origin,, data.dimensions, data.medium_display, data.department_title, data.artists_titles, data.style_titles

// Fill the HTML Elements with corresponding fetched values
fetchID();

function fetchID() {
    
    fetch("./artworks_IDs.json")

    .then(res => res.json())
    .then(data => {
        const ID = []
        data.forEach(e => ID.push(e.A))
        
        const randomNumber = Math.floor(Math.random() * (Math.floor(ID.length) - Math.ceil(1) + 1) + Math.ceil(1))

        fetch(`https://api.artic.edu/api/v1/artworks/${ID[randomNumber]}`)
        .then(res => res.json())
        .then(artwork => { console.log(artwork.data.artist_display)
            const postcard = new Postcard(artwork)
        
        });
    })


        .catch(err => {
            console.log(`error ${err}`)
        // console.log(randomNumber)
        // console.log(ID[randomNumber])
        
    })
}

class Postcard {
    constructor(artworkInfo){
        this.title = artworkInfo.title
        this.thumbnail = artworkInfo.thumbnail.lqip
        this.thumbnail.alt_text = artworkInfo.thumbnail.alt_text
        this.origin = artworkInfo.place_of_origin
        this.dimensions = artworkInfo.dimensions
        this.medium_display = artworkInfo.medium_display
        this.department_title = artworkInfo.department_title
        this.artists_titles = artworkInfo.artists_titles
        this.style_titles = artworkInfo.style_titles

    }

}