//Here what Im doing is creating elements by using 'document.createElement' and Im also grabbing elements by using 'document.getElement'. 
//This will allow me to use these elements to populate the data (family members). It will also allow me to use the two buttons. 
let family = document.getElementsByClassName('family-members')
let giftGivers = document.getElementsByClassName('random-group')[0]
let person = document.createElement('li')
let familyNames = document.getElementById('names')
let randomButton = document.getElementById('random-button')
let deleteButton = document.getElementById('delete-button')

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
    person.innerText = giftGiving
  })
  
}
//Here I'm appending the 'person' to familyNames, as I've set these variables above
familyNames.appendChild(person)

//This function is 'deleting' familyNames by setting it to 'null'.
function deleteItems() {
  return person.innerText = null 
}

//Here I'm adding an event listener to the two buttons.  
deleteButton.addEventListener('click', deleteItems)
randomButton.addEventListener('click', getData)



