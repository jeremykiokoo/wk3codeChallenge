fetch("http://localhost:3000/films")
.then(res => res.json())
.then(json => {
  json.map(data => {
    console.log(data)
  })
})

