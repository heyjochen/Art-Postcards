fetch("./artworks_IDs.json")
.then(response => {
   return response.json();
})
.then(data => {
    const ID = []
    data.forEach(e => ID.push(e.A))

    console.log(ID)
    // console.log(data)
});