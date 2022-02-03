const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;
let buttonNewGame = document.querySelector('.newGame');
buttonNewGame.addEventListener('click',() => {restart("Good Luck!)")},false);
// link text
playerLivesCount.textContent = playerLives;

// generate the data
const getData = () => [
    {imgSrc: "images/beatles2.jpg" , name: "beatles"},
    {imgSrc: "images/daftpank.jpg" , name: "daftpank"},
    {imgSrc: "images/gorillaz.jpg" , name: "gorillaz"},
    {imgSrc: "images/ledzeppelin.jpg" , name: "ledzeppelin"},
    {imgSrc: "images/nirvana.jpg" , name: "nirvana"},
    {imgSrc: "images/pinkFloid.jpg" , name: "pinkFloid"},
    {imgSrc: "images/redHot.jpg" , name: "redHot"},
    {imgSrc: "images/riotdivision.jpg" , name: "riotdivision"},
    {imgSrc: "images/beatles2.jpg" , name: "beatles"},
    {imgSrc: "images/daftpank.jpg" , name: "daftpank"},
    {imgSrc: "images/gorillaz.jpg" , name: "gorillaz"},
    {imgSrc: "images/ledzeppelin.jpg" , name: "ledzeppelin"},
    {imgSrc: "images/nirvana.jpg" , name: "nirvana"},
    {imgSrc: "images/pinkFloid.jpg" , name: "pinkFloid"},
    {imgSrc: "images/redHot.jpg" , name: "redHot"},
    {imgSrc: "images/riotdivision.jpg" , name: "riotdivision"},
];

//randomize

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //generate the html
    cardData.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // attach the cards yo the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
    checkCards(e)
    });
  });
};

//check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCards = document.querySelectorAll(".toggleCard");
   //logic
   if(flippedCards.length === 2){
       if(
       flippedCards[0].getAttribute("name") === 
       flippedCards[1].getAttribute("name")
       ) {
        playerLives++;
        playerLivesCount.textContent = playerLives;
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        });
    } else {
        flippedCards.forEach( (card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"),1400);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
            restart("try again");
      }
    }
  }
  //Run a check to see if we won the game
  if(toggleCards.length === 16){
   setTimeout(() => window.alert("You Win!"),100);
};
};


//Restart
const restart = (text) => {
    let cardData  = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        // randomize
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        },1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
};

cardGenerator();


/*let newGameButton = document.createElement('button');
   newGameButton.classList.add('newGame');
   newGameButton.textContent = "GoNewGame!"
   document.body.appendChild(newGameButton);
   setTimeout(() => window.alert("You Win!"),1000);
   newGameButton.addEventListener('click',() => {restart("Good Luck!)")},false);*/