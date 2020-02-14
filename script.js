//make Y divs
//append X divs as child to Y divs
//make X divs inline-block
let etch = document.getElementById("etch")
let y
function init (dim) {
    let div = document.createElement("DIV")
   
    for (i=0;i<dim;i++) {
        etch.appendChild(div.cloneNode())
        
    }
    let yAxis = etch.querySelectorAll("DIV")
    for (i=0;i<dim;i++){
        yAxis[i].className = "y"
    }
    y = document.getElementsByClassName("y")
    for(i=0;i<dim;i++){
        for(x=0;x<dim;x++){
            y[i].appendChild(div.cloneNode())
       }
    }
    for(i=0;i<dim;i++) {
        for (x=0;x<dim;x++) {
            y[i].querySelectorAll("DIV")[x].className = "x"
        }
    }
}