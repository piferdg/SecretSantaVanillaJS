//Here what Im doing is creating elements by using 'document.createElement' and Im also grabbing elements by using 'document.getElement'. 
//This will allow me to use these elements to populate the data (family members). It will also allow me to use the button. 
let family = document.getElementsByClassName('family-members')
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

//Here I'm importing the local json file that Im using to store my data. 
let apiURL = "./family.json"

//This function is fetching the family member data, then I'm using a for loop to iterate through the data in order to return a randomized list. 
//By using.sort, and Math.random Im able to return a randomized array of family members. 
//In line 25 I'm using console.log to check that Im getting the data that I want before populating it on the page.
//There is one problem with this solution in its current form, sometimes family members names will match. Meaning sometimes 'Danny' will get 'Danny' as a secret santa. This can be resolved by pressing the 'Randomize' button again.
//I would have to make an if/else statement to make sure that the the secret santa is '=== !Danny' (I'd need to do this for each name)  
function getData() {
  let giftGiving = []
  fetch (apiURL)
  .then (response => response.json())
  .then (familyMembers = familyMembers => {
    for (i=0; i<familyMembers.length; i++) {
      giftGiving.push(familyMembers[i].name)
      giftGiving.sort(() => Math.random() -0.5) 
    }
    console.log('New', giftGiving)
    personOne.innerText = giftGiving[0]
    personTwo.innerText = giftGiving[1]
    personThree.innerText = giftGiving[2]
    personFour.innerText = giftGiving[3]
    personFive.innerText = giftGiving[4]
    personSix.innerText = giftGiving[5]
    personSeven.innerText = giftGiving[6]
    personEight.innerText = giftGiving[7]
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



