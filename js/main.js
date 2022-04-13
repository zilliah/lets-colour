function getFetch(){
  console.log(choice);

  const url = "";

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}

