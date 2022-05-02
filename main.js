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
    })
}


function fetchPostcard(ID, number){
    fetch(`https://api.artic.edu/api/v1/artworks/${ID[number]}`)
        .then(res => res.json())
        .then(artwork => {
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
        this.thumbnail = artworkInfo.data.thumbnail
        // this.thumbnail_info = artworkInfo.data.thumbnail["alt_text"]
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
        // check if this.thumbnail === null, if so display placeholderimage
        if (this.thumbnail === null || this.thumbnail === undefined) {
            document.querySelector('#postcard-image').src = 'https://images.unsplash.com/photo-1651098527823-d24f680f3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTUxMzQ2MA&ixlib=rb-1.2.1&q=80&w=1080'
        } else {
        const imagePath = '/full/843,/0/default.jpg'
        const imageURL = `${this.iiifURL}/${this.imageID}${imagePath}`
        document.querySelector('#postcard-image').src = imageURL
        }
    }

    displayArtworkInfo(){
        document.querySelector('#artworkInfo').innerHTML = `${this.artist}: ${this.title}, ${this.date},<br>${this.medium_display}`
    }

    setImageAlt(){
        if (this.thumbnail["alt_text"] === null || this.thumbnail["alt_text"] === undefined) {
            document.querySelector('#postcard-image').alt = 'No Alt Description for this image'
        } else {
        document.querySelector('#postcard-image').alt = `${this.thumbnail["alt_text"]}`
        }
    }

    

}