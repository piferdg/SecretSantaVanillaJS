# Secret Santa Code Challenge
### by Danny Pifer

## Details:
 - I've combines Part I and Part II by writing a function that will fetch the family members from the database I created, then it will sort them into a random order. So each time the user presses the 'Randomize' button, this will happen.

## Improvements I'd make
 - I will need to write an if/else statement that makes sure that the secret santa gift giver isn't getting themselves. For example, I would need to write something that says: 
   - `if (giftGiver === !Danny) {
    return personOne.innerText = giftGiving[0].name
      }`
  Because 'Danny' is hard coded as the first family member, something similar to this would ensure that the the first returned index ([0]) wouldn't be 'Danny'. It might even be better to run a `for each` on the family members to accomplish this.

  - I would also like to account for Part III. My database is set up for full CRUD so if I were to make a form on my page, I could add new family members to the database. I would then have to refactor the code to take into consideration which family members would giving to which family members. It might even make sense to redo the architecture of my database to account for these new members, so everybody isn't in one table. I would make a new table an write a join in a SQL database, or I could instead use a non SQL database like MongoDB and just write the database in a way that could account for more children, and spouses.

  - I would also like to make the frontend look better! I mainly wanted to match a family member with another for gift giving, but I could also add a form to be able to add more family members, a I mentioned above to address Part III. Additionally I would refactor this into React or Vue. 

## Github repositories:
  - Frontend: https://github.com/piferdg/SecretSantaVanillaJS
  - Backend: https://github.com/piferdg/SecretSantaBackend

## Deployed links:
  - Frontend: https://secret-santa-73ddf.firebaseapp.com/
  - Backend: https://secret-santa-challenge.herokuapp.com/family

## Testing
  - I used Cypress for my testing. the test I wrote is in `cypress > integration > secretSanta.spec.js.`
  - There is a screenshot of the passed tests, and the random family members in `cypress > screenshots > examples > secretSanta.spec.js.`
