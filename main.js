// Calculate a random number that corresponds to the ID of an artwork in the AIC API

// Fetch that artwork and create a new instance of a Class

// Define a constructor with data.title, data.thumbnail.lqip, data.thumbnail.alt_text, data.place_of_origin,, data.dimensions, data.medium_display, data.department_title, data.artists_titles, data.style_titles

// Fill the HTML Elements with corresponding fetched values


// Check constructor and make sure it works

fetchIDFromLocalJSON();

function fetchIDFromLocalJSON() {
    
    fetch("./artworks_IDs.json")

    .then(res => res.json())
    .then(data => {
        const ID = []
        data.forEach(e => ID.push(e.A))
        
        const randomNumber = Math.floor(Math.random() * (Math.floor(ID.length) - Math.ceil(1) + 1) + Math.ceil(1))

        fetchPostcard(ID, randomNumber)
    })

        .catch(err => {
            console.log(`error ${err}`)
        // console.log(randomNumber)
        // console.log(ID[randomNumber])
    })
}


function fetchPostcard(ID, number){
    fetch(`https://api.artic.edu/api/v1/artworks/${ID[number]}`)
        .then(res => res.json())
        .then(artwork => { console.log(artwork.data.thumbnail.alt_text)
            const postcard = new Postcard(artwork)
            postcard.displayArtworkInfo();
            // call the postcard functions

        })

        .catch(err => {
            console.log(`error ${err}`)
        // console.log(randomNumber)
        // console.log(ID[randomNumber])
        
    })
}

class Postcard {
    constructor(artworkInfo){
        this.title = artworkInfo.data.title
        this.thumbnail = artworkInfo.data.thumbnail.lqip
        this.thumbnail_info = artworkInfo.data.thumbnail["alt_text"]
        this.date = artworkInfo.data["date_end"]
        this.origin = artworkInfo.data.place_of_origin
        this.dimensions = artworkInfo.data.dimensions
        this.medium_display = artworkInfo.data.medium_display
        this.department = artworkInfo.data.department_title
        this.artist = artworkInfo.data.artist_titles
        this.style = artworkInfo.data.style_titles

    }

    displayImage(){
        //
    }

    displayArtworkInfo(){
        document.querySelector('#artworkInfo').textContent = `${this.artist}: ${this.title}, ${this.date}`
    }

}