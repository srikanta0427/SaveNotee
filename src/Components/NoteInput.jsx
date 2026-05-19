import React, { useState } from "react";

import NoteCard from "./NoteCard";

const NoteInput = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddNote() {
    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Check duplicate title
    const alreadyExist = notes.some(
      (note) => note.title.toLowerCase() === title.toLowerCase()
    );

    if (alreadyExist) {
      alert("Note title already exists");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
    };

    setNotes([...notes, newNote]);

    // Clear fields
    setTitle("");
    setDescription("");
  }

  function handleDelete(id) {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-start p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
        

        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Notes App
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Write your note..."
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              onClick={handleAddNote}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Add Note
            </button>
          </div>
        </div>

    
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Notes
          </h2>

          {notes.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-6 text-center text-gray-500">
              No Notes Yet
            </div>
          ) : (
            <div className="grid gap-4">
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  onDelete={() => handleDelete(note.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteInput;