const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/background-1.jpg") {
    myImage.setAttribute("src", "imagens/baixados.jpeg");
  } else {
    myImage.setAttribute("src", "imagens/background-1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bem vindo a biblioteca sobre a história de RF, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem vindo a biblioteca sobre a história de RF, ${storedName}`;    
  }

myButton.onclick = () => {
    setUserName();
  };  
