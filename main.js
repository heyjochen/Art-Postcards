// check if there is an alt_text if not reload

fetchIDFromLocalJSON();

function fetchIDFromLocalJSON() {
    
    fetch("/artworks_IDs.json")

    .then(res => res.json())
    .then(data => {
        const ID = []
        data.forEach(e => ID.push(e.A))
        
        const randomNumber = Math.floor(Math.random() * (Math.floor(ID.length) - Math.ceil(1) + 1) + Math.ceil(1))
        console.log(ID[randomNumber])
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
            postcard.setImageAlt();
            postcard.displayImage();

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
        this.iiifURL = artworkInfo.config["iiif_url"]
        this.imageID = artworkInfo.data["image_id"]

    }

    displayImage(){
        // use iiifURL, imageID and /full/843,/0/default.jpg to generate ImageUrl
        const imagePath = '/full/843,/0/default.jpg'
        const imageURL = `${this.iiifURL}/${this.imageID}${imagePath}`
        document.querySelector('#postcard-image').src = imageURL
    }

    displayArtworkInfo(){
        document.querySelector('#artworkInfo').innerHTML = `${this.artist}: ${this.title}, ${this.date},<br>${this.medium_display}`
    }

    setImageAlt(){
        document.querySelector('#postcard-image').alt = `${this.thumbnail_info}`
    }

    

}