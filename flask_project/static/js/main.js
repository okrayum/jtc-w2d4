const myFaveLangs = ["javascript", "react", "html", "css"];
const myFaveTypesOfFoods = ["mexican", "italian", "american", "asian", "fusion", "korean", "japanese", "chinese"];
const myFaveShows = ["halo", "carnival row", "shogun", "shōgun", "the wheel of time", "the rings of power"];
const message = document.getElementById("responseToUser");
const emptyPrompt = "I bet you have a favorite!";


const codingPage = () => {
  const userFaveLang = prompt("What is your favorite programing language?");

  if (userFaveLang === null || userFaveLang === "") {
    message.textContent = emptyPrompt;
  } else {
    if (myFaveLangs.includes(userFaveLang.toLowerCase())) {
      message.textContent = `Really? I enjoy using ${userFaveLang} too!`;
    } else {
      message.textContent = `I bet ${userFaveLang} is a great language!`;
    }
  }
}

const foodiePage = () => {
  const userFaveFood = prompt("What is you favorite type of food?");

  if (userFaveFood === null || userFaveFood === "") {
    message.textContent = emptyPrompt;
  } else {
    if (myFaveTypesOfFoods.includes(userFaveFood.toLowerCase())) {
      message.textContent = `Really? I enjoy eating ${userFaveFood} cuisine too!`;
    } else {
      message.textContent = `I bet ${userFaveFood} tastes great! I will have to try it sometime.`;
    }
  }
}

const streamingPage = () => {
  const userFaveShow = prompt("What is you favorite show to stream?");

  if (userFaveShow === null || userFaveShow === "") {
    message.textContent = emptyPrompt;
  } else {
    if (myFaveShows.includes(userFaveShow.toLowerCase())) {
      message.textContent = `Really? I enjoy watching ${userFaveShow} too!`;
    } else {
      message.textContent = `I bet ${userFaveShow} is good! I will have to watch it sometime.`;
    }
  }
}

const loadPage = () => {
  const currentPage = window.location.pathname;

  if (currentPage === "/coding") codingPage();
  if (currentPage === "/foodie") foodiePage();
  if (currentPage === "/streaming") streamingPage();

}

window.onload = loadPage;