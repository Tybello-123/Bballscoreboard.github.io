// const addOneBtn = document.getElementById('one-btn'); 
// const addTwoBtn = document.getElementById('two-btn'); 
// const addThreeBtn = document.getElementById('three-btn');

// const addOneBtnG = document.getElementById('g-one-btn'); 
// const addTwoBtnG = document.getElementById('g-two-btn'); 
// const addThreeBtnG = document.getElementById('g-three-btn');


const homeCounter = document.getElementById('h-count');
const guestCounter = document.getElementById('g-count');



const newGameBtn = document.getElementById("new-game");
const saveGameBtn = document.getElementById("save-game");
const endGameBtn = document.getElementById("end-game");




let homeCount = 0;

const addOne = () => {
   homeCount = homeCount + 1
homeCounter.textContent = homeCount;
  
}

const addTwo = () => {
    homeCount = homeCount + 2
homeCounter.textContent = homeCount;
 
}

const addThree = () => {
homeCount = homeCount + 3
homeCounter.textContent = homeCount;

}



let guestCount = 0;

const addOneGuest = () => {
    guestCount = guestCount + 1
guestCounter.textContent = guestCount;

}

const addTwoGuest = () => {
    guestCount = guestCount + 2
guestCounter.textContent = guestCount;
}

const addThreeGuest = () => {
    guestCount = guestCount + 3
guestCounter.textContent = guestCount;
}


//Display Messages
let displayHeading = document.getElementById('d-heading')

const endGame = () => {
    if (homeCount > guestCount) {
        homeCounter.style.backgroundColor = '#367E18'; 
        guestCounter.style.backgroundColor = '#DC0000'; 
        displayHeading.textContent += " : Home Wins"

    } else if(homeCount < guestCount) {

        homeCounter.style.backgroundColor = '#DC0000'; 
        guestCounter.style.backgroundColor = '#367E18'; 
        displayHeading.textContent += " : Guest Wins";

    }else{
        homeCounter.style.backgroundColor = 'red'; 
        guestCounter.style.backgroundColor = 'red'; 
        displayHeading.textContent += " : It's A Tie";
    }
}


let saveHomeCount;
let saveGuestCount;
let getHomeCount = document.getElementById("save-home")
let getGuestCount = document.getElementById("save-guest")

const saveGame = () => {

    saveHomeCount = homeCount + " -- ";
    getHomeCount.textContent += saveHomeCount;

    saveGuestCount = guestCount + " -- ";
    getGuestCount.textContent += saveGuestCount;
}


const newGame = () => {

   
 
    homeCounter.textContent = 0;
    guestCounter.textContent = 0;

    getHomeCount.textContent = "";
    getGuestCount.textContent = "";

    displayHeading.textContent = "Basketball ScoreBoard🏀🏀";
    homeCounter.style.backgroundColor = '#04879C'; 
    guestCounter.style.backgroundColor = '#04879C';

    guestCount = 0;
    homeCount = 0;
    
    getHomeCount.textContent = "";
  
    getGuestCount.textContent = "";
    
}

