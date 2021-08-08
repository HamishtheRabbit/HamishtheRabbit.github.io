let myImage = document.querySelector('img'); /*the document method querySelector('img') returns the first img with the document*/

myImage.onclick = function() { /*onclick is an event handler, it runs the function if myImage is clicked*/
    let mySrc = myImage.getAttribute('src');/*the function, getAttribute('src') returns the src of the img and it is stored in the variable mySrc*/
    if(mySrc === 'images/fluffy-black-dog.jpg') {
        myImage.setAttribute('src','images/fluffy-blonde-dog.jpg');/*changes picture*/
    } else {
        myImage.setAttribute('src','images/fluffy-black-dog.jpg');/*changes picture back to original image*/
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() { //creates function called setUserName
    let myName = prompt('Please enter your name.'); //the prompt function asks the user to enter data and stores it in myName after the user clicks OK
    if (!myName) { //checks there is a value in myName, if not runs function again
        setUserName();
    } else {
    localStorage.setItem('name',myName); /*localStorage allows us to store and retrieve data in the browser.
    The setItem() function creates a data item called 'name' and sets its value to the myName variable*/
    myHeading.textContent = 'What are the BEST Pets, ' + myName + '?'; //changes the heading of the webpage
    }
}

//initialization code, structures the app when it first loads.
if (!localStorage.getItem('name')) { /*checks if there's a value in the data item labeled 'name'.
    getItem retrieves the value in the data item 'name'*/
    setUserName(); //if the data item doesn't exist this function creates it
} else {
    let storedName = localStorage.getItem('name'); //if the data item does exist, this retrieves the name and stores it in storedName
    myHeading.textContent = 'What are the BEST Pets, ' + storedName + '?';
}

myButton.onclick = function() { //allows the user to enter a new name when clicking the button
    setUserName();
}