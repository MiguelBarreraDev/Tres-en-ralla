const tablero = document.getElementById("tablero");
const circulo = document.createElement("I");
    circulo.classList.add("far","fa-circle","blue","check");
  
const aspa = document.createElement("I");
    aspa.classList.add("fas","fa-times","red","check");


let array = [0,1,2,3,4,5,6,7,8];
let turno = true;

tablero.addEventListener("click", async (e) => {
    let numeroRandon,hijos;
    const item = e.target;

    if(!item.classList.contains("check") && !item.classList.contains("tablero") && turno == true){
        item.appendChild(circulo.cloneNode());
        array = array.filter((e) => e != item.id);
        turno = false;
        if(array.length > 1) {
            numeroRandon = Math.floor(Math.random() * array.length);
            setTimeout(() => {
                tablero.children[array[numeroRandon]].appendChild(aspa.cloneNode());
                array = array.filter((e) => e != tablero.children[array[numeroRandon]].id);    
                turno = true;
            }, 500);
        }
    } 
    else if (array.length >= 1 && !item.classList.contains("check") && !item.classList.contains("tablero")) {
        alert("Espere su turno puto");
    }
})

/* ------------------------------------------------------------ */
/* SETTING
/* ------------------------------------------------------------ */

const btnAgain = document.getElementById("again");
const posItem = document.querySelectorAll(".grid-item");

btnAgain.addEventListener("click", () => {
    console.log(posItem)
    for(child of posItem) {
        console.log(child);
        if (!child.hasChildNodes()) {
            continue;
        } else {
            let nodeChild = child.querySelector("I");
            child.removeChild(nodeChild);
        }
    }
    array = [0,1,2,3,4,5,6,7,8];
    turno = true;
})