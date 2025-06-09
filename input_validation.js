// Creates variables/arrays necessary and integrates with HTML; Inputs validation for all fields

// Get the input fields and the form

let counter = 1
let assignments = []

let assignmentList = document.getElementById("assignment-list")

let localAssignments = JSON.parse(localStorage.getItem('assignments'))
if(localAssignments){
    assignments.push(...localAssignments)
    assignments.forEach(assignment => {
        let newElement = document.createElement("li")
        newElement.innerHTML = `
            <span> ${assignment.name}: ${assignment.grade} </span>
        `
        assignmentList.appendChild(newElement)
    })
}
function addAssignment() {

    let assignmentName = document.getElementById("assignment-name")
    let assignmentGrade = document.getElementById("assignment-grade")

    if(assignmentGrade.value < 0 || assignmentGrade.value > 5) {
        alert("The grade must be between 0 and 5")
        return;
    }
    if(assignmentName.value === "") {
        alert("Assignment name is needed")
        return
    }

    assignments.push({
        name: assignmentName.value,
        grade: assignmentGrade.value
    })

    let newElement = document.createElement("li")
    newElement.innerHTML = `
        <span> ${assignmentName.value}: ${assignmentGrade.value} </span>
    `
    assignmentList.appendChild(newElement)

    assignmentName.value = ""
    assignmentGrade.value = ""

    updateGPA()
    localStorage.setItem('assignments', JSON.stringify(assignments))
}
