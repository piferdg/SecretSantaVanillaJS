//Here what Im doing is creating elements by using 'document.createElement' and Im also grabbing elements by using 'document.getElement'. 
//This will allow me to use these elements to populate the data (family members). It will also allow me to use the button. 
let myFamily = document.getElementsByClassName('family-members')
let giftGivers = document.getElementsByClassName('random-group')[0]
let personOne = document.createElement('li')
let personTwo = document.createElement('li')
let personThree = document.createElement('li')
let personFour = document.createElement('li')
let personFive = document.createElement('li')
let personSix = document.createElement('li')
let personSeven = document.createElement('li')
let personEight = document.createElement('li')
let familyNames = document.getElementById('names')
let randomButton = document.getElementById('random-button')

//Here I'm setting a variable store my back-end data API URL. I was using a local json (family.json) but then decided to make a back-end and deploy it ot heroku. 
let apiURL = "https://secret-santa-challenge.herokuapp.com/family"

//This function is fetching the family member data, then I'm using a for loop to iterate through the data in order to return a randomized list. 
//By using .sort, and Math.random I'm able to return a randomized array of family members. 
//In line 25 I'm using console.log to check that Im getting the data that I want before populating it on the page.
//There is one problem with this solution in its current form, sometimes family members names will match. Meaning sometimes 'Danny' will get 'Danny' as a secret santa. This can be resolved by pressing the 'Randomize' button again.
//I would have to make an if/else statement to make sure that the the secret santa is '!== "Danny"' (I'd need to do this for each name)  
function getData() {
  let giftGiving = []
  fetch (apiURL)
  .then (response => response.json())
  .then (familyMembers = familyMembers => 
    {
    for (i=0; i<familyMembers.family.length; i++) {
      giftGiving.push(familyMembers.family[i])
      giftGiving.sort(() => Math.random() -0.5) 
    }
    console.log('Secret Santas', giftGiving)
    personOne.innerText = giftGiving[0].name
    personTwo.innerText = giftGiving[1].name
    personThree.innerText = giftGiving[2].name
    personFour.innerText = giftGiving[3].name
    personFive.innerText = giftGiving[4].name
    personSix.innerText = giftGiving[5].name
    personSeven.innerText = giftGiving[6].name
    personEight.innerText = giftGiving[7].name
  })
  
}
//Here I'm appending the 'person' to familyNames, as I've set these variables above.
//I've set each one to a specific index, this is not the most dynamic way to to this, but it is one option that works with the 'getData' function.
familyNames.appendChild(personOne)
familyNames.appendChild(personTwo)
familyNames.appendChild(personThree)
familyNames.appendChild(personFour)
familyNames.appendChild(personFive)
familyNames.appendChild(personSix)
familyNames.appendChild(personSeven)
familyNames.appendChild(personEight)


//Here I'm adding an event listener to the button, so it will run the getData function when its clicked.  
randomButton.addEventListener('click', getData)



