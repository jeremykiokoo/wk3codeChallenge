let fetchedData;
 fetch("http://localhost:3000/films")
.then((result) => result.json())
.then((result2) => {
 fetchedData = result2;
 console.log('results --> ', result2);
 beginning(result2);
})
