function save(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = document.getElementById("name").value;
    var reg = document.getElementById("reg").value;
    var course = document.getElementById("course").value;
    var gender = document.querySelector('input[name="gender"]:checked') ?
        document.querySelector('input[name="gender"]:checked').value : "Not specified";
    var num = document.getElementById("num").value;
    var email = document.getElementById("email").value;
    var table = document.getElementById("list");

    var row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = reg;
    row.insertCell(2).innerText = course;
    row.insertCell(3).innerText = gender;
    row.insertCell(4).innerText = num;
    row.insertCell(5).innerText = email;
    var deleteCell = row.insertCell(6);
    deleteCell.innerHTML = "<button onclick='deleteitem(this)'>DELETE</button>";
}

function deleteitem(button) {
    var row = button.parentElement.parentElement;
    row.remove();
}