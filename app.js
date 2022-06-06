let playerId = 2;
const list = document.getElementById('player-list');
const nameInput = document.getElementById('name');
const townInput = document.getElementById('town');

const deleteRow = ( rowId ) => {
    let row = document.getElementById(`row${rowId}`);
    row.remove();
};

document.getElementById('btn-add-player').addEventListener('click', (evt) => {
    evt.preventDefault();                                   // important for bootstrap forms
    if(nameInput.value && townInput.value) {
        const newRow = document.createElement('tr');        // create a new row
        newRow.id = `row${playerId}`;                       // with its own ID

        const newID = document.createElement('td');         // create data cells
        const newName = document.createElement('td');
        const newTown = document.createElement('td');
        const toRemove = document.createElement('td');
        newID.textContent = `${playerId}`;                // provide the cells with data
        newName.textContent = nameInput.value;
        newTown.textContent = townInput.value;     
        toRemove.innerHTML = `<button id="btn${playerId}" class="btn btn-danger" onclick="deleteRow(${playerId})">Remove</button>`;          
        newRow.appendChild(newID);                          // add the cells to the new row
        newRow.appendChild(newName);
        newRow.appendChild(newTown);
        newRow.appendChild(toRemove)

        list.appendChild(newRow);                           // add the new row to the table
        nameInput.value = "";                               // reset input fields
        townInput.value = "";
        playerId++;
    }
    // else {  }        // please enter a name and location  
});

const updateRowIds = ( start) => {
    rows = document.querySelectorAll('tr > td:first-child');
    for(let r = start; r < rows.length; r++ ) {
        rows[r].textContent = `${r}`;
    }
};