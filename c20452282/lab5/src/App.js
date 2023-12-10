import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [quote, setQuote] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  };

  const colors = ['Aqua', 'Green', 'Red', 'Purple'];

  const addNote = () => {
    if (userInput === '') {
      alert('Please enter a note');
    } else {
      const newNote = {
        text: userInput,
        color: 'white',
      };
      setNotes([...notes, newNote]);
      setUserInput('');
      fetchRandomQuote();
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

  const searchNotes = () => {
    const filteredNotes = notes.filter((note) =>
      note.text.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`centreButton ${darkMode ? 'dark-mode' : ''}`}>
      <input
        type="text"
        placeholder="Enter note"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
      <button onClick={searchNotes}>Search</button>
      <input
        type="text"
        placeholder="Search notes"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

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

      <p>Random Quote: {quote}</p>
    </div>
  );
};

export default NotesApp;
