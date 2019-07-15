let name = document.querySelector("h4")
let desc = document.querySelector('p')

let cat = ""
fetch(`https://aws.random.cat/meow`)
  .then(res => res.json())
  .then(response => {
    cat = response.file
})

document.querySelector("button").addEventListener('click',function () {
  var userInput = document.getElementById('weedMe').value
  fetch(`http://strainapi.evanbusse.com/ne5UUmk/strains/search/name/${userInput}`)
    .then(res => res.json())
    .then(response => {
      response.forEach(el => {
        let ul = document.querySelector("ul"); //ul connets to ul on the dom
        let li = document.createElement('li'); //is creating the LI
        let img = document.createElement('img');
          li.appendChild(document.createTextNode(el.name));
          img.src = cat
          li.appendChild(img)
          ul.appendChild(li);
        console.log(el.name)
        kush = el.name




    })
  })
})
