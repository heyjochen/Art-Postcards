// Calculate a random number that corresponds to the ID of an artwork in the AIC API

// Fetch that artwork and create a new instance of a Class

// Define a constructor with data.title, data.thumbnail.lqip, data.thumbnail.alt_text, data.place_of_origin,, data.dimensions, data.medium_display, data.department_title, data.artists_titles, data.style_titles

// Fill the HTML Elements with corresponding fetched values

fetch("./artworks_IDs.json")
.then(response => {
   return response.json();
})
.then(data => {
    const ID = []
    data.forEach(e => ID.push(e.A))
    
    const randomNumber = Math.floor(Math.random() * (Math.floor(ID.length) - Math.ceil(1) + 1) + Math.ceil(1))
    console.log(randomNumber)
    console.log(ID[randomNumber])


    // console.log(randomNumber)
    // console.log(data)
});