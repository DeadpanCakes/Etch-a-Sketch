//make Y divs
//append X divs as child to Y divs
//make X divs inline-block
function init (dim) {
    let area = dim * dim;
    let div = document.createElement("DIV");
    let board = document.getElementById("board");
    for (i=0;i<area;i++){
        board.appendChild(div.cloneNode());
    }
    let cell = board.querySelectorAll("DIV");
    for (i=0;i<area;i++){
        cell[i].className = "cell";
        cell[i].id = i
    }
    makeColorable(area)
    
    board.style.display = "grid";
    board.style.gridTemplateColumns = divideSides(dim)
    board.style.width = "960px"
    board.style.height = "960px"
}

let fraction = ""

function divideSides (dim) {
    for (i=0;i<dim;i++)
    fraction += "1fr "
    return fraction
}

function reset () {
    let board = document.getElementById("board");
    let dim = board.childElementCount;
    let children = document.getElementById("board").childNodes
    for (i=0;i<dim;i++){
        board.removeChild(board.childNodes[0])
    }
    board.style.gridTemplateColumns = ""
    fraction = ""
    init(prompt("Into how many squares would you like to split the grid?", 16))
}

function color(cellNum) {
    document.getElementById(cellNum).style.backgroundColor = "pink"
} 


function makeColorable(area){
    for (i=0;i<area;i++){
        let cell = document.getElementById(i)
        cell.addEventListener("mouseover", () => {color(event.target.id)})
    }
}


let resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", () => {reset()})

//init(16)