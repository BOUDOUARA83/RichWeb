let colors = ["red", "Green", "pink", "Purple"];

function addNote() {

    let userInput = document.getElementById("UserInput");
    //make sure that the user doesnt upload empty note
    if (userInput.value == "")
        alert("Please enter a note");
    else {
        let list = document.getElementById("NoteList");
        let div = document.createElement("div");
        div.className = "Notes";

        let note = document.createElement("li");
        let noteText = document.createTextNode(userInput.value);
        note.appendChild(noteText);
        div.appendChild(note);

        let editButton = document.createElement("button")
        editButton.innerHTML = "Edit";
        editButton.onclick = function(){editNote(noteText)};
        editButton.className = "NoteButton";
        div.appendChild(editButton);

        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function(){deleteNote(div)}
        deleteButton.className = "NoteButton";
        div.appendChild(deleteButton);

        for (let i = 0; i < colors.length; i++)
        {
            let colorButton = document.createElement("button");
            colorButton.innerHTML = colors[i];
            colorButton.className = colorButton.innerHTML;
            colorButton.onclick = function(){changeColour(div,colorButton.innerHTML)};
            div.appendChild(colorButton);
        }

        list.appendChild(div);
    }
}

function editNote(originalNote) {
    console.log(originalNote);
    let editedNote = prompt("Edit Note please");
    //making sure they entered something
    if(editedNote == "")
        alert("You entered nothing")
    else
        originalNote.nodeValue = editedNote;
}

function deleteNote(originalNote) {
    originalNote.remove();
}

function changeColour(note,colour) {
    note.style.backgroundColor = colour;
}