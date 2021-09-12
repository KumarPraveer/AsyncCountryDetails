const getCountry = (countryName, callback) => {
  const countryRequest = new XMLHttpRequest();
  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find((country) => {
        return country.name === countryName;
      });
      callback(undefined, country);
    } else if (e.target.readyState === 4) {
      callback("Unable to fetch data", undefined);
    }
  });

  countryRequest.open("GET", "https://restcountries.eu/rest/v2/all");
  countryRequest.send();
};

const generateElements = (detail) => {
  const div = document.createElement("div");
  const capital = document.createElement("p");
  capital.textContent = `Country Capital : ${detail.capital}`;
  div.appendChild(capital);
  const region = document.createElement("p");
  region.textContent = `Country Region : ${detail.region}`;
  div.appendChild(region);
  const population = document.createElement("p");
  population.textContent = `Country Population : ${detail.population}`;
  div.appendChild(population);
  const borders = document.createElement("p");
  borders.textContent = `Country Borders : ${detail.borders}`;
  div.appendChild(borders);
  return div;
};
