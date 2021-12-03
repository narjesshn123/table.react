let rowIndex,
    table = document.getElementById("table");

function checkEmptyInput(){
    let isEmpty = false;
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;
    if (fname ===""){
        alert("First Name cannot be empty")
        isEmpty = true;
    }
    else if (lname ===""){
        alert("last Name cannot be empty")
        isEmpty = true;
    }
    else if (age ==="") {
        alert("age cannot be empty")
        isEmpty = true;
    }
    return isEmpty;
}


function addHtmlTableRow() {
    if (!checkEmptyInput()) {
        let newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
    }
}

function selectedRowToInput(){

    for (let i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function (){

            rowIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0] . innerHTML;
            document.getElementById("lname").value = this.cells[1] . innerHTML;
            document.getElementById("age").value = this.cells[2] . innerHTML;
        }
    }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
    if (! checkEmptyInput()) {
        let fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value;
        table.rows[rowIndex].cells[0].innerHTML = fname;
        table.rows[rowIndex].cells[1].innerHTML = lname;
        table.rows[rowIndex].cells[2].innerHTML = age;
    }
}
function removeSelectedRow() {
    if (!checkEmptyInput()) {
        table.deleteRow(rowIndex);

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("age").value = "";
    }
}

