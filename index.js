let fetchedData;
 fetch("http://localhost:3000/films")
 .then(response => response.json())
 .then(data => {
   console.log(data);

document.getElementById('root').innerHTML=data.card
let card = ""
data.forEach((films)=>{
console.log(films)
card +=  ` <div class="upcoming-img-box">
<img src="${films.poster}" alt="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg">
<p class ="in-theater">In theater</p>
<p class="ticket">${films.capacity} tickets
<p class="timer">${films.runtime}
<button type="button" id="${films.id}">Buy Ticket</button>
</div>`})
console.log(card)
document.querySelector('.movies-container').innerHTML=card
console.log(data);  
})
//catching any errors that may occur
.catch(error => {
    console.error(error);
  });
