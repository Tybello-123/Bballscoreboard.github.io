const addOneBtn = document.getElementById('one-btn'); 
const addTwoBtn = document.getElementById('two-btn'); 
const addThreeBtn = document.getElementById('three-btn');
const homeCounter = document.getElementById('h-count');
const guestCounter = document.getElementById('g-count');


let count = 0;

const addOne = () => {
    count = count + 1
homeCounter.textContent = count;
guestCounter.textContent = count;
}

const addTwo = () => {
    count = count + 2
homeCounter.textContent = count;
}

const addThree = () => {
    count = count + 3
homeCounter.textContent = count;
}