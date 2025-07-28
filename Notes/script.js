const createBtn = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");

window.addEventListener("load", () => {
    const savedNotes = JSON.parse(localStorage.getItem("dairy")) || [];
    savedNotes.forEach(note => {
        if(note.text != ""){
            addNotes(note.text);
        }
    })
})

function addNotes(text){
    const note = document.createElement("div");
    note.className = "note";
    notesContainer.appendChild(note);

    note.style.display = "block";
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.className = "my-notes";
    note.appendChild(textArea);

    const deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash delete-icon";
    note.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        textArea.remove();
        note.style.display = "none";
        deleteBtn.remove();
        saveNotes();
    })
    saveNotes();
}

createBtn.addEventListener("click", () => addNotes(""));

function saveNotes(){
    const notes = [];
    document.querySelectorAll(".note").forEach(note => {
        const text = note.querySelector(".my-notes").value;
        notes.push({text});
    })
    localStorage.setItem("dairy", JSON.stringify(notes));
}
