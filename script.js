//make Y divs
//append X divs as child to Y divs
//make X divs inline-block
function init (dim) {
    let area = dim * dim;
    let div = document.createElement("DIV");
    let etch = document.getElementById("etch");
    for (i=0;i<area;i++){
        etch.appendChild(div.cloneNode());
    }
    let cell = etch.querySelectorAll("DIV");
    for (i=0;i<area;i++){
        cell[i].className = "cell";
    }
    etch.style.display = "grid";
    etch.style.gridTemplateColumns = divideSides(dim)
    etch.style.width = "960px"
    etch.style.height = "960px"
}

let fraction = ""

function divideSides (dim) {
    for (i=0;i<dim;i++)
    fraction += "1fr "
    return fraction
}