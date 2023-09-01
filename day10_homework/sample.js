var Color = [
    "yellow",
    "purple",
    "orange",
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "lightgreen",
    "lemon",
  ];
  var index = 0 ;
  var div = document.querySelector("#container");
  const button = document.querySelector("#colour_bt");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  })