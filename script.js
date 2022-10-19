const pads = document.getElementsByClassName("drum-pad");

pads.forEach(p => {
  p.addEventListener("click", (e) => {
    console.log(e);
  });
});
