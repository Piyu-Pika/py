const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

let students = []; // Array to store student data

studentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;

    // Add student data to the array
    students.push({ name: name, rollNumber: rollNumber });

    // Update the table
    updateStudentTable();

    // Clear the form
    studentForm.reset();
});

function updateStudentTable() {
    studentTable.innerHTML = ""; // Clear existing table data

    students.forEach(function(student) {
        let row = studentTable.insertRow();
        let nameCell = row.insertCell();
        let rollNumberCell = row.insertCell();
        let actionsCell = row.insertCell();

        nameCell.innerHTML = student.name;
        rollNumberCell.innerHTML = student.rollNumber;

        // Add Edit/Delete buttons (implementation not shown here)
        actionsCell.innerHTML = '<button>Edit</button> <button>Delete</button>'; 
    });
}