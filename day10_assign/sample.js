var Color = [
    "cyan",
    "red",
    "blue",
    "yellow",
    "purple",
    "green",
    "lightgreen",
    "voilet",
    "orange",
    "lemon"
  ];
    var index = 0 ;
    const circle = document.getElementById("circle");
    const shape = document.querySelector(".shape");
    const Changecolor = document.querySelector("#colour_bt");
    const changeShape = document.querySelector("#shape_bt");
    Changecolor.addEventListener("click",()=>{  
        if (index === Color.length) {
        index = 0;
        }
        circle.style.backgroundColor = Color[index];
        index++;
    })
    var Tringle = false;
    changeShape.addEventListener("click",()=>{
        if(!Tringle){
            var Shape = document.querySelector(".shape");
            Shape.className = "triangle";
            Tringle = true;
        }
        else{
            var shape = document.querySelector(".triangle");
            shape.className = "shape";
            Tringle = false;
        }
    })