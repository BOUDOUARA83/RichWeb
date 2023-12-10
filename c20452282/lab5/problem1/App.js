// NotesApp.js

import React, { useState } from 'react';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState('');

  const colors = ['Aqua', 'Green', 'Red', 'Purple'];

  const addNote = () => {
    if (userInput === '') {
      alert('Please enter a note');
    } else {
      const newNote = {
        text: userInput,
        color: 'white', // default color
      };

      setNotes([...notes, newNote]);
      setUserInput('');
    }
  };

  const editNoteText = (index) => {
    const editedNote = prompt('Edit Note, please');

    if (editedNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[index].text = editedNote;
      setNotes(updatedNotes);
    }
  };

  const deleteNoteElement = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const changeColour = (index, color) => {
    const updatedNotes = [...notes];
    updatedNotes[index].color = color;
    setNotes(updatedNotes);
  };

  return (
    <div className="centreButton">
      <input
        type="text"
        placeholder="Enter note"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <div key={index} className="Notes" style={{ backgroundColor: note.color }}>
            <li>{note.text}</li>
            <button onClick={() => editNoteText(index)}>Edit</button>
            <button onClick={() => deleteNoteElement(index)}>Delete</button>
            {colors.map((color) => (
              <button key={color} onClick={() => changeColour(index, color)}>
                {color}
              </button>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
