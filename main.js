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