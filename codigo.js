const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener('click', () => changeGrid());

function changeGrid() {
    let res = prompt('Choose your grid resolution 0-100: ');
    if (res < 0 || res > 100) {
        return alert('number should be between 0 and 100');
    } else if (res === '' || isNaN(res)) {
        return alert('Shold insert a number');
    }
    createBoxes(res)
}

function createBoxes(res) {
    container.innerHTML = "";
    for (let i = 0; i < res*res; i++) {
        let box = document.createElement('div');
        box.classList.add("caja")
        box.style.backgroundColor = 'white';
        box.style.boxSizing = 'border-box';
        box.style.height = `${600/res}px`;
        box.style.width = `${600/res}px`;
        box.style.display = 'flex';
        box.style.border = '1px solid black';

        container.appendChild(box);

        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = 'black'
        });       
    }
}



createBoxes(16);