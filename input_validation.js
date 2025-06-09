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
