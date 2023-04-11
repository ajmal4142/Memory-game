let obj = [
  {
    name: "pizza",
    img: "Images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "Images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "Images/fries.png",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "Images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "Images/milkshake.png",
  },
  {
    name: "pizza",
    img: "Images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "Images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "Images/fries.png",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "Images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "Images/cheeseburger.png",
  },
];
console.log(obj);
obj.sort(() => 0.5 - Math.random());
const cards = document.querySelector("#grids");
let moves = 0;
let remaining = 20;
let points = 0;
let currentMove = document.getElementById("move");
let totalPoints = document.getElementById("point");
let remainingMove = document.getElementById("remainingMove");

createBoard();

function setAttributes(el, attrs) {
  /// for setting attributes
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function createBoard() {
  for (let i = 0; i < obj.length; i++) {
    const image = document.createElement("img");
    setAttributes(image, {
      class: "col-4 col-sm-4 col-xl-3 col-lg-3 col-md-3 border border-primary",
      src: "Images/blank.png",
      height: "120px",
      data_id: i,
    });
    image.addEventListener("click", flipCard);

    cards.append(image);
  }
}

let cardChoosen = [];
let cardsChoosenid = [];

function flipCard() {
  let dataid = this.getAttribute("data_id");
  cardChoosen.push(obj[dataid].name);
  cardsChoosenid.push(dataid);
  this.setAttribute("src", obj[dataid].img);
  console.log(cardChoosen.length + " length");
  if (cardChoosen.length === 2) {
    matchDesider();
  }

  if (moves < obj.length) {
    moves++;
  }
  if (remaining > 0) {
    remaining--;
  }
  currentMove.innerHTML = moves;

  remainingMove.innerHTML = remaining;
  if (moves === 20 && points !== 6) {
    alert("You failed.. Want to play again?..");
    setTimeout(myGreeting, 3000);
  }
}

function matchDesider() {
  const cards = document.querySelectorAll("img");

  if (cardChoosen[0] === cardChoosen[1]) {
    points++;
    totalPoints.innerHTML = points;
    if (points === 6) {
      alert("won");
      setTimeout(myGreeting, 3000);
    }
    cards[cardsChoosenid[0]].setAttribute("src", "Images/white.png");
    cards[cardsChoosenid[1]].setAttribute("src", "Images/white.png");
    cards[cardsChoosenid[0]].removeEventListener("click", flipCard);
    cards[cardsChoosenid[1]].removeEventListener("click", flipCard);
  } else {
    cards[cardsChoosenid[0]].setAttribute("src", "Images/blank.png");
    cards[cardsChoosenid[1]].setAttribute("src", "Images/blank.png");
  }

  cardsChoosenid = [];
  cardChoosen = [];
}

function myGreeting() {
  location.reload();
}


