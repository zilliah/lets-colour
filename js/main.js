document.querySelector("button").addEventListener("click", getColours);
document.querySelector("button + button").addEventListener("click", clearColours);

const colourBox = document.querySelector(".colour-box");

function getColours(){
  let n = document.querySelector("input").value;
  let c = document.querySelector("select").value;

  const url = `https://x-colors.herokuapp.com/api/random/${c}?number=${n}`;

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data);
        console.log(typeof(data))

        if (Array.isArray(data)) {
          for (let colour of data) {
            let newDiv = document.createElement("div");
            newDiv.style.backgroundColor = colour.hex;
            colourBox.appendChild(newDiv);
          }
        } else {
          let newDiv = document.createElement("div");
          newDiv.style.backgroundColor = data.hex;
          colourBox.appendChild(newDiv);
        }

      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}

function clearColours() {
  while (colourBox.firstChild) {
    colourBox.removeChild(colourBox.lastChild);
  }
}