const country = [];
const root = document.querySelector(".root");

const formName = document.querySelector("#formName");
formName.addEventListener("submit", (e) => {
  e.preventDefault();
  root.innerHTML = "";

  const userInput = e.target.elements.text.value;
  const firstLetter = userInput.substring(0, 1).toUpperCase();
  const remainingLetter = userInput.substring(1).toLowerCase();
  const finalLetter = firstLetter + remainingLetter;
  getCountry(finalLetter, (error, country) => {
    if (error) {
      console.log(error);
    } else {
      root.appendChild(generateElements(country));
    }
  });

  e.target.elements.text.value = "";
});
